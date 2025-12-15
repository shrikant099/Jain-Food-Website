"use client";

import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "@/features/cart/selector";
import { clearCart, addItem, removeItem } from "@/features/cart/cartSlice";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID_ORDER, PUBLIC_KEY } from "@/keys";
import { useRouter } from "next/navigation";

const coupons = [
  {
    title: "10% OFF on Train Food Orders",
    desc: "Valid till 31 Dec 2025",
    min: 500,
    type: "percent",
    value: 10,
    code: "FLAT10",
  },
  {
    title: "15% OFF on Bulk Orders",
    desc: "Perfect for group & family travel",
    min: 2500,
    type: "percent",
    value: 15,
    code: "BULK15",
  },
  {
    title: "₹50 OFF on Train Meals",
    desc: "Limited time railway offer",
    min: 499,
    type: "flat",
    value: 50,
    code: "HAPPY50",
  },
  {
    title: "₹35 OFF for Students",
    desc: "Budget friendly meals",
    min: 350,
    type: "flat",
    value: 35,
    code: "STUD35",
  },
];

export default function CheckoutPage() {
  const cart = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const items = Object.values(cart);
  const router = useRouter();
  /* ================= PRICE ================= */
  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  /* ================= COUPON ================= */
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [discount, setDiscount] = useState(0);

  const applyCoupon = (coupon) => {
    if (subtotal < coupon.min) return;

    const discountValue =
      coupon.type === "percent"
        ? (subtotal * coupon.value) / 100
        : coupon.value;

    setAppliedCoupon(coupon);
    setDiscount(discountValue);
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setDiscount(0);
  };

  /* ================= GST ================= */
  const GST_RATE = 0.05;
  const gstAmount = (subtotal - discount) * GST_RATE;
  const total = subtotal - discount + gstAmount;
  const [status, setStatus] = useState("idle");

  /* ================= FORM ================= */
  const [form, setForm] = useState({
    name: "",
    phone: "",
    train: "",
    pnr: "",
    coach: "",
    seat: "",
    payment: "cod",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submitOrder = async (e) => {
    e.preventDefault();

    const itemsText = items
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} x ${item.qty} = ₹${item.price * item.qty}`
      )
      .join("\n");


    if (
      !form.name ||
      !form.phone ||
      !form.train ||
      !form.pnr ||
      !form.coach ||
      !form.seat
    ) {
      setStatus("error");
      return;
    }

    if (total.toFixed(0) < 99) {
      setStatus("lessThan99");
      return;
    }

    setStatus("loading");
    try {
      await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID_ORDER,
        {
          name: form.name,
          phone: form.phone,
          train: form.train,
          pnr: form.pnr,
          coach: form.coach,
          seat: form.seat,
          payment: form.payment.toUpperCase(),

          // Order Details
          items: itemsText,
          subtotal: subtotal.toFixed(0),
          discount: discount.toFixed(0),
          gst: gstAmount.toFixed(0),
          total: total.toFixed(0),
        },
        PUBLIC_KEY
      );

      // Order Object For Store Session Storage
      const orderData = {
        customer: {
          name: form.name,
          phone: form.phone,
          train: form.train,
          pnr: form.pnr,
          coach: form.coach,
          seat: form.seat,
          payment: form.payment.toUpperCase(),
        },
        items: items.map((item) => ({
          name: item.name,
          qty: item.qty,
          price: item.price,
          total: item.price * item.qty,
        })),
        price: {
          subtotal: subtotal.toFixed(0),
          discount: discount.toFixed(0),
          gst: gstAmount.toFixed(0),
          total: total.toFixed(0),
        },
        orderId: `TC${Date.now()}`,
        orderDate: new Date().toLocaleString("en-IN"),
      }

      setStatus("success");
      setForm({
        name: "",
        phone: "",
        pnr: "",
        coach: "",
        seat: "",
        payment: "",
        train: "",
      });
      sessionStorage.setItem("orderData", JSON.stringify(orderData));
      dispatch(clearCart());

      router.push("/thank-you")
    } catch (error) {
      console.log(`Error Place Order: ${error}`);
      setStatus("error");
    }
  };

  const [showCODPopup, setShowCODPopup] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <a
        href="/services/train-delivery"
        className="inline-flex mb-6 bg-black text-white px-4 py-2 rounded-full"
      >
        ← Back to Menu
      </a>

      <h1 className="text-3xl md:text-5xl font-extrabold text-center">
        Checkout
      </h1>

      <div className="mt-10 grid md:grid-cols-2 gap-10">
        {/* ================= ORDER SUMMARY ================= */}
        <div className="bg-white border rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          {items.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-center py-4 border-b"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">
                  ₹{item.price} × {item.qty}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => dispatch(removeItem(item))}
                  className="w-8 h-8 rounded-full bg-orange-600 text-white"
                >
                  −
                </button>
                <span className="font-bold">{item.qty}</span>
                <button
                  onClick={() => dispatch(addItem(item))}
                  className="w-8 h-8 rounded-full bg-orange-600 text-white"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          {/* PRICE BREAKUP */}
          <div className="flex justify-between mt-4 font-semibold">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          {/* COUPON SECTION (ALWAYS VISIBLE) */}
          <div className="mt-5 bg-orange-50 border rounded-xl p-4">
            <h3 className="font-bold mb-3">Available Coupons</h3>

            <div className="space-y-3">
              {coupons.map((c) => {
                const eligible = subtotal >= c.min;
                const applied = appliedCoupon?.code === c.code;

                return (
                  <div
                    key={c.code}
                    className={`flex justify-between items-center p-3 rounded-lg border
                    ${eligible ? "bg-white" : "bg-gray-100 opacity-50"}`}
                  >
                    <div>
                      <p className="font-semibold">{c.title}</p>
                      <p className="text-xs text-gray-600">{c.desc}</p>
                      <p className="text-xs text-gray-500">
                        Min Order ₹{c.min}
                      </p>
                    </div>

                    {applied ? (
                      <button
                        onClick={removeCoupon}
                        className="text-red-600 font-semibold"
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        disabled={!eligible}
                        onClick={() => applyCoupon(c)}
                        className={`px-4 py-1.5 rounded-lg text-sm font-semibold
                        ${eligible
                            ? "bg-orange-600 text-white"
                            : "bg-gray-300 cursor-not-allowed"
                          }`}
                      >
                        Apply
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {appliedCoupon && (
              <p className="mt-3 text-green-700 font-semibold">
                Coupon <b>{appliedCoupon.code}</b> applied 🎉
              </p>
            )}
          </div>

          {discount > 0 && (
            <div className="flex justify-between mt-3 text-green-700 font-semibold">
              <span>Discount</span>
              <span>- ₹{discount.toFixed(0)}</span>
            </div>
          )}

          {/* GST */}
          <div className="flex justify-between mt-2 font-semibold text-gray-700">
            <span>GST (5%)</span>
            <span>₹{gstAmount.toFixed(0)}</span>
          </div>

          <div className="flex justify-between mt-4 pt-4 border-t">
            <span className="text-lg font-bold">Final Amount</span>
            <span className="text-2xl font-extrabold text-orange-600">
              ₹{total.toFixed(0)}
            </span>
          </div>
        </div>

        {/* ================= PASSENGER DETAILS ================= */}
        <div className="bg-white border rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Passenger Details</h2>

          <div className="grid gap-4">
            <Input
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <Input
              label="Mobile Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              maxLength={10}
              pattern={/[^0-9]/g}
            />
            <Input
              label="Train Number"
              name="train"
              value={form.train}
              onChange={handleChange}
              maxLength={5}
              pattern={/[^0-9]/g}
            />

            <Input
              label="PNR Number"
              name="pnr"
              value={form.pnr}
              onChange={handleChange}
              maxLength={10}
              pattern={/[^0-9]/g}
            />

            <Input
              label="Coach"
              name="coach"
              value={form.coach}
              onChange={handleChange}
              maxLength={5}
              pattern={/[^a-zA-Z0-9]/g}
            />

            <Input
              label="Seat"
              name="seat"
              value={form.seat}
              onChange={handleChange}
              maxLength={3}
              pattern={/[^0-9]/g}
            />


          </div>

          <h3 className="mt-6 font-semibold">Payment Method</h3>

          <PaymentOption
            label="Cash On Delivery (COD)"
            value="cod"
            selected={form.payment}
            onChange={handleChange}
            disabled={subtotal >= 1000}
            onDisabledClick={() => setShowCODPopup(true)}
          />

          <PaymentOption
            label="Online Payment (Razorpay)"
            value="razorpay"
            disabled={true}
            selected={form.payment}
            onChange={handleChange}
          />

          <button
            onClick={submitOrder}
            disabled={status === "loading"}
            className={`w-full mt-6 bg-orange-600 text-white py-3 rounded-xl font-bold ${status === "loading"
              ? "bg-orange-400 cursor-not-allowed"
              : "bg-orange-600 text-white"
              }`}
          >
            {status === "loading" ? "Loading..." : "Place Order"}
          </button>

          {/* STATUS MESSAGE */}
          {status === "success" && (
            <p className="text-green-600 mt-4 text-lg font-medium">
              ✅ Enquiry sent successfully. Our team will contact you soon.
            </p>
          )}

          {/* Error Message */}
          {status === "error" && (
            <p className="text-red-600 mt-4 text-lg  font-medium">
              ❌ Please fill all details or try again.
            </p>
          )}
          {/* Error Message */}
          {status === "lessThan99" && (
            <p className="text-red-600 mt-4 text-lg font-medium">
              ❌ Your Order Amount is Less Than 99 Minimum order is grater than
              99
            </p>
          )}
        </div>
      </div>

      {showCODPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl text-center max-w-sm">
            <h2 className="font-bold text-lg">COD Not Available</h2>
            <p className="text-gray-600 mt-2">
              Cash on Delivery is disabled for orders above ₹1000.
            </p>
            <button
              onClick={() => setShowCODPopup(false)}
              className="mt-4 w-full bg-orange-600 text-white py-2 rounded-lg"
            >
              Okay Got It
            </button>
            <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded-lg">
              <a href="tel:+918107139044">Call Now</a>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

/* ================= SMALL COMPONENTS ================= */
function Input({ label, name, value, onChange, maxLength, pattern }) {
  const handleInput = (e) => {
    let val = e.target.value;

    // allow only pattern if provided
    if (pattern) {
      val = val.replace(pattern, "");
    }

    if (maxLength) {
      val = val.slice(0, maxLength);
    }

    onChange({
      target: {
        name,
        value: val,
      },
    });
  };

  return (
    <div>
      <label className="font-semibold block mb-1">{label}</label>
      <input
        name={name}
        value={value}
        onChange={handleInput}
        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
      />
    </div>
  );
}


function PaymentOption({
  label,
  value,
  selected,
  onChange,
  disabled,
  onDisabledClick,
}) {
  return (
    <label
      onClick={disabled ? onDisabledClick : undefined}
      className={`flex items-center gap-3 border px-3 py-2 rounded-lg mt-2
      ${disabled
          ? "opacity-50 bg-gray-100"
          : "hover:bg-orange-50 cursor-pointer"
        }`}
    >
      <input
        type="radio"
        name="payment"
        value={value}
        checked={selected === value}
        onChange={disabled ? () => { } : onChange}
        disabled={disabled}
      />
      <span>{label}</span>
    </label>
  );
}
