"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { jewelleryProducts } from "@/lib/jewelleryData";

const categories = ["All", "Rings", "Earrings", "Necklaces", "Bangles", "Pendants", "Sets", "Gift Sets"];

const ListingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");

  const filteredProducts = useMemo(() => {
    const q = search.trim().toLowerCase();
    let items = jewelleryProducts.filter((product) => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory || (selectedCategory === "Gift Sets" && product.category === "Sets");
      const matchesSearch = !q || [product.name, product.category, product.material, product.description].join(" ").toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });

    if (sort === "low-to-high") items = [...items].sort((a, b) => a.price - b.price);
    if (sort === "high-to-low") items = [...items].sort((a, b) => b.price - a.price);
    if (sort === "popular") items = [...items].sort((a, b) => Number(b.badge === "Best Seller") - Number(a.badge === "Best Seller"));

    return items;
  }, [selectedCategory, search, sort]);

  return (
    <>
      <style>{`
        .listing-shell { max-width: 1320px; margin: 0 auto; padding: 42px 20px 90px; }
        .page-header { display: flex; justify-content: space-between; align-items: end; gap: 18px; flex-wrap: wrap; margin-bottom: 28px; }
        .page-header h1 { font-size: clamp(2.7rem, 5vw, 4.5rem); }
        .page-header p { color: #735f67; }
        .toolbar { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; justify-content: space-between; margin: 28px 0 32px; }
        .filter-row { display: flex; flex-wrap: wrap; gap: 12px; }
        .chip { border: 1px solid #f0dfe7; background: white; border-radius: 999px; padding: 10px 16px; font-size: 11px; letter-spacing: 1.6px; text-transform: uppercase; cursor: pointer; }
        .chip.active { background: #1f1b1c; color: white; border-color: #1f1b1c; }
        .search-box { display: flex; align-items: center; gap: 10px; background: white; border: 1px solid #f0dfe7; border-radius: 999px; padding: 10px 16px; min-width: min(380px, 90vw); }
        .search-box input { border: none; outline: none; background: transparent; width: 100%; font: inherit; }
        .sort-select { border: 1px solid #f0dfe7; background: white; border-radius: 999px; padding: 10px 16px; font: inherit; }
        .product-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 26px; }
        .empty-state { background: white; border: 1px solid #f2dee8; border-radius: 24px; padding: 40px; text-align: center; }
        @media (max-width: 900px) { .product-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 620px) { .product-grid { grid-template-columns: 1fr; } .toolbar { align-items: flex-start; flex-direction: column; } }
      `}</style>

      <div className="listing-shell">
        <div className="page-header">
          <div>
            <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "#b76a86" }}>Aarohi Style</div>
            <h1>Jewellery for every vibe</h1>
          </div>
          <p>Handpicked pieces for festive sparkle, daily glam, and gifting moments.</p>
        </div>

        <div className="toolbar">
          <div className="filter-row">
            {categories.map((category) => (
              <button key={category} className={`chip ${selectedCategory === category ? "active" : ""}`} onClick={() => setSelectedCategory(category)}>
                {category}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <div className="search-box">
              <Search size={16} color="#7c5d66" />
              <input aria-label="Search jewellery" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search jewellery" />
            </div>
            <select className="sort-select" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="featured">Featured</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>

        {filteredProducts.length ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <Link key={product.slug} href={`/product/${product.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <article style={{ background: "#fff", border: "1px solid #f4e4eb", borderRadius: 20, overflow: "hidden", boxShadow: "0 18px 30px rgba(74,44,52,0.06)" }}>
                  <div style={{ position: "relative" }}>
                    <img src={product.image} alt={product.name} style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }} />
                    <span style={{ position: "absolute", top: 15, left: 15, background: "rgba(26,16,21,0.8)", color: "#f4dca6", padding: "7px 10px", borderRadius: 999, fontSize: 9, letterSpacing: 2, textTransform: "uppercase" }}>{product.badge}</span>
                  </div>
                  <div style={{ padding: 18 }}>
                    <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.1rem", marginBottom: 8 }}>{product.name}</div>
                    <div style={{ color: "#8b6c7a", fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>{product.category}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 14 }}>
                      <span style={{ fontWeight: 700 }}>₹{product.price.toLocaleString("en-IN")}</span>
                      <span style={{ color: "#9a8a90", textDecoration: "line-through", fontSize: 13 }}>₹{product.originalPrice.toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.5rem", marginBottom: 12 }}>No matching pieces found</h3>
            <p style={{ color: "#6f5863" }}>Try a different category or search term for a new statement look.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ListingPage;


































































