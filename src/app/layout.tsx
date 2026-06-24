import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap"
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Ama Esthetique | Centro Estetico a Busnago",
  description:
    "Ama Esthetique è un centro estetico a Busnago specializzato in nails, trattamenti viso e corpo, dermopigmentazione, estetica avanzata e Metodo Renata França.",
  keywords: [
    "centro estetico Busnago",
    "estetista Busnago",
    "nails Busnago",
    "manicure Busnago",
    "pedicure Busnago",
    "Metodo Renata França Busnago",
    "dermopigmentazione Busnago",
    "trattamenti viso Busnago"
  ],
  openGraph: {
    title: "Ama Esthetique | Centro Estetico a Busnago",
    description:
      "Beauty studio a Busnago per nails, viso, corpo, dermopigmentazione e Metodo Renata França.",
    type: "website",
    locale: "it_IT"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
