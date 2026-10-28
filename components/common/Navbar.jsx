import Link from "next/link";
import { Heart, Search, ShoppingBag, UserRound } from "lucide-react";

const navItems = [
  { label: "New In", href: "/listing" },
  { label: "Rings", href: "/listing?category=Rings" },
  { label: "Earrings", href: "/listing?category=Earrings" },
  { label: "Necklaces", href: "/listing?category=Necklaces" },
  { label: "Offers", href: "/listing?offer=true" },
];

const Navbar = () => {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(255,250,246,0.92)", backdropFilter: "blur(10px)", borderBottom: "1px solid #f7e4ec" }}>
      <style>{`
        .nav-shell { max-width: 1360px; margin: 0 auto; padding: 18px 24px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .brand { font-family: 'Cormorant Garamond', serif; font-size: 2.3rem; letter-spacing: 4px; font-weight: 600; color: var(--rose-deep); }
        .nav-links { display: flex; align-items: center; gap: 22px; flex-wrap: wrap; justify-content: center; }
        .nav-links a { font-size: 12px; letter-spacing: 1.6px; text-transform: uppercase; color: var(--dark); opacity: 0.8; }
        .nav-actions { display: flex; align-items: center; gap: 14px; }
        .icon-btn {
          width: 38px; height: 38px; display: grid; place-items: center; border-radius: 50%; border: 1px solid #f2dfe5; background: #fff; color: var(--dark);
        }
        .bag-pill {
          display: inline-flex; align-items: center; gap: 8px; border-radius: 999px; background: var(--dark); color: #fff; padding: 10px 16px; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase;
        }
        @media (max-width: 820px) {
          .nav-shell { flex-wrap: wrap; justify-content: center; }
          .nav-links { order: 3; width: 100%; }
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
          <span className="icon-btn"><Search size={18} /></span>
          <span className="icon-btn"><Heart size={18} /></span>
          <span className="icon-btn"><UserRound size={18} /></span>
          <span className="bag-pill"><ShoppingBag size={16} /> Bag (0)</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
