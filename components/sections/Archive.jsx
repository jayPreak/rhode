'use client';

import { useState } from 'react';
import Media from '../Media';
import { ARCHIVE, ARCHIVE_CATEGORIES } from '../../content/site';

const RATIOS = { xl: '4/5', tall: '2/3', wide: '4/3', sm: '1/1' };

/* SECTION 07 — THE SUMMER ARCHIVE. Masonry archive with a category filter.
   Edit tiles in content/site.js > ARCHIVE. Replace /public/images/archive-01.jpg ... archive-16.jpg */
export default function Archive() {
  const [filter, setFilter] = useState('All');
  const matchCount = filter === 'All' ? ARCHIVE.length : ARCHIVE.filter((a) => a.cat === filter).length;

  return (
    <section id="archive" className="section archive" aria-labelledby="archive-title">
      <div className="wrap archive__head">
        <h2 id="archive-title" className="display-xl" data-reveal>
          The Summer
          <br />
          Archive
        </h2>
        <div className="filters" role="group" aria-label="Filter archive by category" data-reveal style={{ '--d': 1 }}>
          {['All', ...ARCHIVE_CATEGORIES].map((c) => (
            <button key={c} type="button" aria-pressed={filter === c} onClick={() => setFilter(c)}>
              {c}
            </button>
          ))}
        </div>
        <p className="label archive__count" aria-live="polite">
          Showing {filter === 'All' ? 'everything' : filter} <span className="label__sep">/</span> {String(matchCount).padStart(2, '0')}
        </p>
      </div>

      <ul className="wrap masonry tones">
        {ARCHIVE.map((a, i) => {
          const isDim = filter !== 'All' && a.cat !== filter;
          return (
            <li key={a.src} className={`masonry__item${isDim ? ' is-dim' : ''}`} data-reveal style={{ '--d': i % 4 }}>
              <Media src={a.src} alt={`${a.cat} archive image ${a.no}`} label={`${a.cat} / ${a.no}`} ratio={RATIOS[a.size]}>
                <span className="tag">
                  {a.cat} / {a.no}
                </span>
              </Media>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
