import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wasim Portfolio",
  description: "Interactive 3D Portfolio with Spline",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Add 'dark' class to html for dark mode
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}