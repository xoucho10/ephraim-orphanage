import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ephraim Orphanage Home - Uganda | 47 Children Need You",
  description: "We care for 47 orphans in Uganda - 30 boys, 17 girls. Donate via MTN MoMo 0752 748110 or GoFundMe. 100% goes to children. Psalms 22:6",
  keywords: ["orphanage Uganda", "donate orphans Uganda", "Ephraim Orphanage Home", "sponsor child Uganda"],
  openGraph: {
    title: "Ephraim Orphanage Home",
    description: "47 children need food, school, shelter. Your $10 feeds a child for 7 days.",
    images: ["/hero1.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FFF2E5]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}