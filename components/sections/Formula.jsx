'use client';

import { useEffect, useRef, useState } from 'react';
import Media from '../Media';
import { FORMULAS } from '../../content/site';

/* SECTION 03 — THE SUMMER FORMULA.
   Left: sticky formula number that changes as you scroll. Right: the five steps.
   Edit in content/site.js > FORMULAS. Each step has two images (src, src2): src2 is revealed on hover. */
export default function Formula() {
  const [active, setActive] = useState(0);
  const itemsRef = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.index));
        });
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    itemsRef.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const current = FORMULAS[active];

  return (
    <section id="formula" className="section formula" aria-labelledby="formula-title">
      <div className="wrap formula__head">
        <h2 id="formula-title" className="display-xl" data-reveal>
          The Summer
          <br />
          Formula
        </h2>
        <dl className="legend" data-reveal style={{ '--d': 1 }}>
          <div>
            <dt>
              <span className="legend__dot is-fact" aria-hidden="true" />
              Product
            </dt>
            <dd>rhode Summer &rsquo;26 routine</dd>
          </div>
          <div>
            <dt>
              <span className="legend__dot is-reading" aria-hidden="true" />
              Reading
            </dt>
            <dd>my interpretation, not rhode copy</dd>
          </div>
          <div>
            <dt>
              <span className="legend__dot is-swatch" aria-hidden="true" />
              Swatch
            </dt>
            <dd>interpretive tone, not a product shade</dd>
          </div>
        </dl>
      </div>

      <div className="wrap formula__body">
        <aside className="formula__rail" aria-hidden="true">
          <div className="formula__sticky">
            <span className="label">Formula</span>
            <span key={current.n} className="formula__num">
              {current.n}
            </span>
            <span className="formula__key">{current.key}</span>
            <span className="formula__swatch" style={{ background: current.swatch }} />
            <ol className="formula__ticks">
              {FORMULAS.map((f, i) => (
                <li key={f.n} className={i === active ? 'is-active' : ''}>
                  {f.n}
                </li>
              ))}
            </ol>
          </div>
        </aside>

        <ol className="formula__list">
          {FORMULAS.map((f, i) => (
            <li
              key={f.n}
              ref={(el) => (itemsRef.current[i] = el)}
              data-index={i}
              className={`formula-item${i % 2 ? ' is-offset' : ''}`}
            >
              <div className="formula-item__media" data-reveal>
                <Media src={f.src} alt={`${f.product}, product image`} label={`Product image 0${i + 1}`} ratio="4/5" tone={f.swatch} />
                <Media src={f.src2} alt={`${f.product}, texture or swatch image`} label={`Swatch image 0${i + 1}`} ratio="4/5" tone={f.swatch} className="formula-item__alt" />
              </div>

              <div className="formula-item__meta" data-reveal style={{ '--d': 1 }}>
                <p className="label">
                  <span className="formula-item__num-mobile">
                    Formula {f.n} <span className="label__sep">/</span>{' '}
                  </span>
                  {f.step}
                </p>
                <h3 className="display-l">
                  <span className="legend__dot is-fact" aria-hidden="true" />
                  {f.product}
                </h3>
                <p className="formula-item__line">
                  <span className="legend__dot is-reading" aria-hidden="true" />
                  <em>{f.line}</em>
                </p>
                <p className="formula-item__reads">
                  <span className="swatch swatch--sm" style={{ '--tone': f.swatch }} aria-hidden="true" />
                  <span className="label">reads as: {f.reads}</span>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
