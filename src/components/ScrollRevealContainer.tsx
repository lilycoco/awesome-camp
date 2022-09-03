import React, { useRef, useEffect } from "react";
import scrollReveal from "scrollreveal";

interface ScrollRevealContainerProps {
  move?: string;
  children: React.ReactElement;
  delay?: number;
  distance?: number;
  reset?: boolean;
}

export default function ScrollRevealContainer({
  children,
  move,
  delay = 400,
  distance = 40,
  reset = true,
}: ScrollRevealContainerProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        delay,
        distance: `${distance}px`,
        opacity: 0,
        reset,
        origin:
          move === "left"
            ? "left"
            : move === "right"
            ? "right"
            : move === "top"
            ? "top"
            : "bottom",
      });
  }, [move, sectionRef, delay, distance, reset]);

  return <section ref={sectionRef}>{children}</section>;
}
