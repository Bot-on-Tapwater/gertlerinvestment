import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Google_Sans_Code,
  Arimo,
  Bitcount_Grid_Double,
  Roboto,
} from "next/font/google";
import "./globals.css";
import Footer from "./global/components/footer";
import Header from "./global/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  fallback: ["monospace"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  fallback: ["monospace"],
});

const googleSansCode = Google_Sans_Code({
  variable: "--font-google-sans-code",
  subsets: ["latin"],
  fallback: ["monospace"],
});

const bitcountGridDouble = Bitcount_Grid_Double({
  subsets: ["latin"],
  fallback: ["monospace"],
});

const arimo = Arimo({ subsets: ["latin"], fallback: ["monospace"] });

const roboto = Roboto({ subsets: ["latin"], fallback: ["monospace"] });

export const metadata: Metadata = {
  title: "Gertler Investment",
  description: "Official gertlerinvestment.com website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${arimo.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col justify-self-center w-full py-8 gap-y-32 items-center bg-summertwo">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
