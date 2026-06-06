'use client'
import { useState, useEffect, useRef } from "react";

interface CardData {
  id: number;
  imgUrl: string;
  content: string;
}

interface CardProps {
  data: CardData[];
  showCarousel?: boolean;
  cardsPerView?: number;
}

const Card = ({ data, showCarousel = true, cardsPerView = 3 }: CardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSingleCard, setIsSingleCard] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsSingleCard(data?.length === 1);
  }, [data]);

  const cardWidth = 75 / cardsPerView;

  const nextSlide = () => {
    if (isAnimating || !showCarousel || !data) return;
    if (data.length <= cardsPerView) return;

    setIsAnimating(true);
    const nextIndex = (currentIndex + 1) % data.length;

    if (containerRef.current) {
      containerRef.current.style.transition = "transform 500ms ease";
      containerRef.current.style.transform = `translateX(-${cardWidth}%)`;

      setTimeout(() => {
        setCurrentIndex(nextIndex);
        if (containerRef.current) {
          containerRef.current.style.transition = "none";
          containerRef.current.style.transform = "translateX(0)";
          void containerRef.current.offsetWidth;
          setIsAnimating(false);
        }
      }, 500);
    }
  };

  const prevSlide = () => {
    if (isAnimating || !showCarousel || !data) return;
    if (data.length <= cardsPerView) return;

    setIsAnimating(true);
    const prevIndex = (currentIndex - 1 + data.length) % data.length;

    if (containerRef.current) {
      containerRef.current.style.transition = "none";
      containerRef.current.style.transform = `translateX(-${cardWidth}%)`;
      setCurrentIndex(prevIndex);
      void containerRef.current.offsetWidth;
      containerRef.current.style.transition = "transform 500ms ease";
      containerRef.current.style.transform = "translateX(0)";

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
  };

  const getVisibleCards = () => {
    if (!showCarousel || !data) return data || [];

    const visibleCards = [];
    const totalCards = data.length;

    for (let i = 0; i < cardsPerView + 1; i++) {
      const index = (currentIndex + i) % totalCards;
      visibleCards.push(data[index]);
    }

    return visibleCards;
  };

  if (!data || data.length === 0) {
    return <div>No card data available</div>;
  }

  return (
    <div className="w-full px-4">
      <div className={`relative ${isSingleCard ? "max-w-sm mx-auto" : "w-full"}`}>

        {/* Carousel Controls */}
        {showCarousel && data.length > cardsPerView && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition-all duration-300 disabled:opacity-40"
              style={{ background: "#FFFFFF", border: "1px solid rgba(184,146,42,0.25)", color: "#B8922A",
                boxShadow: "0 2px 12px rgba(15,30,53,0.08)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "#0F1E35";
                (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "#FFFFFF";
                (e.currentTarget as HTMLElement).style.color = "#B8922A";
              }}
              disabled={isAnimating}
              aria-label="Previous slide"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition-all duration-300 disabled:opacity-40"
              style={{ background: "#FFFFFF", border: "1px solid rgba(184,146,42,0.25)", color: "#B8922A",
                boxShadow: "0 2px 12px rgba(15,30,53,0.08)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "#0F1E35";
                (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "#FFFFFF";
                (e.currentTarget as HTMLElement).style.color = "#B8922A";
              }}
              disabled={isAnimating}
              aria-label="Next slide"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Cards Container */}
        <div className="overflow-hidden mx-14">
          <div
            ref={containerRef}
            className="flex"
            style={{
              transform: "translateX(0)",
              width: showCarousel ? `${((cardsPerView + 1) * 100) / cardsPerView}%` : "100%",
            }}
          >
            {getVisibleCards().map((card, idx) => (
              <div
                key={`card-${currentIndex}-${idx}`}
                style={{
                  width: showCarousel
                    ? `${100 / (cardsPerView + 1)}%`
                    : `${100 / Math.min(cardsPerView, data.length)}%`,
                }}
                className="px-2"
              >
                <div className="relative overflow-hidden group h-full"
                  style={{ border: "1px solid rgba(184,146,42,0.13)", boxShadow: "0 2px 20px rgba(15,30,53,0.06)" }}>
                  <div className="w-full h-64">
                    <img
                      src={card.imgUrl}
                      alt={card.content.slice(0, 40)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 p-6 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0 overflow-y-auto flex flex-col justify-end"
                    style={{ background: "rgba(15,30,53,0.92)", backdropFilter: "blur(8px)" }}
                  >
                    <div className="h-px w-10 mb-4" style={{ background: "#C9A84C" }} />
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(240,235,224,0.85)" }}>{card.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
