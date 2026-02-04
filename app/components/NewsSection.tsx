
"use client";

import React, { useRef } from "react";

type NewsItem = {
  file: string;
  title: string;
  subtitle?: string;
  image?: string;
};

interface NewsSectionProps {
  news: NewsItem[];
}

const NewsSection = ({ news }: NewsSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 320; // px, adjust as needed
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="news" className="py-20 px-4" style={{ backgroundColor: '#f3f3f3', minHeight: 'calc(100vh - 64px)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow p-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1B2845' }}>
              Actualités
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Retrouvez ici les dernières actualités de la Maison de Santé. Cliquez sur un document pour le consulter.
            </p>
          </div>
          <div className="relative">
            <button
              aria-label="Précédent"
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full shadow p-2 hover:bg-gray-100 transition"
              style={{ display: 'block' }}
            >
              <span style={{ fontSize: 24 }}>&#8592;</span>
            </button>
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto py-2 px-8 no-scrollbar"
              style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
            >
              {news.map((item, idx) => (
                <a
                  key={item.title}
                  href={`/pdf/${item.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-start bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition cursor-pointer border border-gray-200 min-w-[220px] max-w-[240px] w-full"
                  style={{ flex: '0 0 220px' }}
                >
                  {item.image ? (
                    <img
                      src={`/pdf/${item.image}`}
                      alt={item.title}
                      className="w-16 h-16 mb-4 self-center object-contain"
                    />
                  ) : (
                    <span className="text-6xl mb-4 self-center" role="img" aria-label="pdf">📄</span>
                  )}
                  <span className="text-lg font-semibold mb-2 text-left w-full" style={{ color: '#1B2845' }}>{item.title}</span>
                  {item.subtitle && (
                    <span className="text-sm mb-2 text-left w-full" style={{ color: '#09a2d8' }}>{item.subtitle}</span>
                  )}
                  <span className="text-sm text-gray-500 text-left w-full">PDF</span>
                </a>
              ))}
            </div>
            <button
              aria-label="Suivant"
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full shadow p-2 hover:bg-gray-100 transition"
              style={{ display: 'block' }}
            >
              <span style={{ fontSize: 24 }}>&#8594;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
// ...existing code...
