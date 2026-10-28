import Link from "next/link";

const cartItems = [
  { name: "Pearl Drop Set", price: 1999, qty: 1, image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80" },
  { name: "Rose Gold Dots", price: 2499, qty: 1, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80" },
];

const CartPage = () => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <style>{`
        .cart-shell { max-width: 1320px; margin: 0 auto; padding: 40px 20px 100px; }
        .cart-grid { display: grid; grid-template-columns: 1.5fr 0.7fr; gap: 30px; }
        .items { display: grid; gap: 18px; }
        .item { display: flex; gap: 18px; background: #fff; border: 1px solid #f2dee8; border-radius: 18px; padding: 16px; }
        .item img { width: 120px; height: 120px; object-fit: cover; border-radius: 12px; }
        .summary { background: #fff; border: 1px solid #f2dee8; border-radius: 18px; padding: 22px; }
        .summary-row { display: flex; justify-content: space-between; margin: 14px 0; }
        .checkout { width: 100%; background: #1f1b1c; color: white; border: none; border-radius: 999px; padding: 16px; letter-spacing: 2px; text-transform: uppercase; margin-top: 18px; }
        @media (max-width: 920px) { .cart-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="cart-shell">
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#b76a86' }}>Your bag</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.7rem, 5vw, 4.2rem)' }}>Shopping cart</h1>
        </div>

        <div className="cart-grid">
          <div className="items">
            {cartItems.map((item) => (
              <div key={item.name} className="item">
                <img src={item.image} alt={item.name} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem' }}>{item.name}</div>
                  <div style={{ color: '#7a5e6a', marginTop: 6 }}>Qty: {item.qty}</div>
                  <div style={{ marginTop: 12, fontWeight: 700 }}>₹{item.price.toLocaleString('en-IN')}</div>
                </div>
                <button style={{ border: '1px solid #f0dfe7', background: 'white', borderRadius: 999, padding: '8px 12px' }}>Remove</button>
              </div>
            ))}
          </div>

          <aside className="summary">
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.6rem', marginBottom: 18 }}>Order summary</h3>
            <div className="summary-row"><span>Subtotal</span><span>₹{subtotal.toLocaleString('en-IN')}</span></div>
            <div className="summary-row"><span>Shipping</span><span>Free</span></div>
            <div className="summary-row"><span>Discount</span><span>₹0</span></div>
            <div className="summary-row" style={{ fontWeight: 700, fontSize: 18 }}><span>Total</span><span>₹{subtotal.toLocaleString('en-IN')}</span></div>
            <button className="checkout">Proceed to checkout</button>
          </aside>
        </div>
      </div>
    </>
  );
};

export default CartPage;
