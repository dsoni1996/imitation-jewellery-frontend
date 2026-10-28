import Link from "next/link";

const ListingPage = () => {
  const products = [
    { slug: "pearl-drop-set", name: "Pearl Drop Set", category: "Earrings", price: 1999, originalPrice: 2999, badge: "Best Seller", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80" },
    { slug: "rose-gold-dots", name: "Rose Gold Dots", category: "Rings", price: 2499, originalPrice: 3499, badge: "Trending", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80" },
    { slug: "floral-charm-earings", name: "Floral Charm Earrings", category: "Earrings", price: 1599, originalPrice: 2299, badge: "New", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80" },
    { slug: "crystal-layer-set", name: "Crystal Layer Set", category: "Necklaces", price: 1799, originalPrice: 2599, badge: "Limited", image: "https://images.unsplash.com/photo-1601821765780-3b0a7a6f4f1d?auto=format&fit=crop&w=900&q=80" },
    { slug: "bridal-crown-radiance", name: "Bridal Crown Radiance", category: "Headwear", price: 2899, originalPrice: 3999, badge: "Bridal", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80" },
    { slug: "moonlit-bangle-set", name: "Moonlit Bangle Set", category: "Bangles", price: 2199, originalPrice: 3299, badge: "Gift Pick", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80" },
  ];

  return (
    <>
      <style>{`
        .listing-shell { max-width: 1320px; margin: 0 auto; padding: 42px 20px 90px; }
        .page-header { display: flex; justify-content: space-between; align-items: end; gap: 18px; flex-wrap: wrap; margin-bottom: 28px; }
        .page-header h1 { font-size: clamp(2.7rem, 5vw, 4.5rem); }
        .page-header p { color: #735f67; }
        .filter-row { display: flex; flex-wrap: wrap; gap: 12px; margin: 28px 0 32px; }
        .chip { border: 1px solid #f0dfe7; background: white; border-radius: 999px; padding: 10px 16px; font-size: 11px; letter-spacing: 1.6px; text-transform: uppercase; }
        .product-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 26px; }
        @media (max-width: 900px) { .product-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 620px) { .product-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="listing-shell">
        <div className="page-header">
          <div>
            <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "#b76a86" }}>Aarohi Style</div>
            <h1>Jewellery for every vibe</h1>
          </div>
          <p>Handpicked pieces for festive sparkle, daily glam, and gifting moments.</p>
        </div>

        <div className="filter-row">
          {['All', 'Rings', 'Earrings', 'Necklaces', 'Bangles', 'Gift Sets'].map((item) => (
            <button key={item} className="chip">{item}</button>
          ))}
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <Link key={product.slug} href={`/product/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <article style={{ background: '#fff', border: '1px solid #f4e4eb', borderRadius: 20, overflow: 'hidden', boxShadow: '0 18px 30px rgba(74,44,52,0.06)' }}>
                <div style={{ position: 'relative' }}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }} />
                  <span style={{ position: 'absolute', top: 15, left: 15, background: 'rgba(26,16,21,0.8)', color: '#f4dca6', padding: '7px 10px', borderRadius: 999, fontSize: 9, letterSpacing: 2, textTransform: 'uppercase' }}>{product.badge}</span>
                </div>
                <div style={{ padding: 18 }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.1rem', marginBottom: 8 }}>{product.name}</div>
                  <div style={{ color: '#8b6c7a', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase' }}>{product.category}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 14 }}>
                    <span style={{ fontWeight: 700 }}>₹{product.price.toLocaleString('en-IN')}</span>
                    <span style={{ color: '#9a8a90', textDecoration: 'line-through', fontSize: 13 }}>₹{product.originalPrice.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListingPage;
