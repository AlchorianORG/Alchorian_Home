import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://alchorian.com"),
  title: {
    default: "Alchorian — AI Hiring Ecosystem",
    template: "%s | Alchorian"
  },
  description:
    "Alchorian is an AI-powered hiring ecosystem with Aden for recruiters and Aria for candidates, improving hiring intent matching and project verification.",
  keywords: [
    "AI hiring platform",
    "ATS software",
    "AI recruitment",
    "project verification",
    "resume optimization",
    "Alchorian",
    "Aden ATS",
    "Aria hiring assistant"
  ],
  authors: [{ name: "Alchorian" }],
  creator: "Alchorian",
  publisher: "Alchorian",

  openGraph: {
    title: "Alchorian — AI Hiring Ecosystem",
    description:
      "Aden for recruiters. Aria for candidates. AI-powered hiring built for intent-based matching.",
    url: "https://alchorian.com",
    siteName: "Alchorian",
    images: [
      {
        url: "/alchorian.png",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Alchorian — AI Hiring Ecosystem",
    description:
      "AI-powered hiring ecosystem with Aden (ATS) and Aria (candidate platform).",
    images: ["/alchorian.png"],
  },

  robots: {
    index: true,
    follow: true
  }
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarDemo />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MW854SZGXZ"></script>
        <script>
          {`

    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-MW854SZGXZ');
  `}
        </script>


        {children}
      </body>
    </html>
  );
}
