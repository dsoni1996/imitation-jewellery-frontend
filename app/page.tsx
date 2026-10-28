const ContactPage = () => (
  <>
    <style>{`
      .contact-shell { max-width: 1180px; margin: 0 auto; padding: 42px 20px 100px; }
      .card { background: white; border: 1px solid #f2dee8; border-radius: 20px; padding: 28px; }
      .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
      input, textarea { width: 100%; border: 1px solid #eed9e1; border-radius: 12px; padding: 14px 16px; font: inherit; }
      textarea { min-height: 160px; resize: vertical; }
      button { background: #1f1b1c; color: white; border: none; border-radius: 999px; padding: 16px 20px; letter-spacing: 1.8px; text-transform: uppercase; }
      @media (max-width: 800px) { .form-grid { grid-template-columns: 1fr; } }
    `}</style>

    <div className="contact-shell">
      <div className="card">
        <div style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#b76a86' }}>Contact us</div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', marginBottom: 20 }}>We would love to hear from you.</h1>

        <div className="form-grid">
          <div>
            <input placeholder="Your name" />
          </div>
          <div>
            <input placeholder="Your email" />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <input placeholder="Subject" />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <textarea placeholder="Tell us about your query" />
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <button>Send message</button>
        </div>
      </div>
    </div>
  </>
);

export default ContactPage;
