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
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const googleSansCode = Google_Sans_Code({
  variable: "--font-google-sans-code",
  subsets: ["latin"],
});

const bitcountGridDouble = Bitcount_Grid_Double({ subsets: ["latin"] });

const arimo = Arimo({ subsets: ["latin"] });

const roboto = Roboto({ subsets: ["latin"] });

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
