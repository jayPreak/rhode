'use client';

import { useEffect, useState } from 'react';
import { NAV_LINKS, PROJECT } from '../content/site';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    // Nav gains a hairline once the hero top leaves the viewport.
    const sentinel = document.getElementById('top-sentinel');
    const topIo = new IntersectionObserver(([entry]) => setIsScrolled(!entry.isIntersecting));
    if (sentinel) topIo.observe(sentinel);

    // Highlight the link of the section currently in the middle of the screen.
    // '#top' (hero) is observed too so no link is underlined while on the hero.
    const sections = ['#top', ...NAV_LINKS.map((l) => l.href)]
      .map((href) => document.querySelector(href))
      .filter(Boolean);
    const sectionIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActiveId(`#${e.target.id}`));
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => sectionIo.observe(s));

    return () => {
      topIo.disconnect();
      sectionIo.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <header className={`nav${isScrolled ? ' is-scrolled' : ''}${isOpen ? ' is-open' : ''}`}>
      <a href="#top" className="nav__mark" onClick={() => setIsOpen(false)}>
        {PROJECT.title}
      </a>

      <nav aria-label="Sections" className="nav__links">
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} aria-current={activeId === l.href ? 'true' : undefined}>
            {l.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="nav__toggle"
        aria-expanded={isOpen}
        aria-controls="nav-sheet"
        onClick={() => setIsOpen((v) => !v)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      <div id="nav-sheet" className="nav__sheet" hidden={!isOpen}>
        <nav aria-label="Sections (mobile)">
          {NAV_LINKS.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setIsOpen(false)} style={{ '--d': i }}>
              <span className="mono">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>
        <p className="mono nav__sheet-note">Student project. Not affiliated with rhode.</p>
      </div>
    </header>
  );
}
