import TitleSection from "../common/TitleSection";
import Link from "next/link";

const DEFAULT_ARRIVALS = [
  { title: "Rose Gold Charm", price: "₹ 1,299", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80" },
  { title: "Crystal Layer Set", price: "₹ 1,799", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" },
  { title: "Desi Bridal Drop", price: "₹ 2,399", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80" },
];

const NewArrival = () => (
  <>
    <style>{`
      .na-section { background: linear-gradient(135deg, #1b1315, #2d1d22); color: #fffaf6; padding: 80px 0 72px; }
      .na-shell { max-width: 1320px; margin: 0 auto; padding: 0 20px; }
      .na-header { display: flex; justify-content: space-between; gap: 22px; align-items: end; margin-bottom: 28px; }
      .na-tag { color: #f2d89a; text-transform: uppercase; letter-spacing: 3px; font-size: 11px; }
      .na-title { font-size: clamp(2.7rem, 5vw, 5rem); line-height: 0.9; }
      .na-title em { color: #f2d89a; font-style: italic; }
      .na-cta { display: inline-flex; align-items: center; justify-content: center; border: 1px solid #f2d89a; color: #f2d89a; padding: 12px 18px; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; }
      .na-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; }
      .na-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(242,216,154,0.18); overflow: hidden; }
      .na-card img { width: 100%; height: 360px; object-fit: cover; display: block; }
      .na-body { padding: 20px 18px 22px; }
      .na-name { font-size: 2rem; margin: 6px 0; }
      .na-price { color: #f2d89a; font-weight: 600; }
      @media (max-width: 820px) { .na-grid { grid-template-columns: 1fr; } .na-header { flex-direction: column; align-items: flex-start; } }
    `}</style>

    <section className="na-section">
      <div className="na-shell">
        <div className="na-header">
          <div>
            <div className="na-tag">Fresh arrivals</div>
            <h2 className="na-title">New <em>Glow</em> <br />Every Week</h2>
          </div>
          <Link href="/listing" className="na-cta">Shop all</Link>
        </div>

        <div className="na-grid">
          {DEFAULT_ARRIVALS.map((item) => (
            <div className="na-card" key={item.title}>
              <img src={item.img} alt={item.title} />
              <div className="na-body">
                <div className="na-tag">Limited</div>
                <div className="na-name">{item.title}</div>
                <div className="na-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default NewArrival;
