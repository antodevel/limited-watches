'use client';
import { useState, useEffect, useRef } from 'react';
import { Brand } from './Brand';
import { Arrow } from './Arrow';
const links = [['Коллекция', '#collection'], ['История', '#history'], ['Детали', '#details'], ['Вне времени', '#limited']];
export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  return <header className="site-header"><a href="#intro" aria-label="КОСМОС — начало"><Brand /></a><nav className="desktop-nav" aria-label="Основная навигация">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav><a className="header-cta" href="#collection">Исследовать <Arrow diagonal /></a><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Закрыть меню' : 'Открыть меню'} onClick={() => setOpen(!open)}>{open ? 'Закрыть' : 'Меню'}<span>{open ? '−' : '+'}</span></button><nav id="mobile-navigation" className="mobile-nav" aria-label="Мобильная навигация" hidden={!open}>{links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}<Arrow /></a>)}<a href="#collection" onClick={() => setOpen(false)}>Две модели <Arrow diagonal /></a></nav></header>;
}
