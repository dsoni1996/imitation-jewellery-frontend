import Link from "next/link";

const NewsletterBanner = () => (
  <>
    <style>{`
      .news-section { padding: 80px 20px 100px; }
      .news-box {
        max-width: 1100px; margin: 0 auto; background: linear-gradient(135deg, #f8e9ee, #fffaf6); border: 1px solid #f1dfe7; border-radius: 28px; display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 36px 32px;
      }
      .news-title { font-size: clamp(2.3rem, 4vw, 4rem); line-height: 1; }
      .news-title em { color: var(--rose-deep); font-style: italic; }
      .news-form { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
      .news-form input {
        min-width: min(360px, 62vw); padding: 16px 18px; border-radius: 999px; border: 1px solid #e9d3db; background: #fff; color: var(--dark);
      }
      .news-form button {
        background: var(--dark); color: #fff; border: none; padding: 16px 22px; border-radius: 999px; letter-spacing: 1.6px; text-transform: uppercase; font-size: 11px;
      }
      @media (max-width: 820px) { .news-box { flex-direction: column; align-items: flex-start; } }
    `}</style>

    <section className="news-section">
      <div className="news-box">
        <div>
          <div style={{ letterSpacing: "3px", fontSize: "11px", textTransform: "uppercase", color: "var(--rose-deep)" }}>Styling updates</div>
          <h3 className="news-title">Get <em>exclusive</em> deals</h3>
        </div>
        <div className="news-form">
          <input type="email" placeholder="Enter your email" />
          <button>Join now</button>
        </div>
      </div>
    </section>
  </>
);

export default NewsletterBanner;
