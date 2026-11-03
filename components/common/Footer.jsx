import Link from "next/link";

const footerGroups = [
  { heading: "Shop", links: [{ label: "All jewellery", href: "/listing" }, { label: "Earrings", href: "/listing?category=Earrings" }, { label: "Necklaces", href: "/listing?category=Necklaces" }, { label: "Rings", href: "/listing?category=Rings" }, { label: "Jewellery sets", href: "/listing?category=Sets" }] },
  { heading: "Your order", links: [{ label: "Shopping bag", href: "/cart" }, { label: "Wishlist", href: "/wishlist" }, { label: "Checkout / order on WhatsApp", href: "/checkout" }] },
  { heading: "Aarohi", links: [{ label: "Our story", href: "/about" }, { label: "Contact us", href: "/contact" }] },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="footer-brand-name">AAROHI <span>STYLE</span></Link>
            <p>Imitation jewellery for the everyday plans and special moments that feel like you.</p>
            <a className="footer-contact-link" href="mailto:hello@aarohi.style">hello@aarohi.style</a>
          </div>
          {footerGroups.map((group) => (
            <div className="footer-group" key={group.heading}>
              <h2>{group.heading}</h2>
              <ul>{group.links.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Aarohi Style. All rights reserved.</span>
          <span>Orders are confirmed directly with our team before payment.</span>
        </div>
      </div>
    </footer>
  );
}
