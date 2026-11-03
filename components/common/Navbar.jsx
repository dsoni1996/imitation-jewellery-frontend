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
  { label: "Sets", href: "/listing?category=Sets" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { cartCount, wishlist } = useCartStore();

  return (
    <header className="site-header">
      <div className="announcement">A LITTLE EXTRA, EVERY DAY <span>·</span> FREE SHIPPING OVER ₹2,500</div>
      <div className="nav-shell">
        <button className="nav-icon mobile-menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
        <Link href="/" className="brand"><span>AAROHI</span><small>STYLE & SPARKLE</small></Link>
        <nav className="nav-links" aria-label="Main navigation">{navItems.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}</nav>
        <div className="nav-actions">
          <button className="nav-icon" onClick={() => setSearchOpen((open) => !open)} aria-label="Search products"><Search size={19} /></button>
          <Link className="nav-icon account-icon" href="/login" aria-label="Account"><User size={19} /></Link>
          <Link className="nav-icon wishlist-icon" href="/wishlist" aria-label={`Wishlist, ${wishlist.length} items`}><Heart size={19} />{wishlist.length > 0 && <span className="nav-count">{wishlist.length}</span>}</Link>
          <Link className="bag-pill" href="/cart" aria-label={`Shopping bag, ${cartCount} items`}><ShoppingBag size={17} /><span>Bag</span><b>{cartCount}</b></Link>
        </div>
      </div>
      {searchOpen && <form className="search-panel" action="/listing"><Search size={18} /><input autoFocus name="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search rings, earrings, bangles..." /><button type="submit">Search <span>→</span></button></form>}
      {menuOpen && <nav className="mobile-menu" aria-label="Mobile navigation">{navItems.map((item) => <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}<Link href="/wishlist" onClick={() => setMenuOpen(false)}>Wishlist ({wishlist.length})</Link><Link href="/about" onClick={() => setMenuOpen(false)}>Our story</Link><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></nav>}
      <style jsx>{`
        .site-header{position:sticky;top:0;z-index:100;background:rgba(251,248,244,.97);backdrop-filter:blur(14px);border-bottom:1px solid #e9dfd4}.announcement{height:27px;background:#342a24;color:#f0dfc8;text-align:center;font-size:9px;letter-spacing:1.8px;display:flex;align-items:center;justify-content:center;gap:9px}.announcement span{color:#d9b677}.nav-shell{max-width:1400px;margin:auto;height:82px;padding:0 32px;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:28px}.brand{justify-self:start;display:grid;gap:1px;text-align:center;color:#342a24}.brand span{font-family:'Cormorant Garamond',serif;font-size:30px;letter-spacing:5px;line-height:1}.brand small{font-size:8px;letter-spacing:2.4px;color:#8b6a58}.nav-links{display:flex;align-items:center;gap:clamp(14px,2vw,30px)}.nav-links a{font-size:10px;letter-spacing:1px;text-transform:uppercase;color:#55483e}.nav-links a:hover{color:#986554}.nav-actions{justify-self:end;display:flex;align-items:center;gap:11px}.nav-icon{position:relative;width:35px;height:35px;display:grid;place-items:center;background:transparent;border:0;color:#342a24;padding:0}.nav-count{position:absolute;right:-1px;top:-2px;width:15px;height:15px;display:grid;place-items:center;border-radius:50%;background:#986554;color:#fff;font-size:9px}.bag-pill{height:38px;display:flex;align-items:center;gap:9px;padding:0 13px;background:#342a24;color:#fff;font-size:10px;letter-spacing:1px;text-transform:uppercase}.bag-pill b{display:grid;place-items:center;width:18px;height:18px;border-radius:50%;background:#d9b677;color:#342a24;font-size:10px}.mobile-menu-toggle{display:none}.search-panel{position:absolute;top:100%;left:0;right:0;background:#fbf8f4;border-top:1px solid #e9dfd4;border-bottom:1px solid #e9dfd4;padding:16px max(24px,calc((100vw - 820px)/2));display:flex;align-items:center;gap:12px}.search-panel input{flex:1;min-width:0;border:0;outline:0;background:transparent;color:#342a24;padding:10px}.search-panel button{border:0;background:none;color:#986554;font-size:10px;letter-spacing:1px;text-transform:uppercase}.mobile-menu{display:none}
        @media(max-width:1000px){.nav-shell{padding:0 18px;gap:14px}.nav-links{gap:11px}.nav-links a{font-size:9px}.brand span{font-size:26px}.nav-actions{gap:7px}}
        @media(max-width:760px){.nav-shell{height:70px;grid-template-columns:40px 1fr auto;gap:8px}.mobile-menu-toggle{display:grid}.brand{justify-self:center}.nav-links,.account-icon{display:none}.nav-actions{gap:6px}.nav-icon{width:30px;height:34px}.bag-pill{height:35px;gap:7px;padding:0 9px}.bag-pill>span{display:none}.mobile-menu{position:absolute;top:100%;left:0;right:0;display:grid;padding:9px 22px 18px;background:#fbf8f4;border-bottom:1px solid #e9dfd4;box-shadow:0 12px 20px rgba(40,28,21,.08)}.mobile-menu a{padding:13px 2px;border-bottom:1px solid #eee5dc;font-size:11px;letter-spacing:1.4px;text-transform:uppercase}.announcement{font-size:8px;letter-spacing:1.2px}}
      `}</style>
    </header>
  );
}
