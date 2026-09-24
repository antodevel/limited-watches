import Image from 'next/image';
import { models } from '@/data/models';
export function Watch({ model = 1, priority = false, className = '' }: { model?: 1 | 2; priority?: boolean; className?: string }) {
  return <Image className={`watch-image ${className}`} src={models[model - 1].image} alt={model === 1 ? 'Концепт 01: серебристые часы с синим орбитальным циферблатом и тёмно-синим ремешком' : 'Концепт 02: графитовые часы с серебристым лунным рельефом, медной стрелкой и чёрным ремешком'} width={948} height={1659} sizes="(max-width: 767px) 65vw, 34vw" preload={priority} loading={priority ? 'eager' : 'lazy'} />;
}
