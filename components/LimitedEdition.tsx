import { Watch } from './Watch';
import { Arrow } from './Arrow';
export function LimitedEdition() {
  return <section id="limited" className="limited-section section-pad" aria-labelledby="limited-title"><p className="eyebrow">05 / ВНЕ ВРЕМЕНИ</p><h2 id="limited-title">Мгновение.<br /><span>Которое остаётся.</span></h2><div className="limited-object"><span className="limited-orbit" aria-hidden="true"/><Watch /><p className="limited-label eyebrow">КОСМОС<br /><span>CONCEPT EDITION</span></p></div><div className="limited-copy"><p className="eyebrow">СВОЯ ОРБИТА</p><p>Для тех, кто видит в часах<br />больше, чем время.</p><a href="#collection" className="outline-button">Найти свой характер <Arrow /></a></div></section>;
}
