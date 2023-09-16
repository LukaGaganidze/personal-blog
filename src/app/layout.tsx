"use client";
import "./globals.css";

import Heading from "@/componenets/heading/Heading";

import GlobalThemeContext from "../componenets/globalThemeContext/GlobalThemeContext";
import type { Metadata } from "next";
import { ThemeContextProvider } from "../context/theme-context";

// FONT FOR MOST TEXT
import { Cormorant } from "next/font/google";
const inter = Cormorant({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Luka's Newsletter",
  description: "Personal Blog / Newspapaer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <body className={inter.className}>
          <GlobalThemeContext>
            <Heading />
            {children}
          </GlobalThemeContext>
        </body>
      </ThemeContextProvider>
    </html>
  );
}
