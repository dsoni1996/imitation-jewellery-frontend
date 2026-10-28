import Link from "next/link";

const footerLinks = {
  Shop: [
    { label: "New Arrivals", href: "/listing" },
    { label: "Rings", href: "/listing?category=Rings" },
    { label: "Earrings", href: "/listing?category=Earrings" },
    { label: "Bestsellers", href: "/listing?sort=bestseller" },
  ],
  Help: [
    { label: "Track Order", href: "/track-order" },
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "FAQ", href: "/faq" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Stores", href: "/stores" },
  ],
};

const Footer = () => (
  <footer style={{ background: "#1f1b1c", color: "#f8e2ea", marginTop: 40 }}>
    <style>{`
      .ft-shell { max-width: 1360px; margin: 0 auto; padding: 50px 24px 24px; }
      .ft-top { display: grid; grid-template-columns: 1.3fr 1fr 1fr 1fr; gap: 28px; }
      .brand { font-family: 'Cormorant Garamond', serif; font-size: 2.5rem; letter-spacing: 4px; color: #fff; }
      .brand span { color: var(--gold); }
      .tagline { color: #d8c1c7; line-height: 1.7; max-width: 280px; margin-top: 16px; }
      .ft-col-title { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin-bottom: 18px; }
      .ft-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
      .ft-list a { color: #d8c1c7; font-size: 14px; }
      .ft-bottom { border-top: 1px solid rgba(255,255,255,0.1); margin-top: 26px; padding-top: 22px; display: flex; justify-content: space-between; gap: 18px; align-items: center; flex-wrap: wrap; }
      .ft-copy { color: #cbadb4; font-size: 12px; }
      .badge-row { display: flex; gap: 8px; flex-wrap: wrap; }
      .badge { padding: 6px 10px; border: 1px solid rgba(255,255,255,0.08); font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: #f1dbe2; }
      @media (max-width: 760px) {
        .ft-top { grid-template-columns: 1fr 1fr; }
      }
      @media (max-width: 520px) {
        .ft-top { grid-template-columns: 1fr; }
      }
    `}</style>

    <div className="ft-shell">
      <div className="ft-top">
        <div>
          <div className="brand">Aarohi <span>Style</span></div>
          <p className="tagline">
            Thoughtful imitation jewellery for festive moments, gifting, everyday sparkle, and statement looks.
          </p>
        </div>

        {Object.entries(footerLinks).map(([heading, items]) => (
          <div key={heading}>
            <div className="ft-col-title">{heading}</div>
            <ul className="ft-list">
              {items.map((item) => (
                <li key={item.label}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="ft-bottom">
        <div className="ft-copy">© 2025 Aarohi Style. All rights reserved.</div>
        <div className="badge-row">
          <span className="badge">Secure Pay</span>
          <span className="badge">Easy Returns</span>
          <span className="badge">Fast Delivery</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
