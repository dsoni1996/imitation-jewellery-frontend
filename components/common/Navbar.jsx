import Link from "next/link";
import { Search, SlidersHorizontal, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "New In", href: "/listing" },
  { label: "Rings", href: "/listing?category=Rings" },
  { label: "Earrings", href: "/listing?category=Earrings" },
  { label: "Necklaces", href: "/listing?category=Necklaces" },
  { label: "Offers", href: "/listing?offer=true" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 999, background: "rgba(255,250,246,0.94)", backdropFilter: "blur(12px)", borderBottom: "1px solid #f7e4ec" }}>
      <style>{`
        .nav-shell { max-width: 1360px; margin: 0 auto; padding: 18px 24px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .brand { font-family: 'Cormorant Garamond', serif; font-size: 2.4rem; letter-spacing: 4px; font-weight: 600; color: var(--rose-deep); }
        .nav-links { display: flex; align-items: center; gap: 22px; flex-wrap: wrap; justify-content: center; }
        .nav-links a { font-size: 12px; letter-spacing: 1.6px; text-transform: uppercase; color: var(--dark); opacity: 0.8; }
        .nav-actions { display: flex; align-items: center; gap: 14px; }
        .icon-btn {
          width: 38px; height: 38px; display: grid; place-items: center; border-radius: 50%; border: 1px solid #f2dfe5; background: #fff; color: var(--dark);
        }
        .bag-pill {
          display: inline-flex; align-items: center; gap: 8px; border-radius: 999px; background: var(--dark); color: #fff; padding: 10px 16px; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase;
        }
        .mobile-btn { display: none; }
        .search-panel {
          position: absolute; left: 0; right: 0; top: 100%; background: #fffaf8; border-bottom: 1px solid #f2dee8; padding: 18px 24px;
        }
        .search-box {
          max-width: 900px; margin: 0 auto; display: flex; align-items: center; gap: 12px; background: #fff; border: 1px solid #f2dee8; border-radius: 999px; padding: 12px 18px;
        }
        .search-box input { width: 100%; border: none; outline: none; background: transparent; font: inherit; }
        .mobile-menu {
          position: absolute; left: 0; right: 0; top: 100%; background: #fffaf8; border-bottom: 1px solid #f2dee8; padding: 12px 20px 20px;
        }
        .mobile-menu a { display: block; padding: 12px 0; border-bottom: 1px solid #f3e0e7; font-size: 13px; letter-spacing: 1.4px; text-transform: uppercase; }
        @media (max-width: 860px) {
          .nav-links, .nav-actions .desktop-only { display: none; }
          .mobile-btn { display: inline-flex; }
          .nav-shell { padding: 14px 20px; }
        }
      `}</style>

      <div className="nav-shell">
        <Link href="/" className="brand">Aarohi</Link>

        <nav className="nav-links">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="icon-btn desktop-only" onClick={() => setIsSearchOpen((open) => !open)} aria-label="Search">
            <Search size={18} />
          </button>
          <button className="icon-btn desktop-only" aria-label="Wishlist">
            <Heart size={18} />
          </button>
          <Link href="/login" className="icon-btn desktop-only" aria-label="Account">
            <User size={18} />
          </Link>
          <Link href="/cart" className="bag-pill" aria-label="Cart">
            <ShoppingBag size={16} /> Bag (0)
          </Link>
          <button className="icon-btn mobile-btn" onClick={() => setIsMenuOpen((open) => !open)} aria-label="Open menu">
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="search-panel">
          <div className="search-box">
            <Search size={18} color="#7c5d66" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for rings, earrings, bangles..."
            />
            {query ? (
              <Link href={`/listing?search=${encodeURIComponent(query)}`} onClick={() => setIsSearchOpen(false)} style={{ fontSize: 12, letterSpacing: 1.3, textTransform: "uppercase", color: "#b76a86" }}>
                Search
              </Link>
            ) : null}
          </div>
        </div>
      )}

      {isMenuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)}>{item.label}</Link>
          ))}
          <Link href="/login" onClick={() => setIsMenuOpen(false)} style={{ marginTop: 12 }}>Account</Link>
          <Link href="/wishlist" onClick={() => setIsMenuOpen(false)} style={{ marginTop: 12 }}>Wishlist</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;


































































