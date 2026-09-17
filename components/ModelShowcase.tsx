'use client';
import { useState } from 'react';
import { Watch } from './Watch';
import { models } from '@/data/models';
export function ModelShowcase() {
  const [active, setActive] = useState<0 | 1>(0);
  return <section id="collection" className="models-section section-pad" aria-labelledby="models-title"><div className="models-heading"><p className="eyebrow">03 / ДВА ВЗГЛЯДА В БЕСКОНЕЧНОСТЬ</p><h2 id="models-title">Одна вселенная.<br /><span>Два характера.</span></h2></div><div className="model-pair" data-active={active}>{models.map((model, index) => <button key={model.id} className={`model-exhibit ${active === index ? 'is-active' : ''}`} aria-pressed={active === index} aria-controls="model-description" onClick={() => setActive(index as 0 | 1)} onPointerEnter={(e) => { if (e.pointerType === 'mouse') setActive(index as 0 | 1); }} onFocus={() => setActive(index as 0 | 1)}><span className="model-index eyebrow">{model.name}<span>{active === index ? 'В ФОКУСЕ' : 'ИССЛЕДОВАТЬ ↗'}</span></span><span className="model-light"/><span className="model-reveal"><span className="model-watch"><Watch model={(index + 1) as 1 | 2} /></span></span><span className="model-exhibit-title">{model.motif}</span><span className="model-circle" aria-hidden="true" /></button>)}</div><div className="model-description" id="model-description" aria-live="polite"><span className="eyebrow">{models[active].name}</span><p>{models[active].description}</p><span className="model-switch-hint">Выберите свою орбиту <span>↗</span></span></div></section>;
}
