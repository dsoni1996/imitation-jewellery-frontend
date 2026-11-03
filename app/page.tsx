import Link from "next/link";
import { ArrowRight, BadgeCheck, Gift, Heart, Sparkles, Truck } from "lucide-react";
import { jewelleryProducts } from "@/lib/jewelleryData";

const categories = [
  { name: "Earrings", note: "A little drama, always", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=85" },
  { name: "Necklaces", note: "Made to be noticed", image: "https://images.unsplash.com/photo-1601821765780-3b0a7a6f4f1d?auto=format&fit=crop&w=800&q=85" },
  { name: "Rings", note: "Your everyday signature", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=85" },
  { name: "Bangles", note: "Stack on the sparkle", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=85" },
];

const highlights = [
  { icon: Sparkles, title: "Style without limits", text: "Statement looks that are easy to love and easier to wear." },
  { icon: Truck, title: "Free shipping over ₹2,500", text: "A little extra joy, delivered to your doorstep." },
  { icon: Gift, title: "Ready to gift", text: "Beautiful finishing touches for all of life's celebrations." },
];

export default function Home() {
  const featured = jewelleryProducts.slice(0, 4);
  return (
    <>
      <section className="home-hero">
        <div className="hero-photo" role="img" aria-label="Elegant imitation jewellery styling" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow"><span /> THE EVERYDAY OCCASION EDIT</span>
          <h1>Make a little<br /><em>moment sparkle.</em></h1>
          <p>Jewellery for the plans you make—and the ones that find you. Find your new favourite piece at Aarohi.</p>
          <Link className="button button-gold" href="/listing">Shop the collection <ArrowRight size={16} /></Link>
          <div className="hero-footnote">THOUGHTFULLY CHOSEN · MADE FOR YOUR MOMENTS</div>
        </div>
        <div className="hero-index">01 <span /> 04</div>
      </section>

      <div className="benefit-strip">
        <span><Sparkles size={15} /> New season, new sparkle</span><i />
        <span><Truck size={15} /> Free shipping over ₹2,500</span><i />
        <span><BadgeCheck size={15} /> Easy 7-day returns</span>
      </div>

      <section className="section-shell category-section">
        <div className="section-heading"><div><span className="eyebrow">FIND YOUR FINISH</span><h2>Shop by <em>category</em></h2></div><Link className="text-link" href="/listing">Explore all <ArrowRight size={15} /></Link></div>
        <div className="category-grid">
          {categories.map((category, index) => <Link className={`category-card category-card-${index + 1}`} href={`/listing?category=${encodeURIComponent(category.name)}`} key={category.name}>
            <img src={category.image} alt={category.name} /><span className="category-overlay" /><span className="category-copy"><small>{category.note}</small><strong>{category.name}</strong><span>DISCOVER <ArrowRight size={13} /></span></span>
          </Link>)}
        </div>
      </section>

      <section className="featured-section">
        <div className="section-shell">
          <div className="section-heading"><div><span className="eyebrow">THE PIECES EVERYONE LOVES</span><h2>Little things, <em>big feelings.</em></h2></div><Link className="text-link" href="/listing">Shop all jewellery <ArrowRight size={15} /></Link></div>
          <div className="home-product-grid">
            {featured.map((product) => <Link className="home-product-card" href={`/product/${product.slug}`} key={product.slug}>
              <div className="home-product-image"><img src={product.image} alt={product.name} /><span className="product-badge">{product.badge}</span><span className="quick-view">Discover piece <ArrowRight size={14} /></span></div>
              <div className="home-product-info"><div><span className="product-category">{product.category}</span><h3>{product.name}</h3></div><div className="product-price">₹{product.price.toLocaleString("en-IN")}<del>₹{product.originalPrice.toLocaleString("en-IN")}</del></div></div>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="editorial-image"><img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85" alt="A close-up of jewellery made for celebration" /></div>
        <div className="editorial-copy"><span className="eyebrow">THE AAROHI POINT OF VIEW</span><h2>Dress like<br />you <em>mean it.</em></h2><p>From a Tuesday coffee run to the wedding invite you have been saving, the right finishing touch changes everything. Find pieces that feel like you.</p><Link className="button button-dark" href="/listing">Find your next favourite <ArrowRight size={16} /></Link><span className="editorial-caption">A LITTLE EXTRA, EVERY DAY.</span></div>
      </section>

      <section className="section-shell promise-section"><span className="eyebrow">THE GOOD THINGS, BUILT IN</span><h2>More than a pretty <em>parcel.</em></h2><div className="promise-grid">{highlights.map(({ icon: Icon, title, text }) => <article key={title}><span className="promise-icon"><Icon size={20} /></span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="newsletter-cta"><span className="eyebrow">A NOTE FROM AAROHI</span><h2>Good things look good <em>on you.</em></h2><p>Explore thoughtful details, easy-to-love pieces, and a little sparkle for every plan.</p><Link className="button button-gold" href="/listing">Find your shine <Heart size={15} /></Link></section>
    </>
  );
}































































































































































































































"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEYS = { cart: "aarohi-cart", wishlist: "aarohi-wishlist", user: "aarohi-user" };
const CartContext = createContext(null);
const readStorage = (key, fallback) => {
  try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; }
  catch { return fallback; }
};

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCart(readStorage(STORAGE_KEYS.cart, []));
    setWishlist(readStorage(STORAGE_KEYS.wishlist, []));
    setUser(readStorage(STORAGE_KEYS.user, null));
    setHydrated(true);
  }, []);
  useEffect(() => { if (hydrated) localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart)); }, [cart, hydrated]);
  useEffect(() => { if (hydrated) localStorage.setItem(STORAGE_KEYS.wishlist, JSON.stringify(wishlist)); }, [wishlist, hydrated]);
  useEffect(() => { if (hydrated) { if (user) localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user)); else localStorage.removeItem(STORAGE_KEYS.user); } }, [user, hydrated]);

  const addToCart = (product) => setCart((current) => {
    const existing = current.find((item) => item.slug === product.slug);
    return existing ? current.map((item) => item.slug === product.slug ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }];
  });
  const removeFromCart = (slug) => setCart((current) => current.filter((item) => item.slug !== slug));
  const updateQty = (slug, quantity) => quantity < 1 ? removeFromCart(slug) : setCart((current) => current.map((item) => item.slug === slug ? { ...item, quantity } : item));
  const clearCart = () => setCart([]);
  const toggleWishlist = (product) => setWishlist((current) => current.some((item) => item.slug === product.slug) ? current.filter((item) => item.slug !== product.slug) : [...current, product]);
  const removeFromWishlist = (slug) => setWishlist((current) => current.filter((item) => item.slug !== slug));
  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0), [cart]);
  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return <CartContext.Provider value={{ cart, wishlist, cartCount, subtotal, addToCart, removeFromCart, updateQty, clearCart, toggleWishlist, removeFromWishlist, user, login, logout }}>{children}</CartContext.Provider>;
}

export function useCartStore() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCartStore must be used inside CartProvider");
  return context;
}

"use client";

import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/context/CartContext";

const navItems = [
  { label: "New In", href: "/listing" },
  { label: "Earrings", href: "/listing?category=Earrings" },
  { label: "Necklaces", href: "/listing?category=Necklaces" },
  { label: "Rings", href: "/listing?category=Rings" },
  { label: "Bangles", href: "/listing?category=Bangles" },
  { label: "Gifts", href: "/listing?category=Gift%20Sets" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { cartCount, wishlist } = useCartStore();
  return <header className="site-header">
    <div className="announcement">A LITTLE EXTRA, EVERY DAY <span>·</span> FREE SHIPPING OVER ₹2,500</div>
    <div className="nav-shell">
      <button className="nav-icon mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
      <Link href="/" className="brand"><span>AAROHI</span><small>STYLE & SPARKLE</small></Link>
      <nav className="nav-links" aria-label="Main navigation">{navItems.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}</nav>
      <div className="nav-actions">
        <button className="nav-icon search-toggle" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search"><Search size={19} /></button>
        <Link className="nav-icon account-icon" href="/login" aria-label="Account"><User size={19} /></Link>
        <Link className="nav-icon wishlist-icon" href="/wishlist" aria-label={`Wishlist, ${wishlist.length} items`}><Heart size={19} />{wishlist.length > 0 && <span className="nav-count">{wishlist.length}</span>}</Link>
        <Link className="bag-pill" href="/cart" aria-label={`Shopping bag, ${cartCount} items`}><ShoppingBag size={17} /><span>Bag</span><b>{cartCount}</b></Link>
      </div>
    </div>
    {searchOpen && <form className="search-panel" action="/listing"><Search size={18} /><input autoFocus name="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search rings, earrings, bangles..." /><button type="submit">Search <span>→</span></button></form>}
    {menuOpen && <nav className="mobile-menu" aria-label="Mobile navigation">{navItems.map((item) => <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}<Link href="/wishlist" onClick={() => setMenuOpen(false)}>Wishlist ({wishlist.length})</Link><Link href="/about" onClick={() => setMenuOpen(false)}>Our story</Link><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></nav>}
    <style jsx>{`
      .site-header{position:sticky;top:0;z-index:100;background:rgba(251,248,244,.97);backdrop-filter:blur(14px);border-bottom:1px solid #e9dfd4}.announcement{height:27px;background:#342a24;color:#f0dfc8;text-align:center;font-size:9px;letter-spacing:1.8px;display:flex;align-items:center;justify-content:center;gap:9px}.announcement span{color:#d9b677}.nav-shell{max-width:1400px;margin:auto;height:82px;padding:0 32px;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:28px}.brand{justify-self:start;display:grid;gap:1px;text-align:center;color:#342a24}.brand span{font-family:'Cormorant Garamond',serif;font-size:30px;letter-spacing:5px;line-height:1}.brand small{font-size:8px;letter-spacing:2.4px;color:#8b6a58}.nav-links{display:flex;align-items:center;gap:clamp(16px,2.4vw,36px)}.nav-links a{font-size:10px;letter-spacing:1.1px;text-transform:uppercase;color:#55483e;transition:color .2s}.nav-links a:hover{color:#986554}.nav-actions{justify-self:end;display:flex;align-items:center;gap:13px}.nav-icon{position:relative;width:35px;height:35px;display:grid;place-items:center;background:transparent;border:0;color:#342a24;padding:0}.nav-count{position:absolute;right:-1px;top:-2px;width:15px;height:15px;display:grid;place-items:center;border-radius:50%;background:#986554;color:#fff;font-size:9px}.bag-pill{height:38px;display:flex;align-items:center;gap:9px;padding:0 13px;background:#342a24;color:white;font-size:10px;letter-spacing:1px;text-transform:uppercase}.bag-pill b{display:grid;place-items:center;width:18px;height:18px;border-radius:50%;background:#d9b677;color:#342a24;font-size:10px}.mobile-menu-toggle{display:none}.search-panel{position:absolute;top:100%;left:0;right:0;background:#fbf8f4;border-top:1px solid #e9dfd4;border-bottom:1px solid #e9dfd4;padding:16px max(24px,calc((100vw - 820px)/2));display:flex;align-items:center;gap:12px}.search-panel input{flex:1;min-width:0;border:0;outline:0;background:transparent;color:#342a24;padding:10px}.search-panel button{border:0;background:none;color:#986554;font-size:10px;letter-spacing:1px;text-transform:uppercase}.mobile-menu{display:none}
      @media(max-width:1000px){.nav-shell{padding:0 20px;gap:16px}.nav-links{gap:14px}.nav-links a{font-size:9px}.brand span{font-size:26px}.nav-actions{gap:8px}}
      @media(max-width:760px){.nav-shell{height:70px;grid-template-columns:40px 1fr auto;gap:10px}.mobile-menu-toggle{display:grid}.brand{justify-self:center}.nav-links,.account-icon{display:none}.nav-actions{gap:7px}.nav-icon{width:32px;height:34px}.bag-pill{height:35px;gap:7px;padding:0 9px}.bag-pill span{display:none}.mobile-menu{position:absolute;top:100%;left:0;right:0;display:grid;padding:9px 22px 18px;background:#fbf8f4;border-bottom:1px solid #e9dfd4;box-shadow:0 12px 20px rgba(40,28,21,.08)}.mobile-menu a{padding:13px 2px;border-bottom:1px solid #eee5dc;font-size:11px;letter-spacing:1.4px;text-transform:uppercase}.announcement{font-size:8px;letter-spacing:1.25px}}
    `}</style>
  </header>;
}

import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aarohi Style | Imitation Jewellery for Every Moment",
  description: "Discover thoughtfully chosen imitation jewellery for everyday sparkle, festive moments, and gifts. Find your new favourite piece at Aarohi Style.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><CartProvider><Navbar /><main>{children}</main><Footer /></CartProvider></body></html>;
}

"use client";

import Link from "next/link";
import { ArrowRight, Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "@/context/CartContext";

const money = (value: number) => `₹${value.toLocaleString("en-IN")}`;

export default function CartPage() {
  const { cart, subtotal, updateQty, removeFromCart } = useCartStore();
  const shipping = subtotal === 0 || subtotal >= 2500 ? 0 : 149;
  return <div className="cart-shell">
    <div className="cart-heading"><span className="eyebrow">YOUR AAROHI BAG</span><h1>Your picks, <em>together.</em></h1><p>{cart.length ? `${cart.reduce((sum, item) => sum + item.quantity, 0)} lovely piece${cart.reduce((sum, item) => sum + item.quantity, 0) === 1 ? "" : "s"} in your bag` : "A little sparkle is waiting to find you."}</p></div>
    {!cart.length ? <div className="empty-cart"><span className="empty-sparkle">✳</span><h2>Your bag is taking a breather.</h2><p>Discover something lovely and it will be waiting here.</p><Link className="cart-button" href="/listing">Explore the collection <ArrowRight size={16} /></Link></div> : <div className="cart-layout">
      <div className="cart-items">{cart.map((item) => <article className="cart-item" key={item.slug}><Link href={`/product/${item.slug}`} className="cart-image"><img src={item.image} alt={item.name} /></Link><div className="cart-details"><span className="cart-category">{item.category}</span><Link href={`/product/${item.slug}`}><h2>{item.name}</h2></Link><p>{item.material}</p><strong>{money(item.price)}</strong><div className="quantity-control"><button aria-label="Decrease quantity" onClick={() => updateQty(item.slug, item.quantity - 1)}><Minus size={13} /></button><span>{item.quantity}</span><button aria-label="Increase quantity" onClick={() => updateQty(item.slug, item.quantity + 1)}><Plus size={13} /></button></div></div><button className="remove-item" aria-label={`Remove ${item.name}`} onClick={() => removeFromCart(item.slug)}><Trash2 size={16} /><span>Remove</span></button></article>)}</div>
      <aside className="order-summary"><span className="eyebrow">THE DETAILS</span><h2>Order summary</h2><div className="summary-line"><span>Subtotal</span><span>{money(subtotal)}</span></div><div className="summary-line"><span>Shipping</span><span>{shipping ? money(shipping) : "Complimentary"}</span></div>{subtotal > 0 && subtotal < 2500 && <p className="shipping-note">Add {money(2500 - subtotal)} more for complimentary shipping.</p>}<div className="summary-total"><span>Total</span><strong>{money(subtotal + shipping)}</strong></div><Link className="cart-button checkout-button" href="/checkout">Continue to checkout <ArrowRight size={16} /></Link><p className="secure-note">Secure checkout · Easy 7-day returns</p></aside>
    </div>}
    <style jsx>{`
      .cart-shell{max-width:1280px;margin:0 auto;padding:68px 28px 100px;min-height:65vh}.cart-heading{text-align:center;margin-bottom:44px}.eyebrow{font-size:10px;letter-spacing:2px;color:#986554}.cart-heading h1{font-size:clamp(3rem,6vw,5rem);line-height:1;margin:13px 0}.cart-heading h1 em{color:#986554}.cart-heading p{color:#756b65;font-size:13px}.empty-cart{max-width:650px;margin:auto;padding:64px 24px;text-align:center;background:white;border:1px solid #e9dfd4}.empty-sparkle{font-size:30px;color:#bd9873}.empty-cart h2,.order-summary h2{font-size:2.5rem;margin:14px 0 8px}.empty-cart p{font-size:13px;color:#756b65;margin-bottom:24px}.cart-button{display:inline-flex;align-items:center;justify-content:center;gap:12px;background:#342a24;color:white;padding:15px 20px;font-size:10px;letter-spacing:1.2px;text-transform:uppercase}.cart-layout{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(290px,.72fr);gap:36px;align-items:start}.cart-items{display:grid;gap:14px}.cart-item{display:flex;gap:20px;position:relative;padding:16px;background:white;border:1px solid #e9dfd4}.cart-image{width:145px;height:165px;flex:none;background:#f1e9df}.cart-image img{width:100%;height:100%;object-fit:cover}.cart-details{padding:6px 0;flex:1}.cart-category{font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:#986554}.cart-details h2{font-size:2rem;font-weight:500;margin:5px 0}.cart-details p{font-size:12px;color:#756b65;margin:0 0 12px}.cart-details>strong{font-size:14px}.quantity-control{display:flex;align-items:center;gap:15px;margin-top:15px}.quantity-control button{display:grid;place-items:center;width:28px;height:28px;background:white;border:1px solid #e9dfd4;color:#342a24}.quantity-control span{font-size:12px}.remove-item{align-self:flex-start;border:0;background:none;color:#8c7c72;display:flex;align-items:center;gap:6px;font-size:10px;padding:6px}.order-summary{position:sticky;top:130px;padding:25px;background:white;border:1px solid #e9dfd4}.order-summary h2{font-size:2.1rem;margin:7px 0 24px}.summary-line,.summary-total{display:flex;justify-content:space-between;gap:15px;padding:13px 0;font-size:13px;border-bottom:1px solid #eee7df}.shipping-note{font-size:11px;color:#986554;line-height:1.5}.summary-total{border:0;padding:19px 0;font-size:14px}.summary-total strong{font-size:18px}.checkout-button{width:100%}.secure-note{text-align:center;font-size:10px;color:#756b65;margin:16px 0 0}
      @media(max-width:850px){.cart-layout{grid-template-columns:1fr}.order-summary{position:static}}@media(max-width:560px){.cart-shell{padding:48px 16px 70px}.cart-item{gap:12px;padding:10px}.cart-image{width:100px;height:125px}.cart-details h2{font-size:1.6rem}.cart-details p{font-size:10px}.remove-item span{display:none}.cart-heading{margin-bottom:28px}.order-summary{padding:20px}}
    `}</style>
  </div>;
}

"use client";

import Link from "next/link";
import { Heart, Minus, Plus, ShieldCheck, Truck } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { jewelleryProducts } from "@/lib/jewelleryData";
import { useCartStore } from "@/context/CartContext";

export default function ProductDetailPage() {
  const params = useParams<{ slug: string }>();
  const product = jewelleryProducts.find((item) => item.slug === params.slug);
  const { addToCart, wishlist, toggleWishlist } = useCartStore();
  const [selectedImage, setSelectedImage] = useState(product?.image ?? "");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  if (!product) return <div className="product-missing"><h1>We couldn't find that piece.</h1><Link href="/listing">Explore the collection</Link></div>;
  const isSaved = wishlist.some((item) => item.slug === product.slug);
  const add = () => { for (let count = 0; count < quantity; count += 1) addToCart(product); setAdded(true); window.setTimeout(() => setAdded(false), 2200); };
  return <div className="product-shell"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/listing">Shop</Link><span>/</span><span>{product.category}</span></div><div className="product-layout">
    <div className="product-gallery"><div className="product-thumbnails">{product.gallery.map((image, index) => <button key={`${image}-${index}`} className={selectedImage === image ? "selected" : ""} onClick={() => setSelectedImage(image)} aria-label={`View product image ${index + 1}`}><img src={image} alt={`${product.name} view ${index + 1}`} /></button>)}</div><div className="product-main-image"><img src={selectedImage || product.image} alt={product.name} /><span className="detail-badge">{product.badge}</span></div></div>
    <div className="product-info"><span className="eyebrow">{product.category} · AAROHI EDIT</span><h1>{product.name}</h1><div className="rating"><span>★★★★★</span> <small>Customer favourite</small></div><div className="price-line"><strong>₹{product.price.toLocaleString("en-IN")}</strong><del>₹{product.originalPrice.toLocaleString("en-IN")}</del><span>{Math.round((1 - product.price / product.originalPrice) * 100)}% off</span></div><p className="description">{product.description}</p><div className="product-material"><small>THE FINISH</small><span>{product.material}</span></div><div className="shade-section"><small>AVAILABLE SHADES</small><div className="shade-list">{product.colors.map((color) => <span key={color}>{color}</span>)}</div></div><div className="purchase-row"><div className="quantity-picker"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity"><Minus size={14} /></button><span>{quantity}</span><button onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity"><Plus size={14} /></button></div><button className="add-button" onClick={add}>{added ? "Added to your bag ✓" : "Add to bag · ₹" + (product.price * quantity).toLocaleString("en-IN")}</button><button className={`save-button ${isSaved ? "saved" : ""}`} onClick={() => toggleWishlist(product)} aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}><Heart size={19} fill={isSaved ? "currentColor" : "none"} /></button></div>{added && <p className="added-message"><Link href="/cart">View your bag</Link> · Your piece is saved in your bag.</p>}<div className="delivery-card"><div><Truck size={17} /><span><b>Complimentary delivery</b><small>On orders over ₹2,500</small></span></div><div><ShieldCheck size={17} /><span><b>Easy 7-day returns</b><small>Shop with peace of mind</small></span></div></div><div className="styling-note"><small>A LITTLE STYLE NOTE</small><p>Pair it with your favourite outfit and make the moment yours. Keep away from water, perfume, and harsh chemicals to help preserve the finish.</p></div></div></div>
    <style jsx>{`
      .product-shell{max-width:1320px;margin:auto;padding:30px 28px 90px}.breadcrumbs{display:flex;gap:10px;font-size:10px;letter-spacing:.5px;color:#8b7d73;margin-bottom:25px}.breadcrumbs span:last-child{color:#342a24}.product-layout{display:grid;grid-template-columns:1.1fr .9fr;gap:clamp(30px,6vw,85px);align-items:start}.product-gallery{display:grid;grid-template-columns:76px 1fr;gap:15px}.product-thumbnails{display:grid;align-content:start;gap:10px}.product-thumbnails button{padding:0;border:1px solid #e9dfd4;background:#f1e9df;aspect-ratio:.8;overflow:hidden}.product-thumbnails button.selected{border:2px solid #986554}.product-thumbnails img,.product-main-image img{width:100%;height:100%;object-fit:cover}.product-main-image{position:relative;aspect-ratio:.83;background:#eee3d7}.detail-badge{position:absolute;top:15px;left:15px;background:#fbf8f4;padding:8px 11px;font-size:9px;letter-spacing:1px;text-transform:uppercase}.product-info{padding:15px 0}.eyebrow,.product-material small,.shade-section>small,.styling-note>small{font-size:9px;letter-spacing:1.8px;color:#986554}.product-info h1{font-size:clamp(3rem,5vw,5rem);line-height:.98;margin:16px 0 11px}.rating{display:flex;align-items:center;gap:10px;color:#a27949}.rating span{font-size:12px;letter-spacing:2px}.rating small{font-size:10px;color:#756b65}.price-line{display:flex;align-items:center;gap:13px;margin:21px 0}.price-line strong{font-size:22px;font-weight:500}.price-line del{font-size:13px;color:#95877e}.price-line>span{font-size:10px;letter-spacing:.6px;color:#986554;background:#efe5dc;padding:6px 8px}.description{font-size:13px;line-height:1.85;color:#685e57;max-width:530px}.product-material{display:grid;gap:6px;margin-top:22px}.product-material span{font-size:13px}.shade-section{margin-top:24px}.shade-list{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}.shade-list span{padding:9px 12px;border:1px solid #e9dfd4;background:white;font-size:11px}.purchase-row{display:flex;gap:9px;margin-top:28px}.quantity-picker{display:flex;align-items:center;border:1px solid #e9dfd4;background:white}.quantity-picker button{width:35px;height:48px;border:0;background:none;display:grid;place-items:center}.quantity-picker>span{min-width:20px;text-align:center;font-size:12px}.add-button{flex:1;min-height:48px;border:0;background:#342a24;color:white;font-size:10px;letter-spacing:1px;text-transform:uppercase;padding:10px}.add-button:hover{background:#715348}.save-button{width:49px;display:grid;place-items:center;background:white;border:1px solid #e9dfd4;color:#342a24}.save-button.saved{color:#986554}.added-message{font-size:11px;color:#756b65}.added-message a{color:#986554;text-decoration:underline}.delivery-card{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:17px;margin-top:25px;background:#f3eee8}.delivery-card>div{display:flex;gap:10px;align-items:flex-start;color:#986554}.delivery-card span{display:grid;gap:4px}.delivery-card b{font-size:10px;color:#342a24;font-weight:500}.delivery-card small{font-size:9px;color:#756b65}.styling-note{border-top:1px solid #e9dfd4;margin-top:24px;padding-top:18px}.styling-note p{font-size:11px;line-height:1.8;color:#756b65}.product-missing{min-height:55vh;display:grid;align-content:center;justify-items:center;gap:18px}.product-missing h1{font-size:3rem}.product-missing a{color:#986554;text-decoration:underline}
      @media(max-width:850px){.product-layout{grid-template-columns:1fr 1fr;gap:25px}.product-gallery{grid-template-columns:60px 1fr}.delivery-card{grid-template-columns:1fr}}@media(max-width:620px){.product-shell{padding:22px 16px 65px}.product-layout{grid-template-columns:1fr}.product-gallery{grid-template-columns:1fr;gap:10px}.product-thumbnails{grid-row:2;grid-template-columns:repeat(4,1fr)}.product-thumbnails button{aspect-ratio:1}.product-info{padding-top:5px}.product-info h1{font-size:3.6rem}.delivery-card{grid-template-columns:1fr 1fr;padding:13px}.delivery-card b{font-size:9px}}
    `}</style>
  </div>;
}













































































































































































































































































































































































































































































app/page.tsx
app/globals.css
app/layout.tsx
context/CartContext.jsx
components/common/Navbar.jsx
app/cart/page.tsx
app/product/[slug]/page.tsx




























 












































