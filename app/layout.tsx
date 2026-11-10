import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bye Bye Pressure｜戲劇工作坊",
  description: "以戲劇練習情緒覺察、溝通與團隊信任。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className="antialiased">{children}</body>
    </html>
  );
}
