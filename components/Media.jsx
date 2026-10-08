'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Image slot with a built-in placeholder.
 * While /public{src} does not exist, it renders a labelled, tinted
 * placeholder ("[ HERO IMAGE ]" + the expected path). Drop the file in
 * and the real image fades in. No code change needed.
 */
export default function Media({
  src,
  alt = '',
  label = 'Image',
  ratio = '4/5',
  tone,
  priority = false,
  className = '',
  marks = false,
  children,
}) {
  const imgRef = useRef(null);
  const [state, setState] = useState('loading');

  // The image may finish (or fail) before React hydrates, so check once on mount.
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete) setState(img.naturalWidth > 0 ? 'loaded' : 'missing');
  }, []);

  return (
    <div
      className={`media${marks ? ' marks' : ''} ${className}`}
      style={{ aspectRatio: ratio, ...(tone ? { '--tone': tone } : null) }}
      data-state={state}
    >
      <div className="media__ph" role={state === 'loaded' ? undefined : 'img'} aria-label={state === 'loaded' ? undefined : alt || label}>
        <span className="media__ph-label" aria-hidden="true">
          [ {label} ]
        </span>
        <span className="media__ph-path" aria-hidden="true">
          {src}
        </span>
      </div>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
        onLoad={() => setState('loaded')}
        onError={() => setState('missing')}
      />
      {children}
    </div>
  );
}
