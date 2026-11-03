import { jewelleryProducts as demoProducts } from "./jewelleryData";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");
const CATEGORY_TO_API = {
  Rings: "Ring",
  Earrings: "Earring",
  Necklaces: "Necklace",
  Bangles: "Bangle",
  Bracelets: "Bracelet",
  Pendants: "Pendant",
  Chains: "Chain",
};

function normalizeProduct(product) {
  const image = product.thumbnail || product.images?.[0] || "";
  const category = product.category || "Jewellery";
  return {
    ...product,
    id: product._id || product.id,
    slug: product.slug,
    name: product.name,
    category,
    price: Number(product.price?.current ?? product.price ?? 0),
    originalPrice: Number(product.price?.original ?? product.originalPrice ?? product.price?.current ?? product.price ?? 0),
    image,
    gallery: product.images?.length ? product.images : image ? [image] : [],
    material: product.metal?.finish || product.material || product.materialType || "Imitation jewellery",
    colors: product.variants?.colors || product.colors || [],
    badge: product.badge || (product.isBestSeller ? "Bestseller" : product.isNewArrival ? "New Arrival" : product.isFeatured ? "Featured" : "Aarohi Edit"),
  };
}

async function request(path) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { Accept: "application/json" },
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`Jewellery API request failed (${response.status})`);
  return response.json();
}

function demoFilter({ category, search, sort, limit }) {
  const query = (search || "").trim().toLowerCase();
  let products = [...demoProducts].filter((product) => {
    const categoryMatch = !category || category === "All" || product.category.toLowerCase() === category.toLowerCase() || (category === "Gift Sets" && product.category === "Sets");
    const searchMatch = !query || [product.name, product.category, product.material, product.description].join(" ").toLowerCase().includes(query);
    return categoryMatch && searchMatch;
  });
  if (sort === "low-to-high" || sort === "price_asc") products.sort((a, b) => a.price - b.price);
  if (sort === "high-to-low" || sort === "price_desc") products.sort((a, b) => b.price - a.price);
  if (sort === "popular" || sort === "rating") products.sort((a, b) => Number(b.badge === "Best Seller") - Number(a.badge === "Best Seller"));
  if (limit) products = products.slice(0, Number(limit));
  return products;
}

export const api = {
  isConfigured: Boolean(API_BASE_URL),

  async getProducts({ category, search, sort, limit = 24, page = 1 } = {}) {
    if (!API_BASE_URL) {
      const products = demoFilter({ category, search, sort, limit });
      return { products, total: products.length, source: "demo" };
    }

    const params = new URLSearchParams({ limit: String(limit), page: String(page), inStock: "true", metal: "Other" });
    if (category && category !== "All") params.set("category", CATEGORY_TO_API[category] || category);
    if (search?.trim()) params.set("search", search.trim());
    if (sort === "low-to-high") params.set("sort", "price_asc");
    else if (sort === "high-to-low") params.set("sort", "price_desc");
    else if (sort === "popular") params.set("sort", "rating");

    const data = await request(`/products?${params.toString()}`);
    return { ...data, products: (data.products || []).map(normalizeProduct), source: "backend" };
  },

  async getProductBySlug(slug) {
    if (!API_BASE_URL) {
      const product = demoProducts.find((item) => item.slug === slug);
      if (!product) throw new Error("Product not found");
      return { product, source: "demo" };
    }
    const data = await request(`/products/${encodeURIComponent(slug)}`);
    if (!data.product) throw new Error("Product not found");
    return { ...data, product: normalizeProduct(data.product), source: "backend" };
  },

  async getFeaturedProducts(limit = 4) {
    if (!API_BASE_URL) return demoFilter({ limit });
    const { products } = await this.getProducts({ limit, sort: "popular" });
    return products;
  },
};

export default api;
