import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://caspianworkforcegroup.com"),

  title: {
    default: "Caspian Workforce Group | International Recruitment Solutions",
    template: "%s | Caspian Workforce Group",
  },

  description:
    "Caspian Workforce Group connects European employers with qualified international professionals through transparent recruitment, workforce planning, and long-term partnerships.",

  keywords: [
    "international recruitment",
    "workforce solutions",
    "staffing agency",
    "European employers",
    "international hiring",
    "recruitment Azerbaijan",
    "foreign workforce",
    "labour recruitment",
    "workforce partner",
    "recruitment Europe",
    "Caspian Workforce Group",
  ],

  authors: [
    {
      name: "Caspian Workforce Group",
    },
  ],

  creator: "Caspian Workforce Group",

  publisher: "Caspian Workforce Group",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Caspian Workforce Group",
    description:
      "Connecting European employers with qualified international talent.",
    url: "https://caspianworkforcegroup.com",
    siteName: "Caspian Workforce Group",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/hero-globe.png",
        width: 1200,
        height: 630,
        alt: "Caspian Workforce Group",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Caspian Workforce Group",
    description:
      "Connecting European employers with qualified international talent.",

    images: ["/hero-globe.png"],
  },

  alternates: {
    canonical: "https://caspianworkforcegroup.com",
  },
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><Header/><main>{children}</main><Footer/><CookieBanner/></body></html>;
}
