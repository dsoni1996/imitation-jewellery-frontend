"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import Link from "next/link";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1400&q=80",
    eyebrow: "Festive Edit",
    title: "Glow in",
    titleEm: "Every Shade",
    subtitle: "Layered imitation jewellery styling for work, weddings, and special nights out.",
    ctaLabel: "Shop Collection",
    ctaHref: "/listing",
  },
  {
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=80",
    eyebrow: "Trending Now",
    title: "Statement",
    titleEm: "Pieces",
    subtitle: "Bold earrings, elegant necklaces, and chic stackables built for everyday glam.",
    ctaLabel: "Explore Looks",
    ctaHref: "/listing?tag=trending",
  },
  {
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80",
    eyebrow: "Gift Ready",
    title: "Lovely",
    titleEm: "For Her",
    subtitle: "Beautiful jewellery gifts that feel premium, personal, and memorable.",
    ctaLabel: "Browse Gifts",
    ctaHref: "/listing?category=Gift",
  },
];

const HeroCarousel = () => (
  <>
    <style>{`
      .hero-root { position: relative; background: #1a1015; }
      .hero-root .swiper { width: 100%; }
      .hero-slide { position: relative; overflow: hidden; }
      .hero-slide img { width: 100%; height: min(80vh, 760px); object-fit: cover; filter: brightness(0.8); }
      .hero-overlay {
        position: absolute; inset: 0; display: flex; align-items: center; background: linear-gradient(90deg, rgba(26,16,21,0.72), rgba(26,16,21,0.26));
      }
      .hero-content { max-width: 600px; padding: 0 80px; }
      .hero-tag {
        display: inline-flex; align-items: center; gap: 10px; color: #f1d9a5; font-size: 10px; letter-spacing: 3.5px; text-transform: uppercase; margin-bottom: 18px;
      }
      .hero-tag::before {
        content: ""; display: block; width: 28px; height: 1px; background: #f1d9a5;
      }
      .hero-title {
        font-family: 'Cormorant Garamond', serif; font-size: clamp(3rem, 6vw, 6rem); line-height: 0.95; color: #fffaf6; margin: 0 0 18px;
      }
      .hero-title em { color: #efc277; font-style: italic; }
      .hero-sub { color: #efdfe2; max-width: 460px; line-height: 1.7; font-size: 15px; }
      .hero-cta {
        display: inline-flex; align-items: center; justify-content: center; margin-top: 26px; border: 1px solid #efc277; padding: 14px 24px; color: #efc277; letter-spacing: 2px; text-transform: uppercase; font-size: 11px;
      }
      .hero-cta:hover { background: #efc277; color: #1a1015; }
      .hero-root .swiper-pagination-bullet { background: rgba(255,255,255,0.4); opacity: 1; }
      .hero-root .swiper-pagination-bullet-active { background: #efc277; width: 28px; border-radius: 999px; }
      @media (max-width: 700px) {
        .hero-content { padding: 0 24px; }
      }
    `}</style>

    <div className="hero-root">
      <Swiper modules={[Pagination, Autoplay, EffectFade]} effect="fade" autoplay={{ delay: 4000, disableOnInteraction: false }} pagination={{ clickable: true }} loop>
        {slides.map((slide) => (
          <SwiperSlide key={slide.eyebrow}>
            <div className="hero-slide">
              <img src={slide.img} alt={slide.title} />
              <div className="hero-overlay">
                <div className="hero-content">
                  <div className="hero-tag">{slide.eyebrow}</div>
                  <h1 className="hero-title">
                    {slide.title} <br /> <em>{slide.titleEm}</em>
                  </h1>
                  <p className="hero-sub">{slide.subtitle}</p>
                  <Link href={slide.ctaHref} className="hero-cta">{slide.ctaLabel}</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </>
);

export default HeroCarousel;
