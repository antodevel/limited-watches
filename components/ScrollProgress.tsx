'use client';
import { useEffect, useState } from 'react';
const chapters = [{ id: 'intro', name: 'Начало' }, { id: 'history', name: 'История' }, { id: 'details', name: 'Детали' }, { id: 'collection', name: 'Модели' }, { id: 'limited', name: 'Вне времени' }];
export function ScrollProgress() {
  const [active, setActive] = useState('intro');
  useEffect(() => {
    let frame = 0;
    const update = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => {
      const current = chapters.filter(({ id }) => (document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) < window.innerHeight * .5).at(-1);
      setActive(current?.id ?? 'intro');
    }); };
    window.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update); update();
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);
  return <nav className="chapter-nav" aria-label="Этапы путешествия">{chapters.map(({ id, name }, index) => <a key={id} href={`#${id}`} aria-label={`${index + 1}. ${name}`} aria-current={active === id ? 'step' : undefined}><span className="chapter-tooltip">{name}</span><span className="chapter-dot"/><span className="chapter-number">0{index + 1}</span></a>)}</nav>;
}
