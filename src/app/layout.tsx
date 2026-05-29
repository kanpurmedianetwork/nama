import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { TallyPopup } from "@/components/ui/TallyEmbed";
import Script from "next/script";

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
  keywords: [
    "digital marketing agency in kanpur",
    "branding agency in kanpur",
    "website development company in kanpur",
    "best digital marketing company in kanpur",
    "local seo services in kanpur",
    "social media marketing agency in kanpur",
    "google ads agency in kanpur",
    "logo design services in kanpur",
    "startup marketing agency in up",
    "msme marketing agency kanpur",
    "lead generation agency in kanpur",
    "affordable digital marketing packages"
  ],
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0MD8HBWCWH" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-0MD8HBWCWH');
            `,
          }}
        />
      </head>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TW7KHTGT');
        `}
      </Script>
      <body className="bg-background text-foreground min-h-screen flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TW7KHTGT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
