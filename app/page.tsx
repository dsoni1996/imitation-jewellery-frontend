"use client";

import { useEffect, useState } from "react";
import HeroCarousel from "../components/home/HeroCarousel";
import Collection from "../components/home/Collection";
import Categories from "../components/home/Categories";
import TrendingJewellerys from "../components/home/TrendingJewellerys";
import NewArrival from "../components/home/NewArrival";
import NewsletterBanner from "../components/home/NewsletterBanner";

const SECTION_MAP = {
  hero_carousel: HeroCarousel,
  collection_grid: Collection,
  categories: Categories,
  trending: TrendingJewellerys,
  new_arrivals: NewArrival,
  newsletter: NewsletterBanner,
};

const defaultSections = [
  { id: "hero", type: "hero_carousel", settings: {}, products: [] },
  { id: "collections", type: "collection_grid", settings: {}, products: [] },
  { id: "categories", type: "categories", settings: {}, products: [] },
  { id: "trending", type: "trending", settings: {}, products: [] },
  { id: "new_arrivals", type: "new_arrivals", settings: {}, products: [] },
  { id: "newsletter", type: "newsletter", settings: {}, products: [] },
];

export default function Home() {
  const [sections, setSections] = useState<any[] | null>(null);

  useEffect(() => {
    setSections(defaultSections);
  }, []);

  if (!sections) {
    return <div style={{ minHeight: "60vh", background: "#fffaf6" }} />;
  }

  return (
    <>
      {sections.map((section) => {
        const type = section.type as keyof typeof SECTION_MAP;
        const Component = SECTION_MAP[type];
        if (!Component) return null;
        return (
          <Component
            key={section.id}
            settings={section.settings || {}}
            products={section.products || []}
          />
        );
      })}
    </>
  );
}
