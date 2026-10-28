import TitleSection from "../common/TitleSection";
import ImageCard from "../common/ImageCard";

const categoriesData = [
  { id: 1, title: "Rings", imgUrl: "https://images.unsplash.com/photo-1601821765780-3b0a7a6f4f1d?auto=format&fit=crop&w=500&q=80", link: "/listing?category=Rings" },
  { id: 2, title: "Earrings", imgUrl: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=500&q=80", link: "/listing?category=Earrings" },
  { id: 3, title: "Necklaces", imgUrl: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=500&q=80", link: "/listing?category=Necklaces" },
  { id: 4, title: "Bracelets", imgUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80", link: "/listing?category=Bracelets" },
  { id: 5, title: "Bangles", imgUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80", link: "/listing?category=Bangles" },
  { id: 6, title: "Pendants", imgUrl: "https://images.unsplash.com/photo-1601821765780-3b0a7a6f4f1d?auto=format&fit=crop&w=500&q=80", link: "/listing?category=Pendants" },
];

const Categories = () => (
  <>
    <style>{`
      .cat-section { background: #fffaf6; padding: 32px 0 70px; }
      .cat-grid { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 22px; align-items: center; }
      @media (max-width: 900px) { .cat-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
      @media (max-width: 560px) { .cat-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    `}</style>

    <section className="cat-section">
      <TitleSection title="Discover Your <em>Favorites</em>" subtitle="Shop by category" width="1320px">
        <div className="cat-grid">
          {categoriesData.map((item) => (
            <ImageCard key={item.id} title={item.title} imgUrl={item.imgUrl} link={item.link} />
          ))}
        </div>
      </TitleSection>
    </section>
  </>
);

export default Categories;
