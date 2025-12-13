"use client";

import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "@/features/cart/selector";
import { clearCart, addItem, removeItem } from "@/features/cart/cartSlice";
import { motion } from "framer-motion";
import { useState } from "react";

/* ================= COUPONS ================= */
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
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  /* ================= COUPON STATE ================= */
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [discount, setDiscount] = useState(0);

  const applyCoupon = (coupon) => {
    if (subtotal < coupon.min) return;

    let discountValue =
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

  const total = subtotal - discount;

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

  const submitOrder = () => {
    if (
      !form.name ||
      !form.phone ||
      !form.train ||
      !form.pnr ||
      !form.coach ||
      !form.seat
    ) {
      alert("Please fill all passenger details");
      return;
    }

    alert("Order placed successfully!");
    dispatch(clearCart());
  };

  /* ================= COD POPUP ================= */
  const [showCODPopup, setShowCODPopup] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      {/* BACK */}
      <a
        href="/services/train-delivery"
        className="inline-flex items-center gap-2 mb-6 bg-black text-white px-4 py-2 rounded-full"
      >
        ← Back to Menu
      </a>

      <h1 className="text-3xl md:text-5xl font-extrabold text-center">
        Checkout
      </h1>
      <p className="text-center text-gray-500 mt-2">
        Fresh food delivered to your train seat
      </p>

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

              {/* + - */}
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

          {/* SUBTOTAL */}
          <div className="flex justify-between mt-4 font-semibold">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          {/* ================= COUPONS ================= */}
          {subtotal >= 300 && (
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
                          ${
                            eligible
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
          )}

          {discount > 0 && (
            <div className="flex justify-between mt-3 text-green-700 font-semibold">
              <span>Discount</span>
              <span>- ₹{discount.toFixed(0)}</span>
            </div>
          )}

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
            <Input label="Full Name" name="name" value={form.name} onChange={handleChange} />
            <Input label="Mobile Number" name="phone" value={form.phone} onChange={handleChange} />
            <Input label="Train Number" name="train" value={form.train} onChange={handleChange} />
            <Input label="PNR Number" name="pnr" value={form.pnr} onChange={handleChange} />
            <Input label="Coach" name="coach" value={form.coach} onChange={handleChange} />
            <Input label="Seat" name="seat" value={form.seat} onChange={handleChange} />
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
            selected={form.payment}
            onChange={handleChange}
          />

          <button
            onClick={submitOrder}
            className="w-full mt-6 bg-orange-600 text-white py-3 rounded-xl font-bold"
          >
            Place Order
          </button>
        </div>
      </div>

      {/* COD POPUP */}
      {showCODPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl text-center max-w-sm">
            <h2 className="font-bold text-lg">COD Not Available</h2>
            <p className="text-gray-600 mt-2">
              Cash on Delivery is disabled for orders above ₹1000.
              Please choose Online Payment.
            </p>
            <button
              onClick={() => setShowCODPopup(false)}
              className="mt-4 w-full bg-orange-600 text-white py-2 rounded-lg"
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

/* ================= SMALL COMPONENTS ================= */
function Input({ label, name, value, onChange }) {
  return (
    <div>
      <label className="font-semibold block mb-1">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
      />
    </div>
  );
}

function PaymentOption({ label, value, selected, onChange, disabled, onDisabledClick }) {
  return (
    <label
      onClick={disabled ? onDisabledClick : undefined}
      className={`flex items-center gap-3 border px-3 py-2 rounded-lg mt-2
      ${disabled ? "opacity-50 bg-gray-100" : "hover:bg-orange-50 cursor-pointer"}`}
    >
      <input
        type="radio"
        name="payment"
        value={value}
        checked={selected === value}
        onChange={disabled ? () => {} : onChange}
        disabled={disabled}
      />
      <span>{label}</span>
    </label>
  );
}
