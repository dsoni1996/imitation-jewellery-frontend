"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Heart, Search, SlidersHorizontal } from "lucide-react";
import api from "@/lib/api";

const categories = ["All", "Rings", "Earrings", "Necklaces", "Bangles", "Pendants", "Sets", "Headwear"];

export default function ListingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category && categories.some((item) => item.toLowerCase() === category.toLowerCase())) {
      setSelectedCategory(categories.find((item) => item.toLowerCase() === category.toLowerCase()) || "All");
    }
    setSearch(params.get("search") || "");
  }, []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError("");
    api.getProducts({ category: selectedCategory, search, sort, limit: 48 })
      .then(({ products: result }) => { if (!cancelled) setProducts(result); })
      .catch(() => { if (!cancelled) setError("We couldn't load the collection. Please try again in a moment."); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [selectedCategory, search, sort]);

  const filteredProducts = useMemo(() => {
    // Demo mode filters locally, while the connected backend filters the request.
    if (api.isConfigured) return products;
    let result = [...products];
    if (sort === "low") result.sort((a, b) => a.price - b.price);
    if (sort === "high") result.sort((a, b) => b.price - a.price);
    if (sort === "popular") result.sort((a, b) => Number(b.badge === "Best Seller") - Number(a.badge === "Best Seller"));
    return result;
  }, [products, sort]);

  const displayed = api.isConfigured ? filteredProducts : filteredProducts.filter((product) => {
    const query = search.trim().toLowerCase();
    const categoryMatch = selectedCategory === "All" || product.category.toLowerCase() === selectedCategory.toLowerCase() || (selectedCategory === "Sets" && product.category === "Sets");
    return categoryMatch && (!query || [product.name, product.category, product.material, product.description].join(" ").toLowerCase().includes(query));
  });

  return (
    <div className="shop-shell">
      <header className="shop-intro"><span className="eyebrow">AAROHI STYLE · IMITATION JEWELLERY</span><h1>Find your <em>everyday sparkle.</em></h1><p>Thoughtful finishing touches for everyday plans and special occasions.</p></header>
      <div className="shop-toolbar">
        <div className="category-filters" aria-label="Filter by category">{categories.map((category) => <button key={category} className={selectedCategory === category ? "filter-chip active" : "filter-chip"} onClick={() => setSelectedCategory(category)}>{category}</button>)}</div>
        <div className="shop-controls"><label className="search-control"><Search size={16} /><input aria-label="Search jewellery" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search jewellery" /></label><label className="sort-control"><SlidersHorizontal size={15} /><select aria-label="Sort products" value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">Featured</option><option value="popular">Most loved</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></label></div>
      </div>
      <div className="results-line">{loading ? "Loading the collection…" : `${displayed.length} ${displayed.length === 1 ? "piece" : "pieces"} to love`}</div>
      {error ? <div className="no-results"><h2>Collection unavailable</h2><p>{error}</p><button className="reset-button" onClick={() => setSelectedCategory("All")}>Try again</button></div> : loading ? <div className="loading-grid" aria-label="Loading products">{Array.from({ length: 4 }, (_, index) => <div className="skeleton" key={index} />)}</div> : displayed.length ? <div className="catalog-grid">{displayed.map((product) => <Link className="catalog-card" href={`/product/${product.slug}`} key={product.slug}><div className="catalog-image"><img src={product.image} alt={product.name} loading="lazy" /><span className="catalog-badge">{product.badge}</span><span className="catalog-heart" aria-hidden="true"><Heart size={17} /></span></div><div className="catalog-info"><span>{product.category}</span><h2>{product.name}</h2><div className="catalog-price"><strong>₹{product.price.toLocaleString("en-IN")}</strong><del>₹{product.originalPrice.toLocaleString("en-IN")}</del></div></div></Link>)}</div> : <div className="no-results"><h2>No pieces found just yet.</h2><p>Try another search or choose a different category.</p><button className="reset-button" onClick={() => { setSelectedCategory("All"); setSearch(""); }}>Show all jewellery</button></div>}
      <style jsx>{`
        .shop-shell{max-width:1320px;margin:auto;padding:62px 26px 90px}.shop-intro{text-align:center;padding:12px 0 34px}.eyebrow{font-size:10px;letter-spacing:2px;color:#986554}.shop-intro h1{font-size:clamp(3rem,6vw,5rem);line-height:1;margin:13px 0}.shop-intro h1 em{color:#986554}.shop-intro p{color:#756b65;font-size:13px}.shop-toolbar{display:grid;gap:18px;border-top:1px solid #e9dfd4;border-bottom:1px solid #e9dfd4;padding:18px 0}.category-filters{display:flex;gap:8px;flex-wrap:wrap}.filter-chip{background:#fff;border:1px solid #e9dfd4;color:#514740;border-radius:999px;padding:9px 14px;font-size:10px;letter-spacing:.8px;cursor:pointer}.filter-chip.active{background:#342a24;border-color:#342a24;color:#fff}.shop-controls{display:flex;justify-content:space-between;gap:12px}.search-control,.sort-control{display:flex;align-items:center;gap:9px;background:#fff;border:1px solid #e9dfd4;padding:10px 13px;color:#806c5d}.search-control{flex:1;max-width:380px}.search-control input,.sort-control select{min-width:0;width:100%;border:0;outline:0;background:transparent;color:#342a24;font:inherit;font-size:12px}.sort-control select{cursor:pointer}.results-line{font-size:11px;color:#756b65;margin:22px 0 15px}.catalog-grid,.loading-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:22px}.catalog-card{min-width:0}.catalog-image{position:relative;overflow:hidden;background:#eee3d7;aspect-ratio:.78}.catalog-image img{width:100%;height:100%;object-fit:cover;transition:transform .45s}.catalog-card:hover .catalog-image img{transform:scale(1.04)}.catalog-badge{position:absolute;top:12px;left:12px;background:#fbf8f4;padding:7px 9px;font-size:9px;letter-spacing:1px;text-transform:uppercase}.catalog-heart{position:absolute;top:10px;right:10px;background:rgba(251,248,244,.9);width:34px;height:34px;border-radius:50%;display:grid;place-items:center}.catalog-info{padding:12px 0}.catalog-info>span{font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:#986554}.catalog-info h2{font-size:1.8rem;line-height:1.1;margin:5px 0 8px}.catalog-price{display:flex;align-items:center;gap:10px;font-size:13px}.catalog-price del{font-size:11px;color:#95877e}.no-results{text-align:center;background:#fff;border:1px solid #e9dfd4;padding:48px 20px;margin-top:12px}.no-results h2{font-size:2.4rem}.no-results p{color:#756b65}.reset-button{background:#342a24;border:0;color:#fff;padding:13px 17px;font-size:10px;letter-spacing:1px;text-transform:uppercase;cursor:pointer}.skeleton{aspect-ratio:.78;background:linear-gradient(90deg,#f1e9df 25%,#e8ddd2 50%,#f1e9df 75%);background-size:200% 100%;animation:shimmer 1.2s infinite}@keyframes shimmer{to{background-position:-200% 0}}
        @media(max-width:950px){.catalog-grid,.loading-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:650px){.shop-shell{padding:42px 16px 70px}.shop-intro{padding-bottom:22px}.shop-toolbar{padding:14px 0}.category-filters{flex-wrap:nowrap;overflow-x:auto;padding-bottom:4px}.filter-chip{flex:none}.shop-controls{flex-direction:column}.search-control{max-width:none}.catalog-grid,.loading-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:13px}.catalog-info h2{font-size:1.5rem}.catalog-image{aspect-ratio:.75}.catalog-badge{font-size:8px;top:8px;left:8px}.catalog-heart{width:30px;height:30px;top:7px;right:7px}}
      `}</style>
    </div>
  );
}
