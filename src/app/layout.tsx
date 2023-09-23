import "./globals.css";
import CTX from "@/context/CTX";

import Heading from "@/componenets/heading/Heading";
import Footer from "@/componenets/footer/Footer";
import MobileNav from "@/componenets/heading/componenets/MobileNav";

import type { Metadata } from "next";

// FONT FOR MOST TEXT
import { Cormorant } from "next/font/google";
const cormorant = Cormorant({ subsets: ["latin"] });

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
      <body className={cormorant.className}>
        <CTX>
          <MobileNav />
          <Heading />
          {children}
          {/* <Footer /> */}
        </CTX>
      </body>
    </html>
  );
}
