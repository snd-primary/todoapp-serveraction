import type { Metadata } from "next";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/font";
import { ThemeProvider } from "../context/ThemeProvider";
import React from "react";
import Header from "../components/Header";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "w-full grid  relative min-h-screen bg-background font-mono antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="w-full font-sans max-w-full h-screen grid place-content-center place-items-center relative">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
