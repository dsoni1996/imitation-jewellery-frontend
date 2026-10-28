import { jewelleryProducts } from "./jewelleryData";

const sleep = (ms = 250) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  getProducts: async ({ category, search, sort } = {}) => {
    await sleep();

    let items = [...jewelleryProducts];

    if (category && category !== "All") {
      items = items.filter((item) => item.category === category || (category === "Gift Sets" && item.category === "Sets"));
    }

    if (search) {
      const q = search.toLowerCase();
      items = items.filter((item) => [item.name, item.category, item.material, item.description].join(" ").toLowerCase().includes(q));
    }

    if (sort === "low-to-high") items.sort((a, b) => a.price - b.price);
    if (sort === "high-to-low") items.sort((a, b) => b.price - a.price);
    if (sort === "popular") items.sort((a, b) => Number(b.badge === "Best Seller") - Number(a.badge === "Best Seller"));

    return { products: items, total: items.length };
  },

  getProductBySlug: async (slug) => {
    await sleep();
    const product = jewelleryProducts.find((item) => item.slug === slug);
    if (!product) throw new Error("Product not found");
    return { product };
  },

  login: async ({ email, password }) => {
    await sleep();
    if (!email || !password) throw new Error("Email and password are required");
    return {
      token: "demo-token-123",
      user: { name: email.split("@")[0], email },
    };
  },

  signup: async ({ name, email, password }) => {
    await sleep();
    if (!name || !email || !password) throw new Error("All fields are required");
    return {
      token: "demo-token-456",
      user: { name, email },
    };
  },

  getCart: async () => ({
    items: jewelleryProducts.slice(0, 2).map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
    })),
    subtotal: 4498,
    shipping: 0,
  }),

  placeOrder: async (payload) => {
    await sleep();
    return {
      success: true,
      orderId: "AO-" + Math.floor(Math.random() * 90000 + 10000),
      payload,
    };
  },
};

export default api;





















