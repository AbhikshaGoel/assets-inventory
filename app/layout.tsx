import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/nav";
import { cn } from "@/lib/utils";
import  Sidebar  from "@/components/sidebar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-secondary", inter.className)}>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="relative z-10 flex flex-col">
          <Navbar className="fixed" />
          <div className="flex flex-col w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
