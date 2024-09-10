"use client";

import React, { useRef, useEffect, useState } from "react";

interface UpCounterProps {
  icon: JSX.Element;
  label: string;
  label2: string;
  finalCount: number;
}

const UpCounter: React.FC<UpCounterProps> = ({
  icon,
  label,
  label2,
  finalCount,
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const startCounting = () => {
              let currentCount = 0;
              const increment = Math.ceil(finalCount / 100);
              const timer = setInterval(() => {
                currentCount += increment;
                if (currentCount >= finalCount) {
                  clearInterval(timer);
                  currentCount = finalCount;
                }
                setCount(currentCount);
              }, 50);
            };
            startCounting();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef.current);
      }
    };
  }, [finalCount]);

  return (
    <div
      ref={elementRef}
      className="my-10 flex flex-col items-center border-t sm:border-r sm:border-t-0  sm:pr-10 md:my-0"
    >
      <div className="mb-4 mt-10 flex size-12 items-center justify-center rounded-full bg-blue-100 sm:mt-0 md:size-24">
        {icon}
      </div>
      <p>
        {label}
        <br />
        <span className="text-3xl md:text-6xl">{count}</span>
        <br />
        {label2}
      </p>
    </div>
  );
};

export default UpCounter;
