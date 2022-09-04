import React, { useRef, useEffect } from "react";
import scrollReveal from "scrollreveal";

interface ScrollRevealContainerProps {
  origin?: string;
  children: React.ReactElement;
  delay?: number;
  distance?: number;
  reset?: boolean;
}

export default function ScrollRevealContainer({
  children,
  origin = "bottom",
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
        origin,
      });
  }, [origin, sectionRef, delay, distance, reset]);

  return <section ref={sectionRef}>{children}</section>;
}
