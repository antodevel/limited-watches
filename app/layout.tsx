import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'КОСМОС — Время за пределами',
  description: 'Две модели. Два взгляда в бесконечность. Лимитированная коллекция часов КОСМОС.',
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
