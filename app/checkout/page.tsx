"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { useCartStore } from "@/context/CartContext";

const blankForm = { name: "", email: "", phone: "", address: "", city: "", pincode: "" };
const money = (value: number) => `₹${value.toLocaleString("en-IN")}`;

export default function CheckoutPage() {
  const { cart, subtotal } = useCartStore();
  const [form, setForm] = useState(blankForm);
  const [payment, setPayment] = useState("Cash on delivery");
  const [error, setError] = useState("");
  const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, "");
  const shipping = subtotal === 0 || subtotal >= 2500 ? 0 : 149;
  const total = subtotal + shipping;

  function placeOrder(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!cart.length) { setError("Your bag is empty. Add a piece before placing an order."); return; }
    if (!whatsappNumber) { setError("Order chat is not configured yet. Please contact the store owner."); return; }
    const productLines = cart.map((item) => `• ${item.name} × ${item.quantity} — ${money(item.price * item.quantity)}`).join("\n");
    const message = ["Hello Aarohi! I'd like to place an order:", "", productLines, "", `Subtotal: ${money(subtotal)}`, `Shipping: ${shipping ? money(shipping) : "Free"}`, `Total: ${money(total)}`, `Payment preference: ${payment}`, "", `Name: ${form.name}`, `Phone: ${form.phone}`, `Email: ${form.email}`, `Address: ${form.address}, ${form.city} - ${form.pincode}`].join("\n");
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  return <div className="checkout-shell">
    <header className="checkout-heading"><span className="eyebrow">SECURE ORDER REQUEST</span><h1>Almost <em>yours.</em></h1><p>Share your delivery details and confirm your order with us on WhatsApp.</p></header>
    {!cart.length ? <div className="empty-checkout"><h2>Your bag is empty.</h2><p>Choose your favourite pieces first, then come back to checkout.</p><Link className="primary-button" href="/listing">Explore jewellery <ArrowRight size={15} /></Link></div> : <form className="checkout-grid" onSubmit={placeOrder}>
      <section className="checkout-panel"><h2>Delivery details</h2><div className="form-grid">
        <label className="field"><span>Full name *</span><input autoComplete="name" required maxLength={100} value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></label>
        <label className="field"><span>Phone number *</span><input autoComplete="tel" type="tel" required pattern="[0-9+() -]{10,18}" title="Enter a valid phone number" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} /></label>
        <label className="field"><span>Email address</span><input autoComplete="email" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} /></label>
        <label className="field"><span>City *</span><input autoComplete="address-level2" required maxLength={80} value={form.city} onChange={(event) => setForm({ ...form, city: event.target.value })} /></label>
        <label className="field full"><span>Street address *</span><textarea autoComplete="street-address" required rows={3} maxLength={300} value={form.address} onChange={(event) => setForm({ ...form, address: event.target.value })} /></label>
        <label className="field"><span>Pincode *</span><input autoComplete="postal-code" inputMode="numeric" required pattern="[0-9]{6}" title="Enter a 6-digit Indian pincode" value={form.pincode} onChange={(event) => setForm({ ...form, pincode: event.target.value })} /></label>
      </div><h2 className="payment-title">Payment preference</h2><div className="payment-options">{["Cash on delivery", "UPI (confirm on WhatsApp)"].map((option) => <label className="payment-option" key={option}><input type="radio" name="payment" value={option} checked={payment === option} onChange={() => setPayment(option)} /><span>{option}</span></label>)}</div><p className="payment-note">No card details are collected here. The store will confirm availability, delivery, and any UPI payment instructions directly with you.</p></section>
      <aside className="checkout-panel order-panel"><span className="eyebrow">YOUR BAG</span><h2>Order summary</h2><div className="order-items">{cart.map((item) => <div className="order-item" key={item.slug}><img src={item.image} alt="" /><div><strong>{item.name}</strong><span>Qty {item.quantity}</span></div><b>{money(item.price * item.quantity)}</b></div>)}</div><div className="summary-line"><span>Subtotal</span><span>{money(subtotal)}</span></div><div className="summary-line"><span>Shipping</span><span>{shipping ? money(shipping) : "Free"}</span></div><div className="summary-total"><span>Total</span><strong>{money(total)}</strong></div>{error && <p className="error-message" role="alert">{error}</p>}<button className="place-order" type="submit"><MessageCircle size={17} /> Continue to WhatsApp</button><p className="privacy-note"><ShieldCheck size={14} /> Your order opens in WhatsApp for confirmation.</p><Link className="back-link" href="/cart">Return to bag</Link></aside>
    </form>}
    <style jsx>{`
      .checkout-shell{max-width:1180px;margin:auto;padding:58px 24px 96px}.checkout-heading{text-align:center;margin-bottom:32px}.eyebrow{font-size:10px;letter-spacing:2px;color:#986554}.checkout-heading h1{font-size:clamp(3rem,6vw,5rem);line-height:1;margin:12px 0}.checkout-heading h1 em{color:#986554}.checkout-heading p{color:#756b65;font-size:13px}.checkout-grid{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(290px,.7fr);gap:24px;align-items:start}.checkout-panel{background:#fff;border:1px solid #e9dfd4;padding:24px}.checkout-panel h2{font-size:2.25rem;margin:0 0 18px}.form-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:15px}.field{display:grid;gap:7px}.field span{font-size:10px;letter-spacing:1px;text-transform:uppercase;color:#756b65}.field input,.field textarea{width:100%;border:1px solid #e9dfd4;background:#fffdfb;padding:12px 13px;border-radius:0;font:inherit;font-size:13px;color:#29221f}.field textarea{resize:vertical}.field input:focus,.field textarea:focus{outline:2px solid #c9a77f;outline-offset:1px}.field.full{grid-column:1/-1}.payment-title{margin-top:27px!important}.payment-options{display:grid;gap:9px}.payment-option{display:flex;align-items:center;gap:10px;border:1px solid #e9dfd4;padding:12px;font-size:12px}.payment-option input{accent-color:#986554}.payment-note{font-size:11px;line-height:1.65;color:#756b65}.order-panel{position:sticky;top:120px}.order-panel h2{margin:8px 0 18px}.order-items{display:grid;gap:13px;padding-bottom:16px;border-bottom:1px solid #eee7df}.order-item{display:grid;grid-template-columns:48px 1fr auto;align-items:center;gap:10px}.order-item img{width:48px;height:56px;object-fit:cover}.order-item div{display:grid;gap:4px}.order-item strong{font-size:12px;font-weight:500}.order-item span{font-size:10px;color:#756b65}.order-item>b{font-size:12px;font-weight:500}.summary-line,.summary-total{display:flex;justify-content:space-between;padding:12px 0;font-size:12px;border-bottom:1px solid #eee7df}.summary-total{border:0;font-size:14px}.summary-total strong{font-size:18px}.place-order,.primary-button{display:flex;align-items:center;justify-content:center;gap:9px;background:#342a24;color:#fff;border:0;padding:15px;width:100%;font-size:10px;letter-spacing:1px;text-transform:uppercase;cursor:pointer}.place-order:hover,.primary-button:hover{background:#715348}.privacy-note{display:flex;align-items:center;justify-content:center;gap:6px;color:#756b65;font-size:10px;text-align:center}.back-link{display:block;text-align:center;margin-top:14px;color:#986554;font-size:11px}.error-message{background:#fff1ee;color:#8f3022;padding:10px;font-size:12px;line-height:1.5}.empty-checkout{text-align:center;background:#fff;border:1px solid #e9dfd4;padding:48px 20px}.empty-checkout h2{font-size:2.4rem}.empty-checkout p{color:#756b65}.primary-button{width:auto;display:inline-flex;margin-top:10px}
      @media(max-width:800px){.checkout-grid{grid-template-columns:1fr}.order-panel{position:static}}@media(max-width:560px){.checkout-shell{padding:42px 16px 70px}.checkout-panel{padding:18px}.form-grid{grid-template-columns:1fr}.field.full{grid-column:auto}.checkout-panel h2{font-size:2rem}}
    `}</style>
  </div>;
}
