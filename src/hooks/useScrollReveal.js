import { useEffect, useRef, useCallback } from 'react';

/**
 * useScrollReveal — Premium scroll animation hook
 * Supports stagger delays via data-delay attribute on each element.
 * Elements must also have the class "fade-in-section".
 */
export default function useScrollReveal(threshold = 0.12) {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target;

          // If container has stagger, reveal children with small gaps
          if (el.classList.contains('stagger-children')) {
            const children = Array.from(el.children);
            children.forEach((child, i) => {
              const baseDelay = parseInt(el.dataset.delay || '0', 10);
              const step = parseInt(child.dataset.delay || String(i * 90), 10);
              setTimeout(() => child.classList.add('visible'), baseDelay + step);
            });
            // mark container visible for CSS hooks
            el.classList.add('visible');
            observer.unobserve(el);
            return;
          }

          // Single elements — support data-delay and data-anim
          const delay = parseInt(el.dataset.delay || '0', 10);
          const anim = el.dataset.anim;
          setTimeout(() => {
            if (anim) el.classList.add(anim);
            el.classList.add('visible');
          }, delay);

          observer.unobserve(el);
        });
      },
      { threshold }
    );

    refs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [threshold]);

  const addRef = useCallback(el => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  }, []);

  return addRef;
}
