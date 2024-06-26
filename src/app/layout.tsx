import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChessFooter from "./components/ChessFooter";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucie' Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex flex-1 flex-col bg-background-700 text-white/80 p-0">
      <body className={inter.className}>{children}</body>
      <footer>
        <ChessFooter />
      </footer>
    </html>
  );
}
