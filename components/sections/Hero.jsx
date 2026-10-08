import Media from '../Media';
import { HERO } from '../../content/site';

/* SECTION 01 — ENTRY. Edit copy in content/site.js > HERO. Replace /public/images/hero.jpg. */
export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <span id="top-sentinel" aria-hidden="true" />
      <div className="hero__copy">
        <p className="label hero__eyebrow" data-reveal>
          Formula 00 <span className="label__sep">/</span> Summer &rsquo;26
        </p>

        <div className="hero__bottom">
          <h1 id="hero-title" className="hero__title" data-reveal style={{ '--d': 1 }}>
            <span>Summer,</span>
            <span className="hero__title-2">Packaged.</span>
          </h1>
          <p className="hero__line" data-reveal style={{ '--d': 2 }}>
            {HERO.line}
          </p>
          <a href="#concept" className="cta" data-reveal style={{ '--d': 3 }}>
            {HERO.cta}
            <span className="cta__icon" aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div className="hero__visual">
        <Media
          src={HERO.image.src}
          alt={HERO.image.alt}
          label={HERO.image.label}
          ratio="auto"
          tone="#E3C7A6"
          priority
          marks
          className="hero__media"
        />
        <div className="hero__sticker" aria-hidden="true">
          <span>Summer</span>
          <span>&rsquo;26</span>
        </div>
      </div>
    </section>
  );
}
