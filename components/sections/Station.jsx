'use client';

import { useEffect, useRef, useState } from 'react';
import Media from '../Media';
import { STATION_INTRO, STOPS } from '../../content/site';

/* SECTION 05 — SUMMER, IRL. Horizontal, swipeable chapters (native scroll-snap).
   Edit in content/site.js > STOPS. Replace /public/images/event-*.jpg */
export default function Station() {
  const trackRef = useRef(null);
  const cardsRef = useRef([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setCurrent(Number(e.target.dataset.index));
        });
      },
      { root: trackRef.current, threshold: 0.6 },
    );
    cardsRef.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const go = (dir) => {
    const next = Math.min(STOPS.length - 1, Math.max(0, current + dir));
    cardsRef.current[next]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  return (
    <section id="station" className="section station" aria-labelledby="station-title">
      <div className="wrap station__head">
        <h2 id="station-title" className="display-xl" data-reveal>
          Summer, IRL.
        </h2>
        <p className="body station__intro" data-reveal style={{ '--d': 1 }}>
          {STATION_INTRO}
        </p>
        <ol className="route" aria-label="Tour route" data-reveal style={{ '--d': 2 }}>
          {STOPS.map((s, i) => (
            <li key={s.code} className={i === current ? 'is-active' : ''}>
              <span className="route__code">{s.code}</span>
              <span className="label">{s.dates}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="station__track" ref={trackRef} tabIndex={0} aria-label="Tour stops, scroll horizontally">
        {STOPS.map((s, i) => (
          <article
            key={s.code}
            className="stop"
            data-index={i}
            ref={(el) => (cardsRef.current[i] = el)}
            aria-label={`${s.name}, ${s.dates}`}
          >
            <div className="stop__top">
              <span className="label">Stop {s.n}</span>
              <span className="label">{s.dates}</span>
            </div>
            <Media src={s.src} alt={`rhode Summer Station, ${s.name}`} label={`Event image, ${s.name}`} ratio="4/5" tone="#DCC3A3" />
            <h3 className="display-l stop__name">{s.name}</h3>
            <p className="stop__place">
              {s.place}
              <br />
              <span className="muted">{s.region}</span>
            </p>
            <p className="caption">{s.caption}</p>
          </article>
        ))}
      </div>

      <div className="wrap station__controls">
        <span className="label" aria-live="polite">
          {STOPS[current].n} <span className="label__sep">/</span> 0{STOPS.length}
        </span>
        <div className="station__buttons">
          <button type="button" className="round-btn" onClick={() => go(-1)} disabled={current === 0} aria-label="Previous stop">
            ←
          </button>
          <button
            type="button"
            className="round-btn"
            onClick={() => go(1)}
            disabled={current === STOPS.length - 1}
            aria-label="Next stop"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
