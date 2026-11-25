import "./global.css"; // <-- Pastikan baris ini ada!

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  title: "ZPack Printing & Packaging",
  description: "Jasa Percetakan Custom Printing & Packaging Solution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning className="dark overflow-x-clip">
      <body className="min-h-screen text-slate-900 dark:text-slate-50 transition-colors duration-300 overflow-x-clip w-full relative">
        
        {/* Skrip Inline: Default selalu Dark Mode kecuali user memilih 'light' */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />

        {/* Lapisan Background Tetap (Fixed) */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-t from-white via-slate-200 to-slate-300 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300 pointer-events-none" />

        {/* Konten halaman utama */}
        <main className="pt-5 overflow-x-clip w-full">{children}</main>
      </body>
    </html>
  );
}