import GlobalThemeContext from "../componenets/globalThemeContext/GlobalThemeContext";
import { ThemeContextProvider } from "@/context/theme-context";
import { CoffeeCTXProvider } from "@/context/coffee-context";
import { ProjectsCTXProvider } from "@/context/coding-projects-context";
import "./globals.css";

import Heading from "@/componenets/heading/Heading";
import Footer from "@/componenets/footer/Footer";

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
      <ThemeContextProvider>
        <body className={cormorant.className}>
          <GlobalThemeContext>
            <CoffeeCTXProvider>
              <ProjectsCTXProvider>
                <Heading />
                {children}
                <Footer />
              </ProjectsCTXProvider>
            </CoffeeCTXProvider>
          </GlobalThemeContext>
        </body>
      </ThemeContextProvider>
    </html>
  );
}
