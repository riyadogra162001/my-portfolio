import { useEffect, useRef, useState } from "react";

function useInView(options = {}) {
  const ref = useRef(null);
  const scrollingDown = useRef(true);
  const [visible, setVisible] = useState(false);

  // Safely parse threshold, rootMargin, and triggerOnce
  let threshold = 0.15;
  let rootMargin = "0px 0px -50px 0px";
  let triggerOnce = true;

  if (typeof options === "number") {
    threshold = options;
  } else if (options && typeof options === "object") {
    if (options.threshold !== undefined) threshold = options.threshold;
    if (options.rootMargin !== undefined) rootMargin = options.rootMargin;
    if (options.triggerOnce !== undefined) triggerOnce = options.triggerOnce;
  }

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let previousScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY !== previousScrollY) {
        scrollingDown.current = currentScrollY > previousScrollY;
        previousScrollY = currentScrollY;
      }
    };

    // If triggerOnce is enabled and element is already visible, do not observe again
    if (visible && triggerOnce) return;

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (scrollingDown.current) {
            setVisible(true);
            if (triggerOnce) {
              observer.unobserve(element);
            }
          }
        } else {
          if (!triggerOnce && scrollingDown.current) {
            setVisible(false);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce, visible]);

  return [ref, visible];
}

export default useInView;