import Image from 'next/image';
export function Watch({ model = 1, priority = false, className = '' }: { model?: 1 | 2; priority?: boolean; className?: string }) {
  return <Image className={`watch-image ${className}`} src={`/assets/model-0${model}.webp`} alt={model === 1 ? 'Модель 01 КОСМОС: серебристый корпус, синий циферблат с космонавтом и синий ремешок' : 'Модель 02 КОСМОС: серебристый корпус, изображение космического аппарата и Земли на синем циферблате'} width={173} height={model === 1 ? 301 : 300} sizes="(max-width: 767px) 65vw, 34vw" preload={priority} loading={priority ? 'eager' : 'lazy'} />;
}
