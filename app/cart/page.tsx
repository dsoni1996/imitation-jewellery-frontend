"use client";

import Link from "next/link";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCartStore } from "@/context/CartContext";

const money = (value: number) => `₹${value.toLocaleString("en-IN")}`;

export default function CartPage() {
  const { cart, subtotal, updateQty, removeFromCart } = useCartStore();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const shipping = subtotal === 0 || subtotal >= 2500 ? 0 : 149;

  return (
    <div className="cart-shell">
      <header className="cart-heading">
        <span className="eyebrow">YOUR AAROHI BAG</span>
        <h1>Your picks, <em>together.</em></h1>
        <p>{itemCount ? `${itemCount} ${itemCount === 1 ? "piece" : "pieces"} in your bag` : "A little sparkle is waiting to find you."}</p>
      </header>

      {!cart.length ? (
        <section className="empty-cart">
          <ShoppingBag size={27} />
          <h2>Your bag is taking a breather.</h2>
          <p>Discover something lovely and it will be waiting here.</p>
          <Link className="primary-button" href="/listing">Explore the collection <ArrowRight size={15} /></Link>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items" aria-label="Items in your bag">
            {cart.map((item) => (
              <article className="cart-item" key={item.slug}>
                <Link href={`/product/${item.slug}`} className="cart-image"><img src={item.image} alt={item.name} /></Link>
                <div className="cart-details">
                  <span className="category">{item.category}</span>
                  <Link href={`/product/${item.slug}`}><h2>{item.name}</h2></Link>
                  <p>{item.material}</p>
                  <strong>{money(item.price)}</strong>
                  <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                    <button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => updateQty(item.slug, item.quantity - 1)}><Minus size={13} /></button>
                    <span>{item.quantity}</span>
                    <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => updateQty(item.slug, item.quantity + 1)}><Plus size={13} /></button>
                  </div>
                </div>
                <button className="remove-button" type="button" onClick={() => removeFromCart(item.slug)} aria-label={`Remove ${item.name} from bag`}><Trash2 size={16} /><span>Remove</span></button>
              </article>
            ))}
            <Link href="/listing" className="continue-link">Continue shopping <ArrowRight size={14} /></Link>
          </section>

          <aside className="order-summary">
            <span className="eyebrow">THE DETAILS</span>
            <h2>Order summary</h2>
            <div className="summary-line"><span>Subtotal</span><span>{money(subtotal)}</span></div>
            <div className="summary-line"><span>Shipping</span><span>{shipping ? money(shipping) : "Complimentary"}</span></div>
            {subtotal > 0 && subtotal < 2500 && <p className="shipping-note">Add {money(2500 - subtotal)} more for complimentary shipping.</p>}
            <div className="summary-total"><span>Total</span><strong>{money(subtotal + shipping)}</strong></div>
            <Link className="checkout-button" href="/checkout">Continue to checkout <ArrowRight size={15} /></Link>
            <p className="summary-note">Your order is confirmed by the store through WhatsApp at checkout.</p>
          </aside>
        </div>
      )}

      <style jsx>{`
        .cart-shell{max-width:1240px;margin:0 auto;padding:60px 24px 96px;min-height:62vh}.cart-heading{text-align:center;margin-bottom:36px}.eyebrow{font-size:10px;letter-spacing:2px;color:#986554}.cart-heading h1{font-size:clamp(3rem,6vw,5rem);line-height:1;margin:12px 0}.cart-heading h1 em{color:#986554}.cart-heading p{font-size:13px;color:#756b65}.empty-cart{max-width:570px;margin:auto;padding:48px 22px;text-align:center;background:#fff;border:1px solid #e9dfd4}.empty-cart>svg{color:#986554}.empty-cart h2{font-size:2.5rem;margin:14px 0 7px}.empty-cart p{font-size:13px;color:#756b65;margin-bottom:23px}.primary-button,.checkout-button{display:inline-flex;align-items:center;justify-content:center;gap:10px;background:#342a24;color:#fff;padding:15px 19px;font-size:10px;letter-spacing:1px;text-transform:uppercase}.cart-layout{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(280px,.7fr);gap:30px;align-items:start}.cart-items{display:grid;gap:14px}.cart-item{display:flex;gap:17px;position:relative;padding:14px;background:#fff;border:1px solid #e9dfd4}.cart-image{width:125px;height:145px;flex:none;background:#f1e9df}.cart-image img{width:100%;height:100%;object-fit:cover}.cart-details{padding:3px 0;flex:1}.category{font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:#986554}.cart-details h2{font-size:1.9rem;line-height:1.1;margin:5px 0}.cart-details p{font-size:11px;color:#756b65;margin:0 0 10px}.cart-details>strong{font-size:13px;font-weight:600}.quantity-control{display:flex;align-items:center;gap:13px;margin-top:12px}.quantity-control button{display:grid;place-items:center;width:27px;height:27px;border:1px solid #e9dfd4;background:white;color:#342a24}.quantity-control span{font-size:12px}.remove-button{align-self:flex-start;display:flex;align-items:center;gap:5px;border:0;background:transparent;color:#786d68;font-size:10px;padding:5px}.continue-link{display:inline-flex;align-items:center;gap:8px;justify-self:start;margin-top:5px;font-size:10px;letter-spacing:1px;text-transform:uppercase;color:#986554}.order-summary{position:sticky;top:125px;padding:23px;background:#fff;border:1px solid #e9dfd4}.order-summary h2{font-size:2.2rem;margin:8px 0 18px}.summary-line,.summary-total{display:flex;justify-content:space-between;gap:12px;padding:12px 0;border-bottom:1px solid #eee7df;font-size:12px}.shipping-note,.summary-note{font-size:10px;line-height:1.6;color:#756b65}.shipping-note{color:#986554}.summary-total{border:0;padding:17px 0;font-size:14px}.summary-total strong{font-size:18px}.checkout-button{width:100%}.summary-note{text-align:center;margin:14px 0 0}
        @media(max-width:820px){.cart-layout{grid-template-columns:1fr}.order-summary{position:static}}@media(max-width:560px){.cart-shell{padding:44px 15px 70px}.cart-item{gap:11px;padding:10px}.cart-image{width:95px;height:120px}.cart-details h2{font-size:1.55rem}.cart-details p{font-size:10px}.remove-button span{display:none}.order-summary{padding:18px}}
      `}</style>
    </div>
  );
}
