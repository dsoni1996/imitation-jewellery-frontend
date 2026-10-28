"use client";

import { useState } from "react";
import Link from "next/link";

const initialOrder = {
  name: "Aarohi Style",
  email: "hello@aarohi.style",
  phone: "+91 98765 43210",
  address: "14 Rose Avenue, Banjara Hills, Hyderabad",
  city: "Hyderabad",
  pincode: "500034",
  payment: "UPI",
};

const CheckoutPage = () => {
  const [form, setForm] = useState(initialOrder);
  const subtotal = 4498;
  const shipping = 0;
  const total = subtotal + shipping;

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <style>{`
        .checkout-shell { max-width: 1320px; margin: 0 auto; padding: 42px 20px 100px; }
        .checkout-grid { display: grid; grid-template-columns: 1.3fr 0.7fr; gap: 30px; }
        .panel { background: white; border: 1px solid #f2dee8; border-radius: 22px; padding: 24px; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .field { display: flex; flex-direction: column; gap: 8px; }
        .field input, .field select { border: 1px solid #f0dfe7; border-radius: 12px; padding: 14px 16px; font: inherit; }
        .summary-row { display: flex; justify-content: space-between; margin: 14px 0; }
        .pay-options { display: grid; gap: 12px; margin-top: 18px; }
        .pay-option { display: flex; align-items: center; gap: 12px; background: #fffaf8; border: 1px solid #f2dee8; border-radius: 12px; padding: 12px 14px; }
        .place-order { width: 100%; background: #1f1b1c; color: white; border: none; border-radius: 999px; padding: 16px; margin-top: 18px; letter-spacing: 2px; text-transform: uppercase; }
        @media (max-width: 920px) { .checkout-grid, .form-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="checkout-shell">
        <div style={{ marginBottom: 26 }}>
          <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "#b76a86" }}>Checkout</div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.8rem, 5vw, 4.4rem)" }}>Complete your order</h1>
        </div>

        <div className="checkout-grid">
          <div className="panel">
            <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.5rem", marginBottom: 18 }}>Delivery details</h3>
            <div className="form-grid">
              <div className="field">
                <label>Full name</label>
                <input value={form.name} onChange={(e) => updateField("name", e.target.value)} />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} />
              </div>
              <div className="field">
                <label>Phone</label>
                <input value={form.phone} onChange={(e) => updateField("phone", e.target.value)} />
              </div>
              <div className="field">
                <label>City</label>
                <input value={form.city} onChange={(e) => updateField("city", e.target.value)} />
              </div>
              <div className="field" style={{ gridColumn: "1 / -1" }}>
                <label>Address</label>
                <input value={form.address} onChange={(e) => updateField("address", e.target.value)} />
              </div>
              <div className="field" style={{ gridColumn: "1 / -1" }}>
                <label>Pin code</label>
                <input value={form.pincode} onChange={(e) => updateField("pincode", e.target.value)} />
              </div>
            </div>

            <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.5rem", marginTop: 30, marginBottom: 18 }}>Payment method</h3>
            <div className="pay-options">
              {['UPI', 'Credit Card', 'Debit Card', 'Cash on Delivery'].map((option) => (
                <label key={option} className="pay-option">
                  <input type="radio" name="payment" checked={form.payment === option} onChange={() => updateField("payment", option)} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <aside className="panel">
            <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.5rem", marginBottom: 18 }}>Order summary</h3>
            <div className="summary-row"><span>Subtotal</span><span>₹{subtotal.toLocaleString("en-IN")}</span></div>
            <div className="summary-row"><span>Shipping</span><span>{shipping === 0 ? "Free" : `₹${shipping}`}</span></div>
            <div className="summary-row"><span>Discount</span><span>₹0</span></div>
            <div className="summary-row" style={{ fontWeight: 700, fontSize: 18 }}><span>Total</span><span>₹{total.toLocaleString("en-IN")}</span></div>

            <div style={{ background: "#fffaf8", border: "1px solid #f2dee8", borderRadius: 12, padding: 14, marginTop: 18, color: "#5f4d56" }}>
              Your jewellery will be packed in a premium gift box and dispatched within 24 hours.
            </div>

            <button className="place-order">Place order</button>
            <div style={{ marginTop: 18, textAlign: "center" }}>
              <Link href="/cart" style={{ color: "#b76a86", textDecoration: "none" }}>Return to cart</Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;




















