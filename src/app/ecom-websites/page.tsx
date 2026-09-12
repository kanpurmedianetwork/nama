import type { Metadata } from "next";
import { ShoppingBag, CreditCard, Truck, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "E-commerce Website Development (Shopify) in Kanpur | Nexudyam",
  description: "Custom Shopify e-commerce store setup, payment gateway integration, product catalog design, and conversion rate optimization for MSMEs in Kanpur & UP.",
  alternates: {
    canonical: "/ecom-websites",
  },
  openGraph: {
    title: "E-commerce Website Development (Shopify) in Kanpur | Nexudyam",
    description: "Custom Shopify e-commerce store setup, payment gateway integration, product catalog design, and conversion rate optimization for MSMEs in Kanpur & UP.",
    url: "https://www.nexudyam.in/ecom-websites",
    siteName: "Nexudyam",
    locale: "en_IN",
    type: "website",
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
    title: "E-commerce Website Development (Shopify) in Kanpur | Nexudyam",
    description: "Custom Shopify e-commerce store setup, payment gateway integration, product catalog design, and conversion rate optimization for MSMEs in Kanpur & UP.",
    images: ["/logo.svg"],
  },
};

export default function EcomWebsitesPage() {
  return (
    <>
      <JsonLd 
        type="BreadcrumbList"
        data={{
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.nexudyam.in"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "E-commerce Websites",
              item: "https://www.nexudyam.in/ecom-websites"
            }
          ]
        }}
      />
      <JsonLd 
        type="Service"
        data={{
          name: "E-commerce Website Development (Shopify)",
          description: "End-to-end Shopify store design, product catalog setup, payment gateway integration, and conversion optimization for Indian MSMEs.",
          provider: {
            "@type": "LocalBusiness",
            name: "Nexudyam"
          },
          url: "https://www.nexudyam.in/ecom-websites",
          areaServed: [
            { "@type": "City", name: "Kanpur" },
            { "@type": "City", name: "Lucknow" },
            { "@type": "State", name: "Uttar Pradesh" }
          ]
        }}
      />
      
      <div className="py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-brand/10 text-brand px-4 py-1.5 rounded-full text-sm font-bold tracking-tight uppercase mb-6">
              E-commerce & Retail Solutions
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              E-commerce & Shopify Website Development in Kanpur
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Turn your retail business into a 24/7 selling machine. We design custom, high-converting Shopify e-commerce stores with automated payment gateways, shipping integrations, and mobile-first checkouts.
            </p>
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-white px-8 py-4 rounded-full font-bold hover:bg-brand transition-colors shadow-lg"
            >
              <span>Build Your Shopify Store</span>
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-surface p-8 md:p-16 rounded-3xl border border-border mb-20">
            <div>
              <h2 className="font-display text-3xl font-bold mb-8">Everything You Need to Sell Online</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-border mr-4 shrink-0">
                    <ShoppingBag className="text-brand" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Custom Shopify Store Setup</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Mobile-responsive design customized with your branding, colors, high-res banners, and intuitive navigation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-border mr-4 shrink-0">
                    <CreditCard className="text-brand" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Payment Gateway Integration</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Full setup of Razorpay, Cashfree, UPI QR codes, and Cash on Delivery (COD) verification to maximize checkout success.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-border mr-4 shrink-0">
                    <Truck className="text-brand" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Automated Logistics & Shipping</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Integration with Shiprocket, Delhivery, or BlueDart for automated order pickup, tracking links, and customer SMS alerts.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-border mr-4 shrink-0">
                    <TrendingUp className="text-brand" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Conversion Rate Optimization</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      1-click checkout options, abandoned cart recovery via automated WhatsApp alerts, product upsells, and review widgets.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand/20 to-accent rounded-2xl h-full min-h-[400px] flex items-center justify-center border border-brand/20 relative overflow-hidden">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_black_1px,_transparent_1px)] [background-size:20px_20px]" />
               <div className="relative text-center p-8 bg-white/80 backdrop-blur-sm rounded-xl m-8 border border-white/50 shadow-xl max-w-sm">
                 <ShoppingBag size={48} className="text-brand mx-auto mb-4" />
                 <p className="font-display font-bold text-2xl text-foreground">Shopify Partner Agency</p>
                 <p className="text-sm text-muted-foreground mt-2">
                   Helping Kanpur & Uttar Pradesh retail brands, apparel stores, and manufacturers sell directly to customers nationwide.
                 </p>
               </div>
            </div>
          </div>

          {/* Deep Content Section for SEO */}
          <div className="max-w-4xl mx-auto space-y-8 bg-white p-8 md:p-12 rounded-2xl border border-border">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Why Indian MSMEs Are Choosing Shopify in 2026
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you run a boutique, manufacturing business, footwear brand, leather goods showroom, or FMCG company in Kanpur, relying solely on third-party marketplaces like Amazon or Flipkart eats up 15% to 35% of your margins in commission. With your own independent <strong className="text-foreground">Shopify e-commerce website</strong>, you own your customer database, protect your profit margins, and build lasting brand equity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nexudyam provides complete end-to-end Shopify setup: from domain registration, collection architecture, variant setup (sizes, colors), to high-speed hosting and payment gateway approval. We pair your Shopify storefront with our Meta Ads and Google Ads management to drive direct profitable traffic from day one.
            </p>
            <div className="pt-4 border-t border-border flex flex-wrap gap-4 items-center justify-between">
              <div>
                <p className="font-bold text-foreground">Ready to start selling online?</p>
                <p className="text-sm text-muted-foreground">Talk to our Shopify experts today for a free estimate.</p>
              </div>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand text-white px-6 py-3 rounded-full font-bold hover:bg-brand-dark transition-colors text-sm"
              >
                Chat with Shopify Specialist
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
