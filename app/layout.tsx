"use client";

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Bloguealo",
//   description: "By Dante",
// };

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="es">
      <body
        className={`${outfit.variable} antialiased`}
      >
        <Navbar />
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
