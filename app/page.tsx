import Link from "next/link";
import { ArrowRight, BadgeCheck, Gift, Heart, Sparkles, Truck } from "lucide-react";
import { jewelleryProducts } from "@/lib/jewelleryData";

const categories = [
  { name: "Earrings", note: "A little drama, always", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=85" },
  { name: "Necklaces", note: "Made to be noticed", image: "https://images.unsplash.com/photo-1601821765780-3b0a7a6f4f1d?auto=format&fit=crop&w=800&q=85" },
  { name: "Rings", note: "Your everyday signature", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=85" },
  { name: "Bangles", note: "Stack on the sparkle", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=85" },
];

const highlights = [
  { icon: Sparkles, title: "Style without limits", text: "Statement looks that are easy to love and easier to wear." },
  { icon: Truck, title: "Free shipping over ₹2,500", text: "A little extra joy, delivered to your doorstep." },
  { icon: Gift, title: "Ready to gift", text: "Beautiful finishing touches for all of life's celebrations." },
];

export default function Home() {
  const featured = jewelleryProducts.slice(0, 4);
  return (
    <>
      <section className="home-hero">
        <div className="hero-photo" role="img" aria-label="Elegant imitation jewellery styling" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow"><span /> THE EVERYDAY OCCASION EDIT</span>
          <h1>Make a little<br /><em>moment sparkle.</em></h1>
          <p>Jewellery for the plans you make—and the ones that find you. Find your new favourite piece at Aarohi.</p>
          <Link className="button button-gold" href="/listing">Shop the collection <ArrowRight size={16} /></Link>
          <div className="hero-footnote">THOUGHTFULLY CHOSEN · MADE FOR YOUR MOMENTS</div>
        </div>
        <div className="hero-index">01 <span /> 04</div>
      </section>

      <div className="benefit-strip">
        <span><Sparkles size={15} /> New season, new sparkle</span><i />
        <span><Truck size={15} /> Free shipping over ₹2,500</span><i />
        <span><BadgeCheck size={15} /> Easy 7-day returns</span>
      </div>

      <section className="section-shell category-section">
        <div className="section-heading"><div><span className="eyebrow">FIND YOUR FINISH</span><h2>Shop by <em>category</em></h2></div><Link className="text-link" href="/listing">Explore all <ArrowRight size={15} /></Link></div>
        <div className="category-grid">
          {categories.map((category, index) => <Link className={`category-card category-card-${index + 1}`} href={`/listing?category=${encodeURIComponent(category.name)}`} key={category.name}>
            <img src={category.image} alt={category.name} /><span className="category-overlay" /><span className="category-copy"><small>{category.note}</small><strong>{category.name}</strong><span>DISCOVER <ArrowRight size={13} /></span></span>
          </Link>)}
        </div>
      </section>

      <section className="featured-section">
        <div className="section-shell">
          <div className="section-heading"><div><span className="eyebrow">THE PIECES EVERYONE LOVES</span><h2>Little things, <em>big feelings.</em></h2></div><Link className="text-link" href="/listing">Shop all jewellery <ArrowRight size={15} /></Link></div>
          <div className="home-product-grid">
            {featured.map((product) => <Link className="home-product-card" href={`/product/${product.slug}`} key={product.slug}>
              <div className="home-product-image"><img src={product.image} alt={product.name} /><span className="product-badge">{product.badge}</span><span className="quick-view">Discover piece <ArrowRight size={14} /></span></div>
              <div className="home-product-info"><div><span className="product-category">{product.category}</span><h3>{product.name}</h3></div><div className="product-price">₹{product.price.toLocaleString("en-IN")}<del>₹{product.originalPrice.toLocaleString("en-IN")}</del></div></div>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="editorial-image"><img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85" alt="A close-up of jewellery made for celebration" /></div>
        <div className="editorial-copy"><span className="eyebrow">THE AAROHI POINT OF VIEW</span><h2>Dress like<br />you <em>mean it.</em></h2><p>From a Tuesday coffee run to the wedding invite you have been saving, the right finishing touch changes everything. Find pieces that feel like you.</p><Link className="button button-dark" href="/listing">Find your next favourite <ArrowRight size={16} /></Link><span className="editorial-caption">A LITTLE EXTRA, EVERY DAY.</span></div>
      </section>

      <section className="section-shell promise-section"><span className="eyebrow">THE GOOD THINGS, BUILT IN</span><h2>More than a pretty <em>parcel.</em></h2><div className="promise-grid">{highlights.map(({ icon: Icon, title, text }) => <article key={title}><span className="promise-icon"><Icon size={20} /></span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="newsletter-cta"><span className="eyebrow">A NOTE FROM AAROHI</span><h2>Good things look good <em>on you.</em></h2><p>Explore thoughtful details, easy-to-love pieces, and a little sparkle for every plan.</p><Link className="button button-gold" href="/listing">Find your shine <Heart size={15} /></Link></section>
    </>
  );
}
