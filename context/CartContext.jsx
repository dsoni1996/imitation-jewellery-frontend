"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEYS = { cart: "aarohi-cart", wishlist: "aarohi-wishlist", user: "aarohi-user" };
const CartContext = createContext(null);
const readStorage = (key, fallback) => {
  try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; }
  catch { return fallback; }
};

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCart(readStorage(STORAGE_KEYS.cart, []));
    setWishlist(readStorage(STORAGE_KEYS.wishlist, []));
    setUser(readStorage(STORAGE_KEYS.user, null));
    setHydrated(true);
  }, []);
  useEffect(() => { if (hydrated) localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart)); }, [cart, hydrated]);
  useEffect(() => { if (hydrated) localStorage.setItem(STORAGE_KEYS.wishlist, JSON.stringify(wishlist)); }, [wishlist, hydrated]);
  useEffect(() => { if (hydrated) { if (user) localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user)); else localStorage.removeItem(STORAGE_KEYS.user); } }, [user, hydrated]);

  const addToCart = (product) => setCart((current) => {
    const existing = current.find((item) => item.slug === product.slug);
    return existing ? current.map((item) => item.slug === product.slug ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }];
  });
  const removeFromCart = (slug) => setCart((current) => current.filter((item) => item.slug !== slug));
  const updateQty = (slug, quantity) => quantity < 1 ? removeFromCart(slug) : setCart((current) => current.map((item) => item.slug === slug ? { ...item, quantity } : item));
  const clearCart = () => setCart([]);
  const toggleWishlist = (product) => setWishlist((current) => current.some((item) => item.slug === product.slug) ? current.filter((item) => item.slug !== product.slug) : [...current, product]);
  const removeFromWishlist = (slug) => setWishlist((current) => current.filter((item) => item.slug !== slug));
  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0), [cart]);
  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return <CartContext.Provider value={{ cart, wishlist, cartCount, subtotal, addToCart, removeFromCart, updateQty, clearCart, toggleWishlist, removeFromWishlist, user, login, logout }}>{children}</CartContext.Provider>;
}

export function useCartStore() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCartStore must be used inside CartProvider");
  return context;
}
