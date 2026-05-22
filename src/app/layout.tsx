import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { WelcomeScreen } from "@/components/sections/WelcomeScreen";




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
        <SmoothScroll />
        <CustomCursor />
        <Header />
        <WelcomeScreen />
        {children}
      </body>
    </html>
  );
}