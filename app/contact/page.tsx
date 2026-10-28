const AboutPage = () => (
  <>
    <style>{`
      .about-shell { max-width: 1180px; margin: 0 auto; padding: 42px 20px 100px; }
      .hero { background: linear-gradient(135deg, #f9eef2, #fffaf6); border: 1px solid #f2dee8; border-radius: 28px; padding: 40px 32px; }
      .sections { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; margin-top: 26px; }
      .box { background: white; border: 1px solid #f2dee8; border-radius: 20px; padding: 24px; }
      @media (max-width: 800px) { .sections { grid-template-columns: 1fr; } }
    `}</style>

    <div className="about-shell">
      <div className="hero">
        <div style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#b76a86' }}>Our story</div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.9rem, 5vw, 5rem)', marginTop: 12 }}>Aarohi Style brings affordable glamour to every moment.</h1>
        <p style={{ marginTop: 18, color: '#674f5b', maxWidth: 750, lineHeight: 1.8 }}>
          We design imitation jewellery that feels premium, graceful, and expressive — so you can shine for festive occasions, gifting moments, and everyday styling without compromising on comfort.
        </p>
      </div>

      <div className="sections">
        <div className="box">
          <h3 style={{ fontFamily: 'Cormorand Garamond, serif', fontSize: '2.4rem' }}>Our promise</h3>
          <p style={{ color: '#6a4c57', lineHeight: 1.8, marginTop: 12 }}>
            Thoughtful craftsmanship, skin-friendly finishes, and trend-led designs that fit modern Indian and global wardrobes.
          </p>
        </div>
        <div className="box">
          <h3 style={{ fontFamily: 'Cormorand Garamond, serif', fontSize: '2.4rem' }}>Why customers love us</h3>
          <p style={{ color: '#6a4c57', lineHeight: 1.8, marginTop: 12 }}>
            Lightweight styles, elegant finishes, easy gifting, and high-fashion aesthetics at accessible pricing.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default AboutPage;
