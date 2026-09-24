import type { Metadata } from 'next';
import './globals.css';
import { DemoBanner } from '@/components/DemoBanner';
export const metadata: Metadata = {
  title: 'КОСМОС — Время за пределами',
  description: 'Независимый дизайн-концепт. Две вымышленные модели часов и путешествие за пределы времени.',
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" data-demo-banner="visible"><body><DemoBanner linkLabel="Перейти на AntoDev (откроется в новой вкладке)" />{children}</body></html>;
}
