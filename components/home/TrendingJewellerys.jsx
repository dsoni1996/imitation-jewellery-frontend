import TitleSection from "../common/TitleSection";
import Link from "next/link";

const DEFAULT_ITEMS = [
  { img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80", tag: "New", title: "Pearl Drop Set", desc: "Softly luminous and perfect for gifting.", price: "₹ 1,999", slug: "/listing" },
  { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80", tag: "Bestseller", title: "Rose Gold Dots", desc: "Minimal sparkle for festive brunches and day-to-night looks.", price: "₹ 2,499", slug: "/listing" },
  { img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80", tag: "Trending", title: "Floral Charm Earings", desc: "Lightweight, statement-making, and made to shine.", price: "₹ 1,599", slug: "/listing" },
];

const TrendingJewellerys = () => (
  <>
    <style>{`
      .tj-section { padding: 20px 0 80px; }
      .tj-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; }
      .tj-card { display: block; overflow: hidden; background: #fff; border: 1px solid #f3e0e7; border-radius: 18px; box-shadow: 0 16px 24px rgba(89, 50, 62, 0.05); }
      .tj-card img { width: 100%; height: 340px; object-fit: cover; display: block; }
      .tj-body { padding: 18px 18px 20px; }
      .tj-tag { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: var(--rose-deep); }
      .tj-title { font-size: clamp(2rem, 3vw, 2.6rem); margin-top: 8px; }
      .tj-desc { color: var(--muted); margin: 10px 0 16px; line-height: 1.6; }
      .tj-footer { display: flex; align-items: center; justify-content: space-between; }
      .tj-price { font-weight: 600; }
      .tj-shop { color: var(--rose-deep); letter-spacing: 1.5px; text-transform: uppercase; font-size: 11px; }
      @media (max-width: 860px) { .tj-grid { grid-template-columns: 1fr; } }
    `}</style>

    <section className="tj-section">
      <TitleSection title="Trending <em>Styles</em>" subtitle="Most loved picks" width="1320px">
        <div className="tj-grid">
          {DEFAULT_ITEMS.map((item) => (
            <Link key={item.title} href={item.slug} className="tj-card">
              <img src={item.img} alt={item.title} />
              <div className="tj-body">
                <div className="tj-tag">{item.tag}</div>
                <h3 className="tj-title">{item.title}</h3>
                <p className="tj-desc">{item.desc}</p>
                <div className="tj-footer">
                  <span className="tj-price">{item.price}</span>
                  <span className="tj-shop">Shop now</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </TitleSection>
    </section>
  </>
);

export default TrendingJewellerys;
