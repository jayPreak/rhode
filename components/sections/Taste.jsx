import Media from '../Media';
import { FEEL, FLAVOURS, TASTE_BOARD } from '../../content/site';

/* SECTION 04 — TASTE SUMMER / FEEL SUMMER (art-direction board).
   Edit in content/site.js > FLAVOURS, TASTE_BOARD, FEEL. */
export default function Taste() {
  return (
    <section id="summer-26" className="section taste" aria-labelledby="taste-title">
      <div className="wrap">
        <h2 id="taste-title" className="display-mega taste__title" data-reveal>
          Taste summer.
        </h2>

        <div className="board tones">
          {TASTE_BOARD.map((item, i) =>
            item.type === 'flavours' ? (
              <div key={item.id} className="board__cell flavours" style={{ '--span': item.span }} data-reveal>
                <p className="label">Flavour / Summer &rsquo;26</p>
                <ul>
                  {FLAVOURS.map((f) => (
                    <li key={f.name} className="flavour" style={{ '--tone': f.tone }}>
                      <span className="flavour__swatch" aria-hidden="true" />
                      <span className="flavour__name">{f.name}</span>
                      <span className="label flavour__note">{f.note}</span>
                    </li>
                  ))}
                </ul>
                <p className="caption">
                  Flavour names from the Summer &rsquo;26 world. Swatch tones are my interpretation.
                </p>
              </div>
            ) : (
              <figure
                key={item.id}
                className="board__cell"
                style={{ '--span': item.span, '--drop': item.drop ?? 0, '--d': i % 3 }}
                data-reveal
              >
                <Media src={item.src} alt={`${item.label} reference`} label={`${item.label} image`} ratio={item.ratio} />
                <figcaption>
                  <span className="label">
                    {item.label} <span className="label__sep">/</span> {String(i + 1).padStart(2, '0')}
                  </span>
                  {item.caption && <span className="caption">{item.caption}</span>}
                </figcaption>
              </figure>
            ),
          )}
        </div>

        <div className="feel">
          <h2 className="display-mega feel__title" data-reveal>
            Feel summer.
          </h2>
          <ul className="feel__grid tones">
            {FEEL.map((f, i) => (
              <li key={f.word} className="feel__item" data-reveal style={{ '--d': i % 4 }}>
                <Media src={f.src} alt={`${f.word}, texture reference`} label={`${f.word} texture`} ratio="3/4" />
                <p>
                  <span className="feel__word">{f.word}</span>
                  <span className="label">Texture / 0{i + 1}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
