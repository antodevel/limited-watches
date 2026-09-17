import { Arrow } from './Arrow';
import { Brand } from './Brand';
export function FinalCTA() {
  return <><section className="final-section" aria-labelledby="final-title"><div className="final-glow"/><p className="eyebrow">ПУТЕШЕСТВИЕ ПРОДОЛЖАЕТСЯ</p><h2 id="final-title">Ваше время.<br /><span>Ваш космос.</span></h2><a className="final-cta" href="https://cosmos-watches.ru/" target="_blank" rel="noopener noreferrer">Открыть мир КОСМОС <Arrow diagonal /></a><svg className="final-orbit" viewBox="0 0 1440 400" preserveAspectRatio="none" aria-hidden="true"><path d="M-100 400C120 25 1310 20 1580 400"/><circle cx="1129" cy="159" r="4" /></svg></section><footer className="footer"><a href="#intro" aria-label="КОСМОС — вернуться к началу"><Brand /></a><span>РОССИЙСКИЙ ЧАСОВОЙ БРЕНД</span><a href="https://cosmos-watches.ru/about/privacy-notice/" target="_blank" rel="noopener noreferrer">Конфиденциальность <Arrow diagonal /></a><a href="#intro" className="back-top">Наверх ↑</a></footer></>;
}
