import type { Metadata } from "next";
import { PricingCard } from "@/components/ui/PricingCard";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Pricing │ Affordable Digital Marketing Packages │ Nexudyam",
  description: "Simple monthly packages starting ₹4,999. Brand identity, social media, ads management, and website development for Indian small businesses.",
  keywords: ["digital marketing packages price", "affordable marketing packages", "branding cost for startups", "website design packages msme", "lead generation pricing india", "social media management packages"],
};

const faqData = [
  {
    question: "What is Nexudyam and what does it do?",
    answer: "Nexudyam is a next-generation entrepreneurship platform based in Kanpur, India. We help small businesses, MSMEs, and individual creators build their brand identity, grow their digital presence through social media and paid advertising — all under one roof at affordable prices."
  },
  {
    question: "How much does Nexudyam charge?",
    answer: "Our packages start at ₹4,999 per month for the Launch plan, which includes brand identity design, Google Business Profile setup, and 8 AI-powered social posts. Our most popular Grow plan is ₹9,999/month and includes a website and ads setup."
  },
  {
    question: "Are there any hidden costs?",
    answer: "No. The pricing listed is exactly what you pay Nexudyam. For ads management, the ad spend (budget paid directly to Google/Facebook) is separate and decided by you, starting as low as ₹2,000."
  }
];

export default function PricingPage() {
  return (
    <>
      <JsonLd 
        type="FAQPage"
        data={{
          mainEntity: faqData.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer
            }
          }))
        }}
      />
      <div className="py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Simple Packages. Real Growth.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer simple monthly pricing packages designed for real business growth. No hidden fees or corporate jargon — just real results for Indian MSMEs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
            <PricingCard 
              name="Launch"
              price="₹4,999"
              target="Idea-stage businesses"
              features={[
                "Brand identity (logo + palette + guide)",
                "Google Business Profile setup",
                "8 AI-powered social posts/month",
                "WhatsApp support (4-hour response)"
              ]}
            />
            <PricingCard 
              name="Grow"
              price="₹9,999"
              target="Growing brands"
              isPopular={true}
              features={[
                "Everything in Launch, plus:",
                "5-page website development",
                "Meta Ads + Google Ads setup",
                "16 posts + 4 Reels/month",
                "Monthly performance report"
              ]}
            />
            <PricingCard 
              name="Scale"
              price="₹18,999"
              target="Established businesses"
              features={[
                "Everything in Grow, plus:",
                "Full ads management",
                "Event promotion (1/month)",
                "Artist management services",
                "Priority support (2-hour response)"
              ]}
            />
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-center mb-10">Pricing FAQs</h2>
            <Accordion items={faqData} />
          </div>
        </div>
      </div>
    </>
  );
}
