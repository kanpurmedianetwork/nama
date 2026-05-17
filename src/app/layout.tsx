import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { TallyPopup } from "@/components/ui/TallyEmbed";

const syne = Syne({ 
  subsets: ["latin"], 
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexudyam.in"),
  title: "Nexudyam │ Brand Identity & Digital Marketing for Startups & Small Businesses │ Kanpur & UP",
  description: "Nexudyam helps startups, MSMEs & artists across Kanpur, Lucknow, Noida, Prayagraj & UP build brand identity, run paid ads, and grow online — starting at ₹4,999/mo.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased scroll-smooth`}>
      <body className="bg-background text-foreground min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <TallyPopup />
      </body>
    </html>
  );
}
