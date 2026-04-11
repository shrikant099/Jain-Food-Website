"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function OfferPopup() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const submitted = localStorage.getItem("offerSubmitted");
    if (!submitted) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      mobile: e.target.mobile.value,
    };
    if(!data.name || !data.mobile) {
      alert("Please fill all fields");
      return;
    }

    try {
      localStorage.setItem("offerSubmitted", "true");
      router.push("/services/train-delivery");
    } catch (err) {
      alert("Something went wrong");
    }
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button onClick={() => setShow(false)} className="close-btn">×</button>

        <div className="popup-header">
          <span className="tag text-black font-bold">LIMITED TIME OFFER</span>
          <h2>₹50rs OFF</h2>
          <p>Get delivery directly to your train seat</p>
        </div>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" required />
          <input name="mobile" placeholder="Mobile Number" required />
          <button type="submit" className="submit-btn cursor-pointer font-bold text-white">
            Claim ₹50 OFF →
          </button>

          <button
            type="button"
            onClick={() => setShow(false)}
            className="skip-btn"
          >
            No thanks
          </button>
        </form>
      </div>
    </div>
  );
}