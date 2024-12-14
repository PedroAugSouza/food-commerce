'use client';
import { Sidebar } from '@/modules/admin/components/sidebar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex h-screen w-screen items-center justify-center bg-zinc-900">
      <Sidebar />
      <main className="h-full flex-1 bg-zinc-900 p-1">
        <div className="flex h-full flex-1 flex-col items-center justify-start rounded-md bg-white p-1">
          {children}
        </div>
      </main>
    </section>
  );
}
