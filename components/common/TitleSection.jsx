const TitleSection = ({ title, subtitle, children, width = "1320px" }) => {
  return (
    <div style={{ maxWidth: width, margin: "0 auto", padding: "0 20px" }}>
      <style>{`
        .ts-section { text-align: center; margin: 64px 0 32px; }
        .ts-subtitle {
          display: inline-block;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--rose-deep);
          margin-bottom: 10px;
          font-weight: 500;
        }
        .ts-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.3rem, 4vw, 4rem);
          line-height: 1.1;
          color: var(--dark);
          margin: 0;
        }
        .ts-title em {
          font-style: italic;
          color: var(--rose-deep);
        }
        .ts-ornament {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 16px;
        }
        .ts-line {
          height: 1px;
          width: 60px;
          background: linear-gradient(90deg, transparent, var(--gold));
        }
        .ts-line.right { background: linear-gradient(90deg, var(--gold), transparent); }
        .ts-diamond {
          width: 8px;
          height: 8px;
          background: var(--rose-deep);
          transform: rotate(45deg);
          border-radius: 2px;
        }
      `}</style>

      <div className="ts-section">
        {subtitle && <span className="ts-subtitle">{subtitle}</span>}
        <h2 className="ts-title" dangerouslySetInnerHTML={{ __html: title }} />
        <div className="ts-ornament">
          <span className="ts-line" />
          <span className="ts-diamond" />
          <span className="ts-line right" />
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default TitleSection;
