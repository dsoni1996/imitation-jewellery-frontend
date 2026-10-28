"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEYS = {
  cart: "aarohi-cart",
  user: "aarohi-user",
};

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedCart = localStorage.getItem(STORAGE_KEYS.cart);
    const savedUser = localStorage.getItem(STORAGE_KEYS.user);

    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEYS.user);
    }
  }, [user]);

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.slug === product.slug);
      if (existing) {
        return current.map((item) =>
          item.slug === product.slug ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (slug) => {
    setCart((current) => current.filter((item) => item.slug !== slug));
  };

  const updateQty = (slug, qty) => {
    if (qty <= 0) return removeFromCart(slug);
    setCart((current) =>
      current.map((item) => (item.slug === slug ? { ...item, quantity: qty } : item))
    );
  };

  const clearCart = () => setCart([]);

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0),
    [cart]
  );

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        subtotal,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        user,
        login,
        logout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartStore() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCartStore must be used inside CartProvider");
  return context;
}
