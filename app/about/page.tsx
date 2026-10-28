import Link from "next/link";

const wishlistItems = [
  { name: "Moonlit Bangle Set", price: 2199, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80" },
  { name: "Lotus Pendant", price: 1299, image: "https://images.unsplash.com/photo-1601821765780-3b0a7a6f4f1d?auto=format&fit=crop&w=900&q=80" },
  { name: "Crystal Layer Set", price: 1799, image: "https://images.unsplash.com/photo-1601821765780-3b0a7a6f4f1d?auto=format&fit=crop&w=900&q=80" },
];

const WishlistPage = () => (
  <>
    <style>{`
      .wishlist-shell { max-width: 1320px; margin: 0 auto; padding: 40px 20px 100px; }
      .grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; }
      .card { background: white; border: 1px solid #f2dee8; border-radius: 20px; overflow: hidden; }
      .card img { width: 100%; height: 320px; object-fit: cover; display: block; }
      .card-body { padding: 18px; }
      @media (max-width: 900px) { .grid { grid-template-columns: 1fr 1fr; } }
      @media (max-width: 620px) { .grid { grid-template-columns: 1fr; } }
    `}</style>

    <div className="wishlist-shell">
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#b76a86' }}>Saved items</div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.7rem, 5vw, 4.2rem)' }}>Your wishlist</h1>
      </div>

      <div className="grid">
        {wishlistItems.map((item) => (
          <div key={item.name} className="card">
            <img src={item.image} alt={item.name} />
            <div className="card-body">
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.1rem' }}>{item.name}</div>
              <div style={{ marginTop: 10, fontWeight: 700 }}>₹{item.price.toLocaleString('en-IN')}</div>
              <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
                <button style={{ flex: 1, background: '#1f1b1c', color: 'white', borderRadius: 999, padding: '12px 16px', border: 'none' }}>Add to bag</button>
                <button style={{ border: '1px solid #f0dfe7', borderRadius: 999, padding: '12px 16px', background: 'white' }}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default WishlistPage;
