import Media from '../Media';
import { IDEA } from '../../content/site';

/* SECTION 02 — THE IDEA (manifesto). Edit copy + images in content/site.js > IDEA. */
export default function Idea() {
  return (
    <section id="concept" className="section idea" aria-labelledby="idea-title">
      <div className="idea__head wrap">
        <h2 id="idea-title" className="display-xl" data-reveal>
          {IDEA.title[0]}
          <br />
          {IDEA.title[1]}
        </h2>
        <div className="idea__text">
          <p className="lead" data-reveal style={{ '--d': 1 }}>
            <em>{IDEA.question}</em>
          </p>
          <p className="body" data-reveal style={{ '--d': 2 }}>
            {IDEA.body}
          </p>
          <p className="label idea__note" data-reveal style={{ '--d': 3 }}>
            Independent student project. Not affiliated with or endorsed by rhode.
          </p>
        </div>
      </div>

      <ol className="sensations wrap" aria-label="Five sensations">
        {IDEA.sensations.map((s, i) => (
          <li key={s.word} className="sensation" data-reveal style={{ '--d': i % 2, '--tone': s.tone }}>
            <span className="label sensation__no">S.0{i + 1}</span>
            <span className="sensation__word">{s.word}</span>
            <span className="sensation__note">
              <span className="swatch" aria-hidden="true" />
              <span className="label">{s.note}</span>
            </span>
            <Media src={s.src} alt={`${s.word}: visual fragment`} label={s.word} ratio="4/5" tone={s.tone} className="sensation__frag" />
          </li>
        ))}
      </ol>
    </section>
  );
}
