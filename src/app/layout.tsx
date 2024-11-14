import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import { Work_Sans } from "next/font/google";
import "./globals.scss";
import JotaiProvider from "@/components/providers/jotai";
import TanstackProvider from "@/components/providers/tanstack";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const sfCompact = localFont({
  src: "./fonts/sf-compact-display-medium-5864711817c30.otf",
  variable: "--font-sf-compact-medium",
  weight: "100 900",
});

const avenirNext = localFont({
  src: "./fonts/AvenirNextLTPro-Regular.otf",
  variable: "--font-avenir-next",
  weight: "100 900",
});

const avenirNextBold = localFont({
  src: "./fonts/AvenirNextLTPro-Bold.otf",
  variable: "--font-avenir-next-bold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lendsqr - Admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sfCompact.variable} ${roboto.variable} ${avenirNext.variable} ${avenirNextBold.variable} ${workSans.variable}`}
      >
        <TanstackProvider>
          <JotaiProvider>{children}</JotaiProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
