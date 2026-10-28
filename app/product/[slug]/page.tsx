import Link from "next/link";

const product = {
  slug: "pearl-drop-set",
  name: "Pearl Drop Set",
  category: "Earrings",
  price: 1999,
  originalPrice: 2999,
  badge: "Best Seller",
  material: "Gold plated brass",
  image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  ],
  description: "Soft pearl accents, lightweight comfort, and an elegant everyday shine for festive evenings.",
  colors: ["Rose Gold", "Silver", "Champagne"],
};

const ProductDetailPage = () => {
  return (
    <>
      <style>{`
        .detail-shell { max-width: 1320px; margin: 0 auto; padding: 40px 20px 90px; }
        .detail-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 36px; }
        .gallery { display: grid; grid-template-columns: 120px 1fr; gap: 18px; }
        .thumbs { display: grid; gap: 12px; }
        .thumbs img { width: 100%; height: 110px; object-fit: cover; border-radius: 12px; border: 1px solid #f0dfe7; }
        .main-image { width: 100%; min-height: 620px; object-fit: cover; border-radius: 24px; }
        .category-pill { display: inline-block; background: #f9ecf3; color: #ad5576; padding: 8px 12px; border-radius: 999px; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; }
        .product-name { font-family: 'Cormorant Garamond', serif; font-size: clamp(3rem, 5vw, 5rem); line-height: 1; margin: 16px 0 12px; }
        .price-row { display: flex; align-items: center; gap: 12px; margin: 14px 0; }
        .price { font-size: 2rem; font-weight: 700; }
        .original { color: #947c87; text-decoration: line-through; font-size: 1.1rem; }
        .desc { color: #5f4d56; line-height: 1.8; max-width: 560px; }
        .swatches { display: flex; flex-wrap: wrap; gap: 12px; margin: 22px 0; }
        .swatch { border: 1px solid #efdbe3; border-radius: 999px; padding: 10px 14px; font-size: 12px; }
        .cta-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px; }
        .primary, .secondary { padding: 16px 26px; border-radius: 999px; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; }
        .primary { background: #1f1b1c; color: white; border: none; }
        .secondary { background: white; color: #1f1b1c; border: 1px solid #ead9df; }
        .info-box { margin-top: 28px; padding: 20px 22px; background: #fffaf8; border: 1px solid #f0dfe7; border-radius: 18px; }
        @media (max-width: 900px) { .detail-grid { grid-template-columns: 1fr; } .gallery { grid-template-columns: 1fr; } .thumbs { grid-template-columns: repeat(3, 1fr); } }
      `}</style>

      <div className="detail-shell">
        <div className="detail-grid">
          <div className="gallery">
            <div className="thumbs">
              {product.gallery.map((img) => (
                <img key={img} src={img} alt={product.name} />
              ))}
            </div>
            <img className="main-image" src={product.image} alt={product.name} />
          </div>

          <div>
            <div className="category-pill">{product.category}</div>
            <h1 className="product-name">{product.name}</h1>
            <div className="price-row">
              <span className="price">₹{product.price.toLocaleString("en-IN")}</span>
              <span className="original">₹{product.originalPrice.toLocaleString("en-IN")}</span>
            </div>

            <p className="desc">{product.description}</p>

            <div style={{ marginTop: 20, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: '#8c6977' }}>
              Finish: {product.material}
            </div>

            <div style={{ marginTop: 22 }}>
              <div style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: '#8c6977' }}>Available shades</div>
              <div className="swatches">
                {product.colors.map((color) => (
                  <span key={color} className="swatch">{color}</span>
                ))}
              </div>
            </div>

            <div className="cta-row">
              <button className="primary">Add to bag</button>
              <button className="secondary">Add to wishlist</button>
            </div>

            <div className="info-box">
              <strong>Styling notes:</strong> Pair with a pastel saree, minimal makeup, and soft curls for the perfect festive glow.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
