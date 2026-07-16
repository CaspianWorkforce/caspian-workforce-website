import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: { default: "Caspian Workforce Group", template: "%s | Caspian Workforce Group" },
  description: "International workforce solutions connecting European employers with qualified international talent.",
  metadataBase: new URL("https://caspianworkforcegroup.com"),
  openGraph: {
    title: "Caspian Workforce Group",
    description: "International Workforce Solutions",
    url: "https://caspianworkforcegroup.com",
    siteName: "Caspian Workforce Group",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><Header/><main>{children}</main><Footer/><CookieBanner/></body></html>;
}
