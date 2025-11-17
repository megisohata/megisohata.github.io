"use client";

import "../../globals.css";
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ExperienceCard from "./ExperienceCard";
import Timeline from "./Timeline";
import { experiences } from "@/data/experience-data";

export default function Experience() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [arrowTop, setArrowTop] = useState(0);
  const [arrowReady, setArrowReady] = useState(false);

  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scroller;
      setAtStart(scrollLeft <= 10);
      setAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
      if (scrollLeft > 0) setShowHint(false);
    };

    scroller.addEventListener("scroll", handleScroll);
    return () => scroller.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollByAmount = 500;
  const scrollLeftFunc = () =>
    scrollRef.current?.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
  const scrollRightFunc = () =>
    scrollRef.current?.scrollBy({ left: scrollByAmount, behavior: "smooth" });

  const toggleExpand = (i: number) => {
    const newIndex = expandedIndex === i ? null : i;
    setExpandedIndex(newIndex);

    requestAnimationFrame(() => {
      if (newIndex !== null && cardRefs.current[newIndex]) {
        const cardEl = cardRefs.current[newIndex]!;
        const containerEl = scrollRef.current!;

        const scrollLeft =
          cardEl.offsetLeft -
          containerEl.offsetLeft -
          containerEl.clientWidth / 2 +
          cardEl.clientWidth / 2;

        containerEl.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    });
  };

  useEffect(() => {
    const timelineEl = timelineRef.current;
    const containerEl = scrollRef.current;
    if (!timelineEl || !containerEl) return;

    const updatePosition = () => {
      const containerRect = containerEl.getBoundingClientRect();
      const timelineRect = timelineEl.getBoundingClientRect();
      setArrowTop(
        timelineRect.top - containerRect.top + timelineRect.height / 2
      );
      setArrowReady(true);
    };

    updatePosition();
    const observer = new ResizeObserver(updatePosition);
    observer.observe(timelineEl);
    window.addEventListener("resize", updatePosition);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <div
      id="experience"
      className="relative my-[50px] bg-cream text-brown no-scrollbar scroll-mt-16"
    >
      <h1 className="text-4xl text-center">Experience</h1>

      {!atStart && (
        <div className="pointer-events-none absolute left-0 top-0 h-full w-[80px] bg-gradient-to-r from-cream to-transparent z-20" />
      )}
      {!atEnd && (
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[80px] bg-gradient-to-l from-cream to-transparent z-20" />
      )}
      {showHint && (
        <div className="absolute right-6 top-16 z-30 animate-pulse text-green text-sm bg-pistachio/70 px-3 py-1 rounded-full">
          Scroll →
        </div>
      )}

      {arrowReady && !atStart && (
        <button
          onClick={scrollLeftFunc}
          style={{ top: arrowTop }}
          className="absolute left-3 translate-y-[18px] p-3 rounded-full bg-green text-cream shadow-lg z-30"
        >
          <FaChevronLeft />
        </button>
      )}
      {arrowReady && !atEnd && (
        <button
          onClick={scrollRightFunc}
          style={{ top: arrowTop }}
          className="absolute right-3 translate-y-[18px] p-3 rounded-full bg-green text-cream shadow-lg z-30"
        >
          <FaChevronRight />
        </button>
      )}

      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth no-scrollbar pt-[50px]"
      >
        <div className="flex">
          <div>
            <div className="flex overflow-x-none items-end">
              <div className="w-[150px] shrink-0" />
              {experiences.map((exp, index) => {
                const isAbove = index % 2 === 0;
                return isAbove ? (
                  <div
                    key={index}
                    className="w-[590px] flex justify-center relative"
                    ref={(el: HTMLDivElement | null) => {
                      cardRefs.current[index] = el;
                    }}
                  >
                    <ExperienceCard
                      {...exp}
                      expanded={expandedIndex === index}
                      onExpand={() => toggleExpand(index)}
                    />
                    <div className="absolute left-1/2 top-full h-[64px] w-[2px] bg-green" />
                  </div>
                ) : null;
              })}
            </div>

            <div ref={timelineRef}>
              <Timeline />
            </div>

            <div className="flex overflow-x-none items-start">
              <div className="w-[445px] shrink-0" />
              {experiences.map((exp, index) => {
                const isAbove = index % 2 === 0;
                return !isAbove ? (
                  <div
                    key={index}
                    className="w-[590px] flex justify-center relative"
                    ref={(el: HTMLDivElement | null) => {
                      cardRefs.current[index] = el;
                    }}
                  >
                    <ExperienceCard
                      {...exp}
                      expanded={expandedIndex === index}
                      onExpand={() => toggleExpand(index)}
                    />
                    <div className="absolute left-1/2 bottom-full h-[64px] w-[2px] bg-green" />
                  </div>
                ) : null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
