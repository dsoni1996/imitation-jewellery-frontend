import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
      <style>{`
        .pc-card {
          display: block;
          background: #fff;
          border: 1px solid #f3e2ea;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 16px 28px rgba(92, 59, 68, 0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .pc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 34px rgba(92, 59, 68, 0.12);
        }
        .pc-image-wrap { position: relative; }
        .pc-image-wrap img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          display: block;
        }
        .pc-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(26,16,21,0.8);
          color: #f4dca6;
          font-size: 9px;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          padding: 7px 10px;
          border-radius: 999px;
        }
        .pc-body { padding: 18px 18px 20px; }
        .pc-name { font-family: 'Cormorant Garamond', serif; font-size: 2.2rem; line-height: 1; margin-bottom: 10px; }
        .pc-meta { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: #9a6f7f; margin-bottom: 12px; }
        .pc-price-row { display: flex; align-items: center; gap: 10px; margin-top: 8px; }
        .pc-price { font-weight: 700; }
        .pc-original { color: #9b8d92; text-decoration: line-through; font-size: 13px; }
      `}</style>

      <article className="pc-card">
        <div className="pc-image-wrap">
          <img src={product.image} alt={product.name} />
          {product.badge && <span className="pc-badge">{product.badge}</span>}
        </div>
        <div className="pc-body">
          <div className="pc-name">{product.name}</div>
          <div className="pc-meta">{product.category}</div>
          <div className="pc-price-row">
            <span className="pc-price">₹{product.price.toLocaleString("en-IN")}</span>
            <span className="pc-original">₹{product.originalPrice.toLocaleString("en-IN")}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
