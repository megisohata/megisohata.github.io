"use client";

import "../../globals.css";
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ExperienceCard from "./ExperienceCard";
import Timeline from "./Timeline";
import { experiences } from "@/data/experience-data";

const CARD_SPACING = 885;
const HALF_SPACING = 295;

export default function Experience() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [arrowTop, setArrowTop] = useState(0);
  const [arrowReady, setArrowReady] = useState(false);

  const centerCard = (index: number, smooth = true) => {
    const container = scrollRef.current;
    const card = cardRefs.current[index];
    if (!container || !card) return;

    const scrollLeft =
      card.offsetLeft - container.clientWidth / 2 + card.clientWidth / 2;

    container.scrollTo({
      left: scrollLeft,
      behavior: smooth ? "smooth" : "auto",
    });
  };

  useEffect(() => {
    requestAnimationFrame(() => centerCard(0, false));
  }, []);

  useEffect(() => {
    setAtStart(currentIndex === 0);
    setAtEnd(currentIndex === experiences.length - 1);
  }, [currentIndex]);

  const goLeft = () => {
    if (currentIndex === 0) return;
    const next = currentIndex - 1;
    setCurrentIndex(next);
    centerCard(next);
  };

  const goRight = () => {
    if (currentIndex === experiences.length - 1) return;
    const next = currentIndex + 1;
    setCurrentIndex(next);
    centerCard(next);
  };

  useEffect(() => {
    const timelineEl = timelineRef.current;
    const containerEl = scrollRef.current;
    if (!timelineEl || !containerEl) return;

    const updatePosition = () => {
      const containerRect = containerEl.getBoundingClientRect();
      const timelineRect = timelineEl.getBoundingClientRect();
      const top =
        timelineRect.top - containerRect.top + timelineRect.height / 2 + 40;

      setArrowTop(top);
      setArrowReady(true);
    };

    updatePosition();

    const observer = new ResizeObserver(updatePosition);
    observer.observe(timelineEl);
    observer.observe(containerEl);

    window.addEventListener("resize", updatePosition);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <div
      id="experience"
      className="relative py-[50px] bg-cream text-brown no-scrollbar scroll-mt-16"
    >
      <h1 className="text-4xl text-center mb-6">Experience</h1>

      {arrowReady && !atStart && (
        <button
          onClick={goLeft}
          className="absolute left-3 p-3 rounded-full bg-pistachio text-green z-30"
          style={{ top: arrowTop }}
        >
          <FaChevronLeft />
        </button>
      )}

      {arrowReady && !atEnd && (
        <button
          onClick={goRight}
          className="absolute right-3 p-3 rounded-full bg-pistachio text-green z-30"
          style={{ top: arrowTop }}
        >
          <FaChevronRight />
        </button>
      )}

      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth no-scrollbar pt-[30px]"
      >
        <div className="flex">
          <div>
            <div className="flex items-end">
              <div className="shrink-0" style={{ width: HALF_SPACING }} />

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className="shrink-0 flex justify-center relative"
                  style={{ width: CARD_SPACING }}
                >
                  <ExperienceCard {...exp} />
                  <div className="absolute left-1/2 top-full h-[64px] w-[2px] bg-green" />
                </div>
              ))}
            </div>

            <div ref={timelineRef}>
              <Timeline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
