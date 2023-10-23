import type { Metadata } from "next";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./components/ThemeProvider";
import React, { useState } from "react";
import Header from "./components/Header";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          "w-full grid  relative min-h-screen bg-background font-mono antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
