"use client";

import { useEffect, useRef, useState } from "react";

function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

export function useScrollAnimation(sessionKey) {
  const ref = useRef();
  const isIntersecting = useIsVisible(ref);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
      if (!sessionStorage.getItem(sessionKey)) {
        setPlay(true);
        setTimeout(() => {
          sessionStorage.setItem(sessionKey, "true");
        }, 1000);
      }
    }
  }, [isIntersecting]);

  return { play, ref };
}
