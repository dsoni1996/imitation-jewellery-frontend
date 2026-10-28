import TitleSection from "../common/TitleSection";
import Link from "next/link";

const DEFAULT_ITEMS = [
  { title: "Pearl Grace", sub: "Everyday Luxe", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=700&q=80", href: "/listing?category=Pearls" },
  { title: "Chic Hoops", sub: "Party Pick", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80", href: "/listing?category=Earrings" },
  { title: "Minimal Gold", sub: "Stackable Set", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80", href: "/listing?category=Rings" },
];

const Collection = () => {
  const items = DEFAULT_ITEMS;

  return (
    <>
      <style>{`
        .coll-section { padding: 20px 0 70px; }
        .coll-grid { display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 18px; }
        .coll-card { position: relative; overflow: hidden; min-height: 420px; border-radius: 16px; box-shadow: 0 18px 28px rgba(98, 64, 73, 0.08); }
        .coll-card img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .coll-overlay {
          position: absolute; inset: 0; background: linear-gradient(180deg, rgba(33, 22, 27, 0.12), rgba(33, 22, 27, 0.66));
          display: flex; align-items: end; padding: 24px;
        }
        .coll-label { color: #fff; }
        .coll-sub { text-transform: uppercase; letter-spacing: 2px; font-size: 10px; color: #f2d89a; }
        .coll-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.9rem, 4vw, 3rem); }
        @media (max-width: 760px) {
          .coll-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="coll-section">
        <TitleSection title="Curated <em>Looks</em>" subtitle="Shop by mood" width="1320px">
          <div className="coll-grid">
            {items.map((item) => (
              <Link key={item.title} href={item.href} className="coll-card">
                <img src={item.img} alt={item.title} />
                <div className="coll-overlay">
                  <div className="coll-label">
                    <div className="coll-sub">{item.sub}</div>
                    <div className="coll-title">{item.title}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </TitleSection>
      </section>
    </>
  );
};

export default Collection;
