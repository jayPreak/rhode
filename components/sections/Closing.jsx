import { CLOSING, FORMULAS, PROJECT } from '../../content/site';

/* SECTION 08 — FINAL STATEMENT + footer credits. Edit in content/site.js > CLOSING, PROJECT. */
export default function Closing() {
  return (
    <>
      <section className="closing" aria-labelledby="closing-title">
        <p className="label" data-reveal>
          rhode Summer Station &rsquo;26
        </p>
        <h2 id="closing-title" className="display-mega closing__title" data-reveal style={{ '--d': 1 }}>
          Summer,
          <br />
          Packaged.
        </h2>
        <ul className="closing__words" data-reveal style={{ '--d': 2 }}>
          {CLOSING.words.map((w, i) => (
            <li key={w}>
              <span className="swatch swatch--sm" style={{ '--tone': FORMULAS[i].swatch }} aria-hidden="true" />
              {w}
            </li>
          ))}
        </ul>
        <p className="closing__line" data-reveal style={{ '--d': 3 }}>
          <em>&ldquo;{CLOSING.line}&rdquo;</em>
        </p>
      </section>

      <footer className="footer">
        <div className="wrap footer__grid">
          <p>
            <strong>{PROJECT.title}</strong>
            <br />
            {PROJECT.course}
            <br />
            {PROJECT.author}, {PROJECT.school}, {PROJECT.year}
          </p>
          <p className="muted">
            An independent student visual identity interpreting {PROJECT.event}. Not affiliated with, sponsored or endorsed by
            rhode. Product and place names belong to their owners. Product and campaign images © rhode, used for educational documentation. Mood and location photography via Unsplash (
            <a href="/images/CREDITS.md">image credits</a>).
          </p>
          <a href="#top" className="cta cta--quiet">
            Back to top
            <span className="cta__icon" aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
    </>
  );
}
