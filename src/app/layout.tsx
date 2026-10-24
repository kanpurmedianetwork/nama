import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { TallyPopup } from "@/components/ui/TallyEmbed";
import { DiwaliPopup } from "@/components/ui/DiwaliPopup";
import Script from "next/script";
import { JsonLd, organization, website } from "@/lib/schema";

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
  metadataBase: new URL("https://www.nexudyam.in"),
  title: "Digital Marketing & Branding Agency in Kanpur | Nexudyam",
  description: "Nexudyam helps startups & MSMEs in Kanpur & UP get more customers. We design brands, build websites, and run Meta/Google Ads. Get a free audit today!",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.nexudyam.in",
    siteName: "Nexudyam",
    title: "Digital Marketing & Branding Agency in Kanpur | Nexudyam",
    description: "Nexudyam helps startups & MSMEs in Kanpur & UP get more customers. We design brands, build websites, and run Meta/Google Ads. Get a free audit today!",
    images: [
      {
        url: "https://www.nexudyam.in/og/home.png",
        width: 1200,
        height: 630,
        alt: "Nexudyam - Digital Marketing & Branding Agency in Kanpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & Branding Agency in Kanpur | Nexudyam",
    description: "Nexudyam helps startups & MSMEs in Kanpur & UP get more customers. We design brands, build websites, and run Meta/Google Ads. Get a free audit today!",
    images: ["https://www.nexudyam.in/og/home.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/logo.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="bg-background text-foreground min-h-screen flex flex-col">
        {/* Google tag (gtag.js) - loaded asynchronously via lazyOnload to protect Core Web Vitals */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0MD8HBWCWH"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0MD8HBWCWH');
          `}
        </Script>
        {/* Google Tag Manager - loaded asynchronously via lazyOnload */}
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TW7KHTGT');
          `}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TW7KHTGT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <JsonLd data={organization} />
        <JsonLd data={website} />
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <TallyPopup />
        <DiwaliPopup />
      </body>
    </html>
  );
}
