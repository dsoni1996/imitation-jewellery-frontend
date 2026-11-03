"use client";

import Link from "next/link";
import { ArrowRight, Heart, ShoppingBag, Sparkles, Trash2 } from "lucide-react";
import { useCartStore } from "@/context/CartContext";

const fallbackWishlist = [
  { slug: "pearl-drop-set", name: "Pearl Drop Set", category: "Earrings", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80", price: 1999, material: "Gold plated brass" },
  { slug: "rose-gold-dots", name: "Rose Gold Dots", category: "Rings", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80", price: 2499, material: "Acrylic + metal finish" },
  { slug: "crystal-layer-set", name: "Crystal Layer Set", category: "Necklaces", image: "https://images.unsplash.com/photo-1601821765780-3b0a7a6f4f1d?auto=format&fit=crop&w=900&q=80", price: 1799, material: "Crystal + alloy finish" },
];

export default function WishlistPage() {
  const { wishlist, addToCart, removeFromWishlist } = useCartStore();
  const items = wishlist.length ? wishlist : fallbackWishlist;

  return (
    <div className="wishlist-shell">
      <div className="wishlist-header">
        <span className="eyebrow">YOUR FAVOURITES</span>
        <h1>Saved for later,<em> beautifully.</em></h1>
        <p>{items.length} pieces saved for your next little sparkle.</p>
      </div>

      {items.length === 0 ? (
        <div className="empty-state">
          <Sparkles size={28} />
          <h2>No items saved yet</h2>
          <p>Start curating your dream jewellery edit.</p>
          <Link className="primary-btn" href="/listing">Shop the collection <ArrowRight size={15} /></Link>
        </div>
      ) : (
        <div className="wishlist-grid">
          {items.map((item) => (
            <article className="wishlist-card" key={item.slug}>
              <Link href={`/product/${item.slug}`} className="wishlist-image">
                <img src={item.image} alt={item.name} />
              </Link>
              <div className="wishlist-body">
                <span className="category">{item.category}</span>
                <Link href={`/product/${item.slug}`}><h2>{item.name}</h2></Link>
                <p>{item.material}</p>
                <div className="price-row">
                  <strong>₹{item.price.toLocaleString("en-IN")}</strong>
                  <button className="icon-btn" onClick={() => removeFromWishlist(item.slug)} aria-label={`Remove ${item.name} from wishlist`}>
                    <Trash2 size={15} />
                  </button>
                </div>
                <button className="secondary-btn" onClick={() => addToCart(item)}>
                  <ShoppingBag size={15} /> Add to bag
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      <style jsx>{`
        .wishlist-shell { max-width: 1280px; margin: 0 auto; padding: 64px 24px 100px; }
        .wishlist-header { text-align: center; margin-bottom: 36px; }
        .eyebrow { display: inline-block; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #986554; }
        .wishlist-header h1 { font-size: clamp(3rem, 6vw, 5rem); line-height: 0.96; margin: 12px 0; }
        .wishlist-header h1 em { color: #986554; font-style: normal; }
        .wishlist-header p { color: #695f5d; margin: 0; }
        .wishlist-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; }
        .wishlist-card { background: #fff; border: 1px solid #e9dfd4; border-radius: 24px; overflow: hidden; }
        .wishlist-image { display: block; height: 300px; overflow: hidden; }
        .wishlist-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .wishlist-card:hover .wishlist-image img { transform: scale(1.05); }
        .wishlist-body { padding: 18px 18px 20px; }
        .category { font-size: 9px; letter-spacing: 1.6px; text-transform: uppercase; color: #986554; }
        .wishlist-body h2 { font-size: 2.2rem; line-height: 1; margin: 8px 0 6px; }
        .wishlist-body p { margin: 0 0 14px; color: #786d68; font-size: 12px; }
        .price-row { display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-bottom: 16px; }
        .price-row strong { font-size: 1.2rem; }
        .icon-btn { width: 34px; height: 34px; display: grid; place-items: center; background: #faf5f1; border: 1px solid #eadfd5; border-radius: 50%; color: #3a2d2a; }
        .secondary-btn, .primary-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; border: none; font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; }
        .secondary-btn { width: 100%; background: #342a24; color: #fff; padding: 14px 18px; }
        .primary-btn { background: #d9b677; color: #29221f; padding: 15px 20px; }
        .empty-state { max-width: 520px; margin: 30px auto 0; text-align: center; background: #fff; border: 1px solid #e9dfd4; border-radius: 24px; padding: 52px 24px; }
        .empty-state h2 { font-size: 2.5rem; margin: 14px 0 8px; }
        .empty-state p { color: #736a67; margin-bottom: 24px; }
        @media (max-width: 900px) { .wishlist-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 600px) { .wishlist-shell { padding: 50px 18px 80px; } .wishlist-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
