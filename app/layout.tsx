import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kay's portfolio",
  description: "Kay's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 scroll-smooth min-h-full flex justify-center`}>
        <Navbar/>
        <main className="max-w-5xl w-full">{children}</main>
      </body>
    </html>
  );
}
