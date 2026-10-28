"use client";

import { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
  const [tab, setTab] = useState<"login" | "signup">("login");

  return (
    <>
      <style>{`
        .auth-shell { max-width: 1100px; margin: 0 auto; padding: 48px 20px 100px; }
        .auth-box { display: grid; grid-template-columns: 1fr 1fr; background: #fff; border: 1px solid #f2dee8; border-radius: 28px; overflow: hidden; }
        .promo { background: linear-gradient(135deg, #251a1d, #3b2a2e); color: white; padding: 44px 34px; }
        .promo h2 { font-size: clamp(2.4rem, 5vw, 4.2rem); line-height: 0.95; }
        .promo p { color: #f3dfe5; line-height: 1.7; margin-top: 20px; }
        .promo-list { display: grid; gap: 10px; margin-top: 20px; }
        .promo-list span { display: inline-flex; align-items: center; gap: 8px; }
        .form-panel { padding: 36px 28px; }
        .tabs { display: flex; gap: 10px; margin-bottom: 22px; }
        .tab-btn { flex: 1; border: 1px solid #f0dfe7; background: white; border-radius: 999px; padding: 12px 14px; text-transform: uppercase; letter-spacing: 1.8px; font-size: 11px; }
        .tab-btn.active { background: #1f1b1c; color: white; }
        .field { display: flex; flex-direction: column; gap: 8px; margin-bottom: 18px; }
        .field input { border: 1px solid #f0dfe7; border-radius: 12px; padding: 14px 16px; font: inherit; }
        .submit { width: 100%; border: none; border-radius: 999px; background: #1f1b1c; color: white; padding: 16px; letter-spacing: 2px; text-transform: uppercase; }
        .subtext { color: #735f67; margin-top: 18px; text-align: center; }
        @media (max-width: 820px) { .auth-box { grid-template-columns: 1fr; } }
      `}</style>

      <div className="auth-shell">
        <div className="auth-box">
          <div className="promo">
            <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "#f1d9a5" }}>Welcome</div>
            <h2>Style your story with Aarohi.</h2>
            <p>Unlock special offers, save your wishlist, and enjoy effortless checkout with your personal jewellery account.</p>
            <div className="promo-list">
              <span>✓ Save favourite pieces</span>
              <span>✓ Fast checkout</span>
              <span>✓ Early access to new drops</span>
            </div>
          </div>

          <div className="form-panel">
            <div className="tabs">
              <button className={`tab-btn ${tab === "login" ? "active" : ""}`} onClick={() => setTab("login")}>Login</button>
              <button className={`tab-btn ${tab === "signup" ? "active" : ""}`} onClick={() => setTab("signup")}>Sign up</button>
            </div>

            {tab === "login" ? (
              <>
                <div className="field">
                  <label>Email or phone</label>
                  <input type="text" placeholder="you@example.com" />
                </div>
                <div className="field">
                  <label>Password</label>
                  <input type="password" placeholder="Enter password" />
                </div>
                <button className="submit">Login</button>
              </>
            ) : (
              <>
                <div className="field">
                  <label>Full name</label>
                  <input type="text" placeholder="Your full name" />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input type="email" placeholder="you@example.com" />
                </div>
                <div className="field">
                  <label>Password</label>
                  <input type="password" placeholder="Create a password" />
                </div>
                <button className="submit">Create account</button>
              </>
            )}

            <div className="subtext">
              By continuing, you agree to our <Link href="/about" style={{ color: "#b76a86", textDecoration: "none" }}>terms</Link> and privacy policy.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;





















