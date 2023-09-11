import "./globals.css";

import Heading from "@/componenets/heading/Heading";

import type { Metadata } from "next";

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
      <body className={inter.className}>
        <Heading />
        {children}
      </body>
    </html>
  );
}
