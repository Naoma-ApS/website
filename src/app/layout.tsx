import { Nav } from "@components/Nav";
import { Footer } from "@components/Footer";

import "@styles/globals.css";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@lib/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | NAOMA",
    default: "Rådgivning i harmoni",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <Providers>
        <body
          className={`font-sans ${inter.variable} max-w-screen overflow-x-clip bg-white text-sm  font-extralight text-black md:text-base`}
          suppressHydrationWarning
        >
          <Nav />
          <div className="pb-12">{children}</div>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
