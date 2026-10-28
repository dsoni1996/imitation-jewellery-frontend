"use client";

import Link from "next/link";

const ImageCard = ({ title, imgUrl, link = "/listing" }) => {
  return (
    <Link href={link} style={{ textDecoration: "none", color: "inherit" }}>
      <style>{`
        .ic-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          width: 100%;
          transition: transform 0.25s ease;
        }
        .ic-wrap:hover { transform: translateY(-3px); }
        .ic-ring {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--border);
          box-shadow: 0 10px 22px var(--shadow);
          background: #fff;
        }
        .ic-ring img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .ic-title {
          font-size: 12px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--dark);
          text-align: center;
        }
        .ic-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--rose-deep);
        }
      `}</style>

      <div className="ic-wrap">
        <div className="ic-ring">
          <img src={imgUrl} alt={title} />
        </div>
        {title && <div className="ic-title">{title}</div>}
        <div className="ic-dot" />
      </div>
    </Link>
  );
};

export default ImageCard;
