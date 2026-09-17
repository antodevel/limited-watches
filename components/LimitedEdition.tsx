import { Watch } from './Watch';
import { Arrow } from './Arrow';
import { collection } from '@/data/models';
export function LimitedEdition() {
  return <section id="limited" className="limited-section section-pad" aria-labelledby="limited-title"><p className="eyebrow">05 / ЛИМИТИРОВАННАЯ КОЛЛЕКЦИЯ</p><h2 id="limited-title">Мгновение.<br /><span>Которое остаётся.</span></h2><div className="limited-object"><span className="limited-orbit" aria-hidden="true"/><Watch /><p className="limited-label eyebrow">КОСМОС<br /><span>LIMITED EDITION</span></p></div><div className="limited-copy"><p className="eyebrow">ЛИМИТИРОВАННАЯ СЕРИЯ</p><p>Для тех, кто видит в часах<br />больше, чем время.</p><div className="edition-information"><span>Название коллекции</span><span>{collection.name ?? 'Скоро'}</span><span>Тираж</span><span>{collection.editionSize ?? 'Будет объявлен'}</span><span>Дата выпуска</span><span>{collection.releaseDate ?? 'Будет объявлена'}</span></div><a href={collection.shopUrl} target="_blank" rel="noopener noreferrer" className="outline-button">Узнать о коллекции <Arrow diagonal /></a></div></section>;
}
