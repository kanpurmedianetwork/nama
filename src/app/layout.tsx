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
        url: "/logo.svg",
        width: 800,
        height: 600,
        alt: "Nexudyam Digital Marketing Agency Kanpur logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & Branding Agency in Kanpur | Nexudyam",
    description: "Nexudyam helps startups & MSMEs in Kanpur & UP get more customers. We design brands, build websites, and run Meta/Google Ads. Get a free audit today!",
    images: ["/logo.svg"],
  },
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
        {/* Suppress deprecation warnings from third-party scripts (e.g. GTM/gtag.js, Cloudflare) accessing deprecated browser APIs */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (typeof window !== 'undefined') {
                  // 1. Suppress Fledge / Protected Audience API warnings
                  if (window.navigator) {
                    const proto = Object.getPrototypeOf(window.navigator);
                    const keys = ['joinAdInterestGroup', 'runAdAuction', 'updateAdInterestGroups', 'leaveAdInterestGroup', 'protectedAudience', 'sharedStorage'];
                    if (proto) {
                      keys.forEach(function(key) {
                        try { delete proto[key]; } catch (e) {}
                      });
                    }
                    keys.forEach(function(key) {
                      try {
                        if (key in window.navigator) {
                          Object.defineProperty(window.navigator, key, { value: undefined, configurable: true });
                        }
                      } catch (e) {}
                    });
                  }
                  
                  // 2. Suppress SharedStorage API warnings
                  try {
                    if ('sharedStorage' in window) {
                      Object.defineProperty(window, 'sharedStorage', { value: undefined, configurable: true });
                    }
                  } catch (e) {}

                  // 3. Suppress StorageType.persistent warnings (from webkitStorageInfo / StorageType)
                  try {
                    if ('StorageType' in window) {
                      Object.defineProperty(window, 'StorageType', { value: undefined, configurable: true });
                    }
                  } catch (e) {}
                  try {
                    if ('webkitStorageInfo' in window) {
                      Object.defineProperty(window, 'webkitStorageInfo', { value: undefined, configurable: true });
                    }
                  } catch (e) {}
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      {/* Google tag (gtag.js) - loaded asynchronously after page is interactive */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0MD8HBWCWH"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0MD8HBWCWH');
        `}
      </Script>
      {/* Google Tag Manager - loaded asynchronously after page is interactive */}
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
