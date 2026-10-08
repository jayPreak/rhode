'use client';

import { useEffect } from 'react';

/**
 * One IntersectionObserver for the whole page.
 * Any element with `data-reveal` fades up gently when it enters the viewport.
 * Optional `style={{ '--d': 2 }}` staggers it. Reduced-motion users get no animation (see CSS).
 */
export default function RevealRoot() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
