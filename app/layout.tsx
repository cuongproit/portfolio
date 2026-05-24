import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Cuong Dao — Full-stack engineer with AI-native workflow',
  description:
    'Full-stack engineer shipping production-grade web, mobile, and serverless products. Specializing in Next.js, Flutter, AWS, and Claude AI integration. Based in Vietnam, work with EU/US clients.',
  keywords: ['full-stack', 'nextjs', 'flutter', 'aws', 'claude', 'ai', 'freelance', 'developer'],
  authors: [{ name: 'Cuong Dao', url: 'https://github.com/cuongproit' }],
  openGraph: {
    title: 'Cuong Dao — Full-stack engineer',
    description: 'Ship-grade web, mobile, and serverless. Available for client work.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
