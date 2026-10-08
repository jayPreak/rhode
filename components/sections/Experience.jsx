'use client';

import { useState } from 'react';
import Media from '../Media';
import { EXPERIENCE } from '../../content/site';

/* SECTION 06 — FROM PRODUCT TO EXPERIENCE. A contact sheet: hover/focus a verb to find its frame.
   Edit in content/site.js > EXPERIENCE. Replace /public/images/experience-*.jpg */
export default function Experience() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="section experience" aria-labelledby="exp-title">
      <div className="wrap experience__head">
        <h2 id="exp-title" className="display-xl" data-reveal>
          {EXPERIENCE.title[0]}
          <br />
          {EXPERIENCE.title[1]}
        </h2>
        <p className="body" data-reveal style={{ '--d': 1 }}>
          {EXPERIENCE.body}
        </p>
      </div>

      <ol className="wrap sequence" aria-label="Visitor sequence" data-reveal>
        {EXPERIENCE.steps.map((s, i) => (
          <li key={s.verb}>
            <span
              className={`sequence__step${hovered === i ? ' is-active' : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {s.verb}
            </span>
            {i < EXPERIENCE.steps.length - 1 && (
              <span className="sequence__arrow" aria-hidden="true">
                →
              </span>
            )}
          </li>
        ))}
      </ol>

      <div className="contact-sheet" data-dim={hovered !== null ? '' : undefined}>
        <ol className="contact-sheet__row">
          {EXPERIENCE.steps.map((s, i) => (
            <li
              key={s.verb}
              className={`frame${hovered === i ? ' is-active' : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <Media src={s.src} alt={`${s.verb}: ${s.subject}`} label={s.verb} ratio="2/3" tone="#7A5440" />
              <p>
                <span className="frame__no">{String(i + 1).padStart(2, '0')}</span>
                <span className="frame__verb">{s.verb}</span>
                <span className="frame__subject">{s.subject}</span>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
