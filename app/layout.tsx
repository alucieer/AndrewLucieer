import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Andrew Lucieer — Design Systems & Frontend Engineering',
  description: 'Andrew Lucieer builds accessible, dependable interfaces and the design systems behind them.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
