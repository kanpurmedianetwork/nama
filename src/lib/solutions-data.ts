export interface SolutionFaq {
  question: string;
  answer: string;
}

export interface SolutionCause {
  title: string;
  description: string;
}

export interface SolutionStep {
  step: string;
  title: string;
  description: string;
}

export interface SolutionItem {
  slug: string;
  problemTitle: string;
  customerQuote: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSub: string;
  whyItHappens: SolutionCause[];
  whatWeDo: SolutionStep[];
  pricingRange: string;
  pricingDetail: string;
  whoItsFor: string[];
  faqs: SolutionFaq[];
  relatedServices: { title: string; href: string }[];
  relatedUseCases: { title: string; href: string }[];
}

export const solutionsData: SolutionItem[] = [
  {
    slug: "ads-not-generating-leads",
    problemTitle: "I run ads but get low-quality leads",
    customerQuote: "We spend money every month on Facebook and Google ads, but we mostly get irrelevant clicks, wrong numbers, students, or inquiries from people who cannot afford our services.",
    metaTitle: "Fix Low-Quality Ad Leads | Meta & Google Ads Fix | Nexudyam",
    metaDescription: "Stop wasting ad spend on wrong clicks and tire-kickers. Nexudyam fixes your targeting, ad creative, and qualification funnels to bring high-intent buyer leads.",
    h1: "Stop Wasting Ad Spend on Unqualified Leads",
    heroSub: "We overhaul targeting parameters, replace generic lead forms with multi-step qualification filters, and align your messaging to attract paying customers rather than bargain hunters.",
    whyItHappens: [
      {
        title: "Broad Algorithmic Targeting Without Intent Signals",
        description: "Platforms like Meta optimize for the cheapest click or form fill unless strict negative audiences, custom exclusions, and high-intent targeting parameters are configured."
      },
      {
        title: "Zero Friction in Lead Forms",
        description: "One-click native autofill forms make it too easy for accidental clicks to become leads, flooding your sales pipeline with unresponsive numbers."
      },
      {
        title: "Disconnect Between Ad Promise and Offer",
        description: "Ads often promise free consultations or vague discounts without qualifying price expectations or delivery capability upfront."
      }
    ],
    whatWeDo: [
      {
        step: "01",
        title: "Audience Audit & Negative Exclusion",
        description: "We audit your ad account history, exclude low-intent demographics and competitor searches, and build hyper-targeted custom and lookalike audiences."
      },
      {
        step: "02",
        title: "Intent-Driven Creative & Copy Refresh",
        description: "We rewrite ad copy to call out ideal buyer pain points directly and eliminate vague promises that attract unqualified inquiries."
      },
      {
        step: "03",
        title: "Qualified Landing Pages & WhatsApp Routing",
        description: "We direct traffic to high-converting landing pages or WhatsApp business flows with qualification questions before the lead is submitted."
      },
      {
        step: "04",
        title: "Conversion Tracking & Optimization",
        description: "We configure Meta Pixel, Google Conversion Tags, and Server-Side CAPI to train algorithms on qualified lead actions rather than cheap clicks."
      }
    ],
    pricingRange: "₹9,999 - ₹18,999/month",
    pricingDetail: "Included in our Grow (₹9,999/mo) and Scale (₹18,999/mo) packages with ad setup, ongoing campaign optimization, and weekly performance reviews.",
    whoItsFor: [
      "B2B manufacturers receiving low-ticket consumer inquiries",
      "Healthcare clinics dealing with no-show appointment requests",
      "Coaching institutes flooded with non-serious student leads",
      "Real estate developers receiving invalid phone numbers"
    ],
    faqs: [
      {
        question: "Why do Meta ads produce so many fake or non-responsive leads?",
        answer: "Meta lead forms use native autofill, which lets users submit outdated phone numbers in one accidental click without friction. By switching to high-intent web landing pages or adding custom qualification screening questions, we filter out accidental submissions and ensure only motivated prospects contact you."
      },
      {
        question: "What minimum ad budget is recommended to fix lead quality?",
        answer: "We recommend starting with a minimum monthly ad spend of ₹10,000 to ₹15,000 paid directly to Meta or Google, alongside our management fee. This allows ad platform algorithms sufficient daily data to optimize toward qualified conversions rather than burning budget on cheap impressions."
      },
      {
        question: "How quickly can we see improvements in lead quality?",
        answer: "Most businesses see a noticeable improvement in lead quality within 7 to 14 days of launching restructured campaigns. Once qualification filters and intent-driven creatives go live, irrelevant inquiries drop immediately while sales conversations become more productive."
      },
      {
        question: "Do you guarantee a specific cost per lead (CPL)?",
        answer: "We focus on cost-per-qualified-lead rather than cheap vanity CPL. We establish benchmark ranges based on your industry and continuously optimize targeting and ad copy to lower customer acquisition costs while maintaining lead quality."
      }
    ],
    relatedServices: [
      { title: "Meta & Google Ads", href: "/services/meta-google-ads" },
      { title: "Website Development", href: "/services/website-development" }
    ],
    relatedUseCases: [
      { title: "Clinics & Doctors", href: "/use-cases/clinics-doctors" },
      { title: "Coaching & Education", href: "/use-cases/coaching-education" },
      { title: "B2B Manufacturers & Exporters", href: "/use-cases/b2b-manufacturers-exporters" }
    ]
  },
  {
    slug: "website-not-converting",
    problemTitle: "My website looks fine but doesn't convert",
    customerQuote: "We invested in a clean website and we get daily visitors from social media and search, but nobody fills out the contact form or messages us on WhatsApp.",
    metaTitle: "Fix Non-Converting Website | Conversion Rate Optimization | Nexudyam",
    metaDescription: "Does your website get visitors but zero inquiries? Nexudyam transforms passive brochure sites into high-converting sales assets with clear messaging and frictionless CTAs.",
    h1: "Turn Website Traffic into Inbound WhatsApp Leads & Phone Calls",
    heroSub: "Good design means nothing if visitors bounce within 5 seconds. We rebuild page hierarchy, speed up load times, clarify value propositions, and place high-intent conversion hooks where users look.",
    whyItHappens: [
      {
        title: "Vague Value Proposition Above the Fold",
        description: "Visitors cannot tell what problem you solve, who you serve, or why they should choose you within the critical first three seconds of landing on your page."
      },
      {
        title: "Hidden or Cumbersome Contact Points",
        description: "Forcing mobile visitors to navigate to a generic contact page with 8 form fields creates instant drop-off when they prefer a direct WhatsApp chat."
      },
      {
        title: "Slow Mobile Load Times & Heavy Assets",
        description: "Every additional second of load time reduces conversions by up to 20%. Cluttered themes and unoptimized images drive mobile users straight back to Google."
      }
    ],
    whatWeDo: [
      {
        step: "01",
        title: "Conversion Flow & Friction Audit",
        description: "We evaluate your mobile layout, scroll behavior, form friction, and bounce rate to pinpoint exactly where potential customers drop off."
      },
      {
        step: "02",
        title: "Value Proposition & Hero Restructuring",
        description: "We rewrite headings and subheadings with plain, benefit-led copy that communicates immediate value and proof without corporate jargon."
      },
      {
        step: "03",
        title: "One-Click Mobile CTAs (WhatsApp & Call)",
        description: "We integrate sticky, responsive WhatsApp buttons and direct phone call triggers designed for the Indian mobile shopping habit."
      },
      {
        step: "04",
        title: "Speed Optimization on Modern Next.js",
        description: "We optimize or rebuild key pages with Next.js and Tailwind CSS for sub-second mobile page loads and seamless interaction."
      }
    ],
    pricingRange: "₹9,999 one-time or included in Grow (₹9,999/mo)",
    pricingDetail: "Full 5-page custom conversion-ready Next.js website included in our Grow package (₹9,999/month) or as a standalone project.",
    whoItsFor: [
      "MSMEs whose websites function as static digital brochures",
      "Service providers losing mobile search traffic to competitors",
      "Consultants needing incoming consultation bookings",
      "Local businesses wanting direct customer phone calls"
    ],
    faqs: [
      {
        question: "Why is our website getting traffic without generating leads?",
        answer: "Most non-converting websites suffer from unclear value propositions above the fold, slow mobile loading speeds, and friction-heavy contact forms. When mobile visitors cannot immediately identify what you solve or contact you with one click, they leave and contact the next competitor."
      },
      {
        question: "Do we need to scrap our entire website or can it be fixed?",
        answer: "If your underlying CMS is responsive and modern, we can redesign key landing page sections, hero copy, and CTA structures. If the site is built on bloated, slow legacy themes, migrating to a lean Next.js codebase often delivers far higher conversion gains."
      },
      {
        question: "How important is WhatsApp integration for Indian website visitors?",
        answer: "Over 80% of Indian internet traffic is mobile, and WhatsApp is the preferred communication channel for prompt inquiries. Providing an instant WhatsApp CTA prefilled with context significantly increases conversion rates compared to static email forms."
      },
      {
        question: "What tracking is installed to measure conversion improvements?",
        answer: "We configure Google Tag Manager with Google Analytics 4 conversion events for every button click, WhatsApp initiation, phone call tap, and form submission, giving you exact data on which traffic sources generate leads."
      }
    ],
    relatedServices: [
      { title: "Website Development", href: "/services/website-development" },
      { title: "Brand Identity", href: "/services/brand-identity" }
    ],
    relatedUseCases: [
      { title: "D2C & Fashion", href: "/use-cases/d2c-fashion" },
      { title: "Clinics & Doctors", href: "/use-cases/clinics-doctors" },
      { title: "B2B Manufacturers & Exporters", href: "/use-cases/b2b-manufacturers-exporters" }
    ]
  },
  {
    slug: "not-showing-on-google",
    problemTitle: "I don't show up on Google or Maps",
    customerQuote: "When people search for our service or shop 'near me', our competitors show up in the top 3 Google Maps results and we are nowhere to be found.",
    metaTitle: "Rank on Google Maps & Local Search | Local SEO | Nexudyam",
    metaDescription: "Missing from Google Maps 3-Pack and local search results? Nexudyam optimizes your Google Business Profile and local citations to capture high-intent nearby customers.",
    h1: "Dominate Google Maps & Local Search in Your Target Cities",
    heroSub: "When prospective customers search for your services nearby, you belong in the top 3 map results. We optimize your Google Business Profile, fix citations, and build local trust.",
    whyItHappens: [
      {
        title: "Unclaimed or Incomplete Google Business Profile",
        description: "Missing categories, incorrect primary business attributes, unverified addresses, or sparse service descriptions prevent Google from ranking your profile."
      },
      {
        title: "Inconsistent NAP (Name, Address, Phone) Data",
        description: "Variations in business names, old telephone numbers, and mismatched addresses across online directories erode search engine trust."
      },
      {
        title: "Lack of Review Velocity and Keyword Signals",
        description: "Profiles without a steady cadence of detailed customer reviews containing relevant service keywords consistently lose ground to active competitors."
      }
    ],
    whatWeDo: [
      {
        step: "01",
        title: "Profile Verification & Category Structuring",
        description: "We configure primary and secondary Google business categories, operational hours, service areas, and rich service catalogs."
      },
      {
        step: "02",
        title: "Geo-Targeted Content & Photo Optimization",
        description: "We upload high-resolution geotagged imagery, optimized product cards, and weekly Google Business posts with localized keywords."
      },
      {
        step: "03",
        title: "Review Acquisition Strategy & Templates",
        description: "We implement QR codes and automated WhatsApp review request templates that prompt satisfied clients to leave keyword-rich 5-star reviews."
      },
      {
        step: "04",
        title: "Multi-City & Service Area Local SEO",
        description: "For businesses serving multiple localities, we structure dedicated service-area landing pages linked to business directories."
      }
    ],
    pricingRange: "₹4,999 - ₹9,999/month",
    pricingDetail: "Included in Launch (₹4,999/mo) for single locations and Grow (₹9,999/mo) for multi-category and active local ranking campaigns.",
    whoItsFor: [
      "Retail storefronts, dental and healthcare clinics, and salons",
      "Restaurants, cloud kitchens, and cafes targeting local diners",
      "Service area contractors, repair technicians, and local consultants",
      "Educational coaching institutes competing for local student admissions"
    ],
    faqs: [
      {
        question: "How long does it take to rank in Google Maps 3-Pack?",
        answer: "Initial local visibility improvements typically occur within 3 to 6 weeks of comprehensive profile verification and NAP optimization. Competitive keywords in dense commercial markets require 60 to 90 days of consistent review velocity and local citation building."
      },
      {
        question: "Can service-area businesses without a public storefront rank on Google Maps?",
        answer: "Yes. Google allows service-area businesses to hide their physical street address while defining specific cities and postal codes they serve. We optimize your service radius and configure location pages to maximize discovery without compromising privacy."
      },
      {
        question: "How do Google reviews impact local search rankings?",
        answer: "Review count, star rating, velocity, and keyword mentions inside customer reviews are among Google's top local ranking factors. Profiles that consistently receive authentic reviews with service keywords rank substantially higher than dormant competitors."
      },
      {
        question: "What is the difference between Google Business Profile and website SEO?",
        answer: "Google Business Profile optimization drives discovery in Google Maps and local 3-pack listings for 'near me' searches. Website SEO focuses on organic search rankings across nationwide or multi-city informational and transactional queries. Both work together for maximum discoverability."
      }
    ],
    relatedServices: [
      { title: "Google Business Profile", href: "/services/google-business-profile" },
      { title: "Website Development", href: "/services/website-development" }
    ],
    relatedUseCases: [
      { title: "Clinics & Doctors", href: "/use-cases/clinics-doctors" },
      { title: "Coaching & Education", href: "/use-cases/coaching-education" }
    ]
  },
  {
    slug: "brand-or-product-launch",
    problemTitle: "I'm launching a brand or product",
    customerQuote: "We are introducing a new product or startup to the market, but we don't have a recognizable brand identity, professional assets, or a structured launch plan to make noise.",
    metaTitle: "Startup & Brand Launch Marketing | Go-To-Market | Nexudyam",
    metaDescription: "Launching a new brand or product? Nexudyam provides comprehensive visual identity, packaging design, launch websites, and targeted awareness campaigns.",
    h1: "Launch Your New Brand with Professional Polish & Market Traction",
    heroSub: "Early impressions define your customer trust. We build your complete brand identity, launch-ready website, and introductory marketing campaigns so you hit the ground running.",
    whyItHappens: [
      {
        title: "Amateur Visual Assets Undermining Credibility",
        description: "Using generic logo templates or inconsistent typography signals low quality to discerning customers before they even try your product."
      },
      {
        title: "No Cohesive Go-To-Market Timeline",
        description: "Launching without sequenced pre-buzz, teaser campaigns, and verified conversion mechanisms leads to silent launches with zero initial momentum."
      },
      {
        title: "Scattered Execution Across Disconnected Freelancers",
        description: "Hiring separate freelance designers, developers, and copywriters leads to fragmented brand guidelines, conflicting deadlines, and inflated costs."
      }
    ],
    whatWeDo: [
      {
        step: "01",
        title: "Core Identity & Style Guide Delivery",
        description: "We deliver custom vector logo marks, typography standards, color palettes, and comprehensive brand guidelines in 7 days."
      },
      {
        step: "02",
        title: "Collateral & Marketing Asset Creation",
        description: "We produce stationery, digital pitch decks, social media banners, and product packaging mockups tailored to your target demographic."
      },
      {
        step: "03",
        title: "Launch Website & Lead Capture Hub",
        description: "We design and deploy a responsive Next.js landing page or Shopify storefront optimized for day-one buyer conversions."
      },
      {
        step: "04",
        title: "Launch Campaign & Digital PR Push",
        description: "We orchestrate paid Meta and Google ad campaigns, social teaser announcements, and influencer outreach to drive initial customer discovery."
      }
    ],
    pricingRange: "₹4,999 - ₹18,999/month",
    pricingDetail: "Brand identity starts at ₹4,999 (Launch package). Full launch execution with custom website and paid ads managed under Grow (₹9,999/mo) and Scale (₹18,999/mo).",
    whoItsFor: [
      "Early-stage tech startups preparing for public rollout",
      "D2C founders launching consumer goods or apparel lines",
      "New retail showrooms, clinics, and professional consulting practices",
      "Legacy family businesses establishing a modern digital subsidiary"
    ],
    faqs: [
      {
        question: "How long does a complete brand identity package take to deliver?",
        answer: "Our core brand identity design is delivered within 7 business days, including primary logo marks, color palettes, typography guidelines, and social media starter templates. Complete launch programs with custom websites and campaigns take 2 to 3 weeks."
      },
      {
        question: "Do we receive original vector files and copyright ownership?",
        answer: "Yes. Upon full project completion, you receive complete intellectual property rights and editable vector files (.AI, .SVG, .PNG, .PDF) alongside comprehensive brand usage guidelines."
      },
      {
        question: "Can Nexudyam handle both the creative branding and performance marketing?",
        answer: "Yes. Nexudyam operates as a single integrated partner handling brand strategy, custom web engineering, and paid ad execution under one roof, eliminating the need to coordinate between multiple disjointed freelancers."
      },
      {
        question: "What is included in the launch campaign setup?",
        answer: "We configure targeted Meta and Google ad campaigns, create teaser video scripts and ad graphics, set up conversion tracking, and build lead capture pages to drive inbound inquiries from day one."
      }
    ],
    relatedServices: [
      { title: "Brand Identity", href: "/services/brand-identity" },
      { title: "Meta & Google Ads", href: "/services/meta-google-ads" },
      { title: "Website Development", href: "/services/website-development" }
    ],
    relatedUseCases: [
      { title: "D2C & Fashion", href: "/use-cases/d2c-fashion" },
      { title: "B2B Manufacturers & Exporters", href: "/use-cases/b2b-manufacturers-exporters" }
    ]
  },
  {
    slug: "consistent-content",
    problemTitle: "I can't post consistently",
    customerQuote: "Between managing orders, employees, and daily operations, we have no time to brainstorm Reel concepts, write captions, or post regularly on Instagram and LinkedIn.",
    metaTitle: "Consistent Social Media Marketing & Content | Nexudyam",
    metaDescription: "Struggling to post consistently on social media? Nexudyam delivers monthly content calendars, Reels scripts, and social graphics in 48 hours. You just approve.",
    h1: "Stay Active & Relevant on Social Media Without Wasting Hours Daily",
    heroSub: "Stop staring at a blank screen wondering what to post. We deliver complete 30-day content calendars, engaging Reels scripts, and professional visuals. You review and approve in 15 minutes.",
    whyItHappens: [
      {
        title: "Founder Burnout & Operational Time Constraints",
        description: "Business owners need to focus on delivering products and closing deals; managing daily content planning without a dedicated team leads to sporadic posting."
      },
      {
        title: "Lack of Clear Content Themes and Angles",
        description: "Without structured content pillars (educational, proof, product, behind-the-scenes), every post feels like reinventing the wheel."
      },
      {
        title: "Slow Legacy Agency Turnaround",
        description: "Traditional agencies take 3 to 4 weeks to deliver monthly plans and charge high retainers that small businesses cannot sustain."
      }
    ],
    whatWeDo: [
      {
        step: "01",
        title: "Content Pillar Architecture",
        description: "We define 4 to 5 core themes tailored to your audience's questions, objections, and buying motivations."
      },
      {
        step: "02",
        title: "Rapid 48-Hour Calendar Drafting",
        description: "We combine intelligent AI research workflows with expert human copywriting to deliver a full 30-day calendar within 48 hours."
      },
      {
        step: "03",
        title: "Short-Form Video (Reels) Scripts & Hooks",
        description: "We provide high-retention video scripts with 3-second visual hooks, audio recommendations, and on-screen caption notes."
      },
      {
        step: "04",
        title: "15-Minute Approval Workflow",
        description: "You review the complete month's assets in one clean batch, suggest adjustments via WhatsApp, and approve with zero friction."
      }
    ],
    pricingRange: "₹4,999 - ₹9,999/month",
    pricingDetail: "Launch package includes 8 AI-assisted posts/month (₹4,999/mo). Grow package includes 16 posts + 4 Reels/month (₹9,999/mo).",
    whoItsFor: [
      "Founders who haven't posted on Instagram or LinkedIn in over a month",
      "Retail store owners wanting regular product showcases",
      "B2B business owners building personal authority on LinkedIn",
      "Healthcare practitioners needing educational patient content"
    ],
    faqs: [
      {
        question: "How much time does the founder need to commit each month?",
        answer: "Approximately 15 to 30 minutes per month. We prepare the entire 30-day content calendar, graphics, captions, and Reels scripts in advance. You simply review the batch, request any specific edits, and approve."
      },
      {
        question: "Are social media posts generated purely by AI or reviewed by humans?",
        answer: "Every piece of content is researched and outlined using AI tools and then rewritten, fact-checked, and branded by senior human copywriters to ensure natural tone, industry relevance, and cultural context."
      },
      {
        question: "Do you also handle publishing and scheduling?",
        answer: "Yes. Once you approve the monthly calendar, our team formats, schedules, and monitors publication across your connected Instagram, Facebook, and LinkedIn profiles."
      },
      {
        question: "How do Reels scripts help drive actual business inquiries?",
        answer: "Our short-form video scripts focus on answering common customer problems and addressing purchase hesitations with clear calls-to-action directing viewers to message your WhatsApp or link in bio."
      }
    ],
    relatedServices: [
      { title: "Social Media Marketing", href: "/services/social-media-marketing" },
      { title: "AI Content Marketing", href: "/services/ai-content-marketing" }
    ],
    relatedUseCases: [
      { title: "D2C & Fashion", href: "/use-cases/d2c-fashion" },
      { title: "Clinics & Doctors", href: "/use-cases/clinics-doctors" }
    ]
  },
  {
    slug: "sell-online-shopify",
    problemTitle: "I want to sell online",
    customerQuote: "We have proven offline products or an expanding retail catalog, but we need an online store that handles Indian payment gateways, shipping logistics, and converts visitors on mobile.",
    metaTitle: "Shopify E-Commerce Store Setup & Growth | Nexudyam",
    metaDescription: "Ready to launch an e-commerce brand? Nexudyam builds custom Shopify stores with Razorpay, COD, automated WhatsApp notifications, and mobile checkout optimization.",
    h1: "Launch a High-Converting Shopify E-Commerce Store",
    heroSub: "Turn your product line into an online revenue engine. We design custom Shopify stores integrated with Indian payment gateways, automated logistics, and mobile-first checkout.",
    whyItHappens: [
      {
        title: "Complex E-commerce Setup Hurdles",
        description: "Configuring payment gateways, Cash on Delivery (COD) verification, shipping aggregators, GST invoices, and mobile responsive menus overwhelms offline retailers."
      },
      {
        title: "High Cart Abandonment on Mobile Devices",
        description: "Slow page speeds, confusing multi-step checkouts, and lack of trusted Indian payment options cause up to 75% of shoppers to abandon carts."
      },
      {
        title: "No Post-Purchase Engagement Systems",
        description: "Missing automated WhatsApp order confirmations, tracking updates, and abandoned cart reminders leads to lost repeat sales and high RTO (Return to Origin) rates."
      }
    ],
    whatWeDo: [
      {
        step: "01",
        title: "Custom Shopify Architecture & Theme Design",
        description: "We configure a modern, lightweight Shopify store customized to your brand colors, typography, and product collections."
      },
      {
        step: "02",
        title: "Indian Payment Gateway & COD Integration",
        description: "We integrate Razorpay, UPI, credit/debit cards, and OTP-verified Cash on Delivery (COD) to maximize checkout confidence and reduce bogus orders."
      },
      {
        step: "03",
        title: "Logistics & Shipping Automation",
        description: "We connect leading Indian shipping aggregators (Shiprocket, NimbusPost) for automated label printing, pickup scheduling, and live tracking."
      },
      {
        step: "04",
        title: "WhatsApp Abandoned Cart & Performance Ads",
        description: "We set up automated WhatsApp cart recovery messages and launch targeted Meta product catalog ads to drive scalable first-time orders."
      }
    ],
    pricingRange: "₹18,999 one-time or included in Scale (₹18,999/mo)",
    pricingDetail: "Full custom Shopify store development, payment setup, product catalog import, and ad launch included in our Scale package (₹18,999/month).",
    whoItsFor: [
      "Offline retailers and wholesalers transitioning to direct-to-consumer (D2C)",
      "Apparel, jewelry, cosmetic, and specialty food manufacturers",
      "Artisans and niche creators with physical product catalogs",
      "Brands wanting to sell directly without high marketplace commission fees"
    ],
    faqs: [
      {
        question: "Why should we build on Shopify rather than marketplaces like Amazon or Flipkart?",
        answer: "Selling on your own Shopify store gives you full customer data ownership, higher margins without 20-30% marketplace commissions, direct WhatsApp marketing opportunities, and long-term brand equity that marketplaces do not provide."
      },
      {
        question: "How do you help reduce Cash on Delivery (COD) return-to-origin (RTO) rates?",
        answer: "We configure OTP verification on COD orders, automatic WhatsApp order confirmations, and address validation checks to verify customer intent before shipping orders, drastically cutting costly return rates."
      },
      {
        question: "Which Indian payment gateways do you integrate?",
        answer: "We integrate Razorpay, Cashfree, PhonePe Payment Gateway, and Paytm, enabling instant checkout with UPI (Google Pay, PhonePe, Paytm), credit/debit cards, net banking, and EMI options."
      },
      {
        question: "How long does it take to launch a functional Shopify store?",
        answer: "A standard 20 to 50 product Shopify store is typically designed, configured, tested, and launched within 10 to 14 business days, including payment gateway testing and shipping integration."
      }
    ],
    relatedServices: [
      { title: "Shopify E-commerce", href: "/ecom-websites" },
      { title: "Meta & Google Ads", href: "/services/meta-google-ads" }
    ],
    relatedUseCases: [
      { title: "D2C & Fashion", href: "/use-cases/d2c-fashion" },
      { title: "B2B Manufacturers & Exporters", href: "/use-cases/b2b-manufacturers-exporters" }
    ]
  }
];
