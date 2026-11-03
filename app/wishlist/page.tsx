"use client";

import Link from "next/link";
import { ArrowRight, Heart, ShoppingBag, Sparkles, Trash2 } from "lucide-react";
import { useCartStore } from "@/context/CartContext";

export default function WishlistPage() {
  const { wishlist, addToCart, removeFromWishlist } = useCartStore();
  return <div className="wishlist-shell">
    <header className="wishlist-header"><span className="eyebrow">YOUR FAVOURITES</span><h1>Saved for <em>later.</em></h1><p>Pieces you love, all in one place.</p></header>
    {wishlist.length ? <div className="wishlist-grid">{wishlist.map((item) => <article className="wishlist-card" key={item.slug}>
      <Link href={`/product/${item.slug}`} className="wishlist-image"><img src={item.image} alt={item.name} loading="lazy" /></Link>
      <div className="wishlist-body"><span className="category">{item.category}</span><Link href={`/product/${item.slug}`}><h2>{item.name}</h2></Link><p>{item.material}</p><div className="price-row"><strong>₹{item.price.toLocaleString("en-IN")}</strong><button className="remove-button" onClick={() => removeFromWishlist(item.slug)} aria-label={`Remove ${item.name} from wishlist`}><Trash2 size={15} /></button></div><button className="bag-button" onClick={() => addToCart(item)}><ShoppingBag size={15} /> Add to bag</button></div>
    </article>)}</div> : <div className="empty-state"><Heart size={27} /><h2>Your wishlist is waiting.</h2><p>Save the pieces that make you smile and find them here later.</p><Link className="shop-button" href="/listing">Explore jewellery <ArrowRight size={15} /></Link></div>}
    <style jsx>{`
      .wishlist-shell{max-width:1240px;margin:auto;padding:60px 24px 95px}.wishlist-header{text-align:center;margin-bottom:32px}.eyebrow{font-size:10px;letter-spacing:2px;color:#986554}.wishlist-header h1{font-size:clamp(3rem,6vw,5rem);line-height:1;margin:12px 0}.wishlist-header h1 em{color:#986554}.wishlist-header p{font-size:13px;color:#756b65}.wishlist-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}.wishlist-card{background:white;border:1px solid #e9dfd4}.wishlist-image{display:block;aspect-ratio:.85;overflow:hidden}.wishlist-image img{width:100%;height:100%;object-fit:cover;transition:transform .4s}.wishlist-card:hover img{transform:scale(1.04)}.wishlist-body{padding:16px}.category{font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:#986554}.wishlist-body h2{font-size:2rem;margin:5px 0}.wishlist-body p{font-size:11px;color:#756b65;margin:0 0 12px}.price-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}.remove-button{width:32px;height:32px;border:1px solid #e9dfd4;background:#fff;color:#55483e}.bag-button,.shop-button{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;border:0;background:#342a24;color:white;padding:13px;font-size:10px;letter-spacing:1px;text-transform:uppercase;cursor:pointer}.empty-state{max-width:540px;margin:auto;padding:48px 20px;text-align:center;background:white;border:1px solid #e9dfd4}.empty-state>svg{color:#986554}.empty-state h2{font-size:2.4rem;margin:12px 0}.empty-state p{color:#756b65;font-size:13px}.shop-button{width:auto;display:inline-flex;margin-top:10px}.wishlist-shell :global(.eyebrow){display:inline-block}
      @media(max-width:800px){.wishlist-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:560px){.wishlist-shell{padding:44px 16px 70px}.wishlist-grid{gap:12px}.wishlist-body{padding:11px}.wishlist-body h2{font-size:1.55rem}.wishlist-body p{font-size:10px}}
    `}</style>
  </div>;
}
