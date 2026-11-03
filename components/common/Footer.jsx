import Link from "next/link";

const footerGroups = [
  { heading: "Shop", links: [{ label: "All jewellery", href: "/listing" }, { label: "Earrings", href: "/listing?category=Earrings" }, { label: "Necklaces", href: "/listing?category=Necklaces" }, { label: "Rings", href: "/listing?category=Rings" }, { label: "Jewellery sets", href: "/listing?category=Sets" }] },
  { heading: "Your order", links: [{ label: "Shopping bag", href: "/cart" }, { label: "Wishlist", href: "/wishlist" }, { label: "Checkout / order on WhatsApp", href: "/checkout" }] },
  { heading: "Aarohi", links: [{ label: "Our story", href: "/about" }, { label: "Contact us", href: "/contact" }] },
];

export default function Footer() {
  return <footer className="site-footer">
    <div className="footer-shell">
      <div className="footer-top">
        <div className="footer-brand"><Link href="/" className="brand">AAROHI <span>STYLE</span></Link><p>Imitation jewellery for the everyday plans and special moments that feel like you.</p><a className="contact-link" href="mailto:hello@aarohi.style">hello@aarohi.style</a></div>
        {footerGroups.map((group) => <div className="footer-group" key={group.heading}><h2>{group.heading}</h2><ul>{group.links.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul></div>)}
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Aarohi Style. All rights reserved.</span><span>Orders are confirmed directly with our team before payment.</span></div>
    </div>
    <style jsx>{`
      .site-footer{margin-top:0;background:#302721;color:#f4ede5}.footer-shell{max-width:1320px;margin:auto;padding:48px 26px 20px}.footer-top{display:grid;grid-template-columns:1.7fr repeat(3,1fr);gap:30px}.footer-brand .brand{font-family:'Cormorant Garamond',serif;font-size:29px;letter-spacing:3px;color:#fff}.footer-brand .brand span{color:#d9b677}.footer-brand p{max-width:300px;color:#d4c8bd;font-size:12px;line-height:1.7;margin:12px 0}.contact-link{font-size:11px;color:#e3c991}.footer-group h2{font-family:'Jost',sans-serif;font-size:10px;letter-spacing:1.8px;text-transform:uppercase;color:#d9b677;margin:5px 0 15px}.footer-group ul{list-style:none;padding:0;margin:0;display:grid;gap:10px}.footer-group a{font-size:12px;color:#e3d9d0}.footer-group a:hover,.contact-link:hover{color:#fff}.footer-bottom{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;border-top:1px solid rgba(255,255,255,.14);margin-top:30px;padding-top:16px;color:#cbbfb4;font-size:10px}
      @media(max-width:720px){.footer-shell{padding:38px 20px 18px}.footer-top{grid-template-columns:1fr 1fr;gap:26px 18px}.footer-brand{grid-column:1/-1}.footer-bottom{line-height:1.6}}
    `}</style>
  </footer>;
}
