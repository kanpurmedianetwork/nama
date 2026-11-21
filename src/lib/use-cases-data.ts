export interface UseCaseFaq {
  question: string;
  answer: string;
}

export interface UseCaseItem {
  slug: string;
  industry: string;
  headline: string;
  metaTitle: string;
  metaDescription: string;
  situation: string;
  typicalGoal: string;
  whatWeSetUp: {
    channels: string[];
    assets: string[];
  };
  examplePlan: {
    budgetRange: string;
    activities: string[];
  };
  expectedTimeline: {
    phase: string;
    duration: string;
    deliverables: string;
    outcomePlaceholder: string;
  }[];
  faqs: UseCaseFaq[];
  relatedSolutions: { title: string; href: string }[];
  relatedServices: { title: string; href: string }[];
}

export const useCasesData: UseCaseItem[] = [
  {
    slug: "clinics-doctors",
    industry: "Clinics & Doctors",
    headline: "Patient Lead Generation & Local Map Rankings for Healthcare Practitioners",
    metaTitle: "Digital Marketing for Clinics & Doctors | Nexudyam",
    metaDescription: "Acquire more qualified patient appointments with Google Maps 3-Pack optimization, high-intent local search ads, and educational health content.",
    situation: "Clinics, dental practices, diagnostic centers, and specialized doctors rely heavily on localized patient trust and proximity. Many practices struggle with low visibility on Google Maps 'near me' searches, empty consultation slots during weekdays, and high patient acquisition costs from unvetted directories.",
    typicalGoal: "Consistently generate qualified patient appointment bookings and direct clinic calls while establishing medical authority in their city and neighborhood.",
    whatWeSetUp: {
      channels: [
        "Google Business Profile (Map Pack)",
        "Google Search Ads (High-intent symptom/specialist queries)",
        "WhatsApp Business Appointment Bot & Routing",
        "Meta Ads (Preventive care checkups & specialty treatments)"
      ],
      assets: [
        "Fast-loading clinic landing page with 1-click WhatsApp booking",
        "Verified Google Maps listing with doctor credentials and clinic photos",
        "Patient FAQ and educational Reels scripts for preventive healthcare",
        "Automated WhatsApp appointment reminder and review request templates"
      ]
    },
    examplePlan: {
      budgetRange: "₹15,000 - ₹35,000/month (ad spend + ₹9,999 agency package)",
      activities: [
        "Google Business Profile optimization and weekly medical Q&A updates",
        "Google Search campaign targeting 'dentist near me', 'pediatrician in [city]', etc.",
        "8 educational health awareness social posts and 2 patient guidance Reels",
        "Automated review collection system for verified clinic patients"
      ]
    },
    expectedTimeline: [
      {
        phase: "Week 1 - 2: Setup & Verification",
        duration: "14 days",
        deliverables: "Claim and verify Google Business Profile, configure categories, build mobile appointment page, configure WhatsApp routing.",
        outcomePlaceholder: "{{TODO: real result - clinic onboarding benchmark}}"
      },
      {
        phase: "Week 3 - 6: Local Launch & Ad Calibration",
        duration: "30 days",
        deliverables: "Launch Google search campaigns on high-intent symptom queries, initiate local review generation, publish first batch of educational health posts.",
        outcomePlaceholder: "{{TODO: real result - initial qualified patient inquiries count}}"
      },
      {
        phase: "Month 2+: Growth & Repeat Patient Flow",
        duration: "Ongoing",
        deliverables: "Optimize negative search keywords, scale local map pack authority, expand treatment-specific landing pages.",
        outcomePlaceholder: "{{TODO: real result - patient acquisition cost reduction metric}}"
      }
    ],
    faqs: [
      {
        question: "How do doctors comply with Indian medical advertising regulations online?",
        answer: "We ensure all marketing copy adheres strictly to ethical medical communication guidelines, emphasizing educational health awareness, doctor qualifications, clinic amenities, and verified patient reviews rather than unsubstantiated cure claims or commercial discounting."
      },
      {
        question: "How do patients book appointments through our digital campaigns?",
        answer: "Campaigns direct prospective patients to an intuitive mobile page where they can initiate a prefilled WhatsApp booking chat or place a direct telephone call to your reception desk in one tap."
      },
      {
        question: "Can we target patients within a specific neighborhood radius?",
        answer: "Yes. Both Google Search Ads and Meta Ads allow radius geotargeting down to a 3km to 10km radius around your physical clinic address to ensure ad budget is spent exclusively on nearby residents."
      },
      {
        question: "What package covers digital marketing for healthcare clinics?",
        answer: "Our ₹9,999/month 'Grow' package is specifically tailored for clinics, covering custom landing page development, Google Business Profile management, Google/Meta ads setup, and monthly patient education content."
      }
    ],
    relatedSolutions: [
      { title: "I don't show up on Google or Maps", href: "/solutions/not-showing-on-google" },
      { title: "I run ads but get low-quality leads", href: "/solutions/ads-not-generating-leads" }
    ],
    relatedServices: [
      { title: "Google Business Profile", href: "/services/google-business-profile" },
      { title: "Meta & Google Ads", href: "/services/meta-google-ads" }
    ]
  },
  {
    slug: "d2c-fashion",
    industry: "D2C & Fashion",
    headline: "Scale Online Orders & Brand Equity for Direct-to-Consumer Apparel Brands",
    metaTitle: "Digital Marketing for D2C & Fashion Brands | Nexudyam",
    metaDescription: "Launch and scale your fashion or lifestyle brand with high-converting Shopify stores, Meta catalog ads, WhatsApp cart recovery, and influencer Reels.",
    situation: "Indian apparel, footwear, jewelry, and lifestyle brands face rising customer acquisition costs (CAC) on Meta ads, high return-to-origin (RTO) rates on Cash on Delivery orders, and intense competition from marketplace aggregators.",
    typicalGoal: "Build a standalone direct-to-consumer online store on Shopify that generates predictable daily orders with profitable return on ad spend (ROAS) and low RTO.",
    whatWeSetUp: {
      channels: [
        "Shopify E-commerce Store (Mobile-first)",
        "Meta Ads (Instagram Feed & Reels Catalog Ads)",
        "Google Shopping & Performance Max Campaigns",
        "Automated WhatsApp Notifications & Abandoned Cart Recovery"
      ],
      assets: [
        "Lightweight Shopify storefront with one-page mobile checkout",
        "High-contrast product lookbooks and lifestyle photo grids",
        "Short-form Instagram Reels highlighting fabric, fit, and styling",
        "OTP verification widget for Cash on Delivery checkout"
      ]
    },
    examplePlan: {
      budgetRange: "₹25,000 - ₹60,000/month (ad spend + ₹18,999 agency package)",
      activities: [
        "Shopify storefront conversion optimization and payment gateway integration",
        "Meta Advantage+ Shopping campaigns with dynamic creative testing",
        "16 Instagram posts and 4 trend-focused styling Reels monthly",
        "Automated WhatsApp abandoned cart sequence with dynamic discount triggers"
      ]
    },
    expectedTimeline: [
      {
        phase: "Week 1 - 2: Store Build & Tracking Setup",
        duration: "14 days",
        deliverables: "Deploy Shopify store, integrate Razorpay & Shiprocket, set up Meta Pixel and Conversions API (CAPI), import product catalog.",
        outcomePlaceholder: "{{TODO: real result - Shopify store launch speed metric}}"
      },
      {
        phase: "Week 3 - 6: Launch Campaigns & Creative Testing",
        duration: "30 days",
        deliverables: "Launch Meta catalog ads and top-of-funnel lifestyle video ads, test headline variations, activate WhatsApp recovery automation.",
        outcomePlaceholder: "{{TODO: real result - initial ROAS and order volume}}"
      },
      {
        phase: "Month 2+: Scaling & Retention Optimization",
        duration: "Ongoing",
        deliverables: "Scale winning ad sets, launch Google Performance Max campaigns, implement VIP customer WhatsApp broadcast flows for new drops.",
        outcomePlaceholder: "{{TODO: real result - blended customer acquisition cost and repeat purchase rate}}"
      }
    ],
    faqs: [
      {
        question: "How do you help D2C fashion brands minimize Cash on Delivery RTO rates?",
        answer: "We implement mandatory OTP phone number verification on COD checkouts, automated WhatsApp order confirmation workflows with an instant cancellation option, and fraud address filtering to prevent non-deliverable orders."
      },
      {
        question: "Do you handle product photography or do we provide assets?",
        answer: "Clients provide primary product photographs and garment samples. We handle post-production retouching, graphic design overlays, banner creation, and video editing for social and ad creatives."
      },
      {
        question: "What platform is best for starting a fashion brand online in India?",
        answer: "Shopify is the gold standard for D2C brands due to its seamless integration with Indian payment gateways (Razorpay, PhonePe), shipping aggregators (Shiprocket, NimbusPost), and automated WhatsApp notification apps."
      },
      {
        question: "What package includes Shopify setup and full ads management?",
        answer: "Our ₹18,999/month 'Scale' package includes end-to-end Shopify store configuration, catalog management, Meta and Google ads management, and priority support."
      }
    ],
    relatedSolutions: [
      { title: "I want to sell online", href: "/solutions/sell-online-shopify" },
      { title: "I run ads but get low-quality leads", href: "/solutions/ads-not-generating-leads" }
    ],
    relatedServices: [
      { title: "Shopify E-commerce", href: "/ecom-websites" },
      { title: "Meta & Google Ads", href: "/services/meta-google-ads" }
    ]
  },
  {
    slug: "coaching-education",
    industry: "Coaching & Education",
    headline: "Fill Batches & Drive Qualified Student Enrollments for Institutes",
    metaTitle: "Digital Marketing for Coaching & Education Institutes | Nexudyam",
    metaDescription: "Generate qualified student admissions and parent inquiries for coaching centers, test prep institutes, and vocational academies across India.",
    situation: "Coaching institutes, entrance exam centers (IIT-JEE, NEET, UPSC), and skill training academies face seasonal admission spikes and high competition. Offline pamphlet distribution and hoardings deliver unmeasurable results while generic digital ads flood counselors with unresponsive student numbers.",
    typicalGoal: "Consistently fill upcoming batches with qualified student inquiries, parent consultation calls, and entrance seminar registrations at a predictable cost per admission.",
    whatWeSetUp: {
      channels: [
        "Meta Lead Ads with Custom Qualification Screening",
        "Google Search Ads targeting high-intent course keywords",
        "Google Business Profile for local center visibility",
        "WhatsApp Business automated brochure delivery bot"
      ],
      assets: [
        "Course-specific landing pages highlighting faculty credentials and curriculum",
        "Student success interview scripts and syllabus download lead magnets",
        "Parent counselor WhatsApp chat funnel with instant brochure delivery",
        "Local citation profiles and entrance test registration forms"
      ]
    },
    examplePlan: {
      budgetRange: "₹20,000 - ₹50,000/month (ad spend + ₹9,999 agency package)",
      activities: [
        "Google Search ads for '[course name] coaching in [city]' and related intent keywords",
        "Meta lead campaigns with qualifying questions (target exam year, parent vs student)",
        "Automated WhatsApp follow-up delivering demo class links and fee brochures",
        "Center Google Business Profile optimization for local map pack rankings"
      ]
    },
    expectedTimeline: [
      {
        phase: "Week 1 - 2: Campaign Architecture & Assets",
        duration: "14 days",
        deliverables: "Design course landing page, write qualification forms, configure WhatsApp auto-responder, verify center map listing.",
        outcomePlaceholder: "{{TODO: real result - coaching launch timeline benchmark}}"
      },
      {
        phase: "Week 3 - 6: Batch Admission Campaign Sprint",
        duration: "30 days",
        deliverables: "Launch search and social campaigns, review inbound lead quality daily with admission counselors, adjust screening questions.",
        outcomePlaceholder: "{{TODO: real result - qualified counseling inquiries volume}}"
      },
      {
        phase: "Month 2+: Evergreen Admissions & Retargeting",
        duration: "Ongoing",
        deliverables: "Retarget website visitors with demo lecture clips, scale campaigns for upcoming batch intakes, optimize cost-per-enrolled-student.",
        outcomePlaceholder: "{{TODO: real result - enrollment conversion rate metric}}"
      }
    ],
    faqs: [
      {
        question: "How do you filter out non-serious student leads who don't pick up phone calls?",
        answer: "We replace one-click instant forms with multi-step qualification questions asking for current academic class, target exam year, and parent contact details, filtering out accidental clicks before the lead reaches your counselors."
      },
      {
        question: "Can we run campaigns timed specifically for seasonal admission months?",
        answer: "Yes. We scale ad spend aggressively during peak seasonal months (e.g. March to July for academic batches) and transition to evergreen branding, scholarship test promotions, and early-bird registrations during off-season months."
      },
      {
        question: "How quickly can admission counselors follow up with inbound leads?",
        answer: "With our WhatsApp routing integration, student and parent inquiries are delivered instantly to your counselor's WhatsApp or CRM within seconds of form submission, ensuring rapid follow-up while intent is highest."
      },
      {
        question: "What package is recommended for educational institutes?",
        answer: "Our ₹9,999/month 'Grow' package covers dedicated course landing page development, complete Meta and Google Ads campaign management, and monthly performance reporting."
      }
    ],
    relatedSolutions: [
      { title: "I run ads but get low-quality leads", href: "/solutions/ads-not-generating-leads" },
      { title: "My website looks fine but doesn't convert", href: "/solutions/website-not-converting" }
    ],
    relatedServices: [
      { title: "Meta & Google Ads", href: "/services/meta-google-ads" },
      { title: "Website Development", href: "/services/website-development" }
    ]
  },
  {
    slug: "b2b-manufacturers-exporters",
    industry: "B2B Manufacturers & Exporters",
    headline: "Generate High-Value Buyer RFQs & Domestic Wholesale Inquiries",
    metaTitle: "B2B Lead Generation for Manufacturers & Exporters | Nexudyam",
    metaDescription: "Generate qualified domestic wholesale inquiries and export RFQs with technical SEO, Google Search ads, B2B landing pages, and digital product catalogs.",
    situation: "Indian industrial manufacturers, packaging suppliers, component makers, and export houses often rely on trade shows, cold calling, or listing platforms like IndiaMART where buyers solicit dozens of competing low-ball quotes simultaneously.",
    typicalGoal: "Establish independent digital discovery on Google and capture exclusive, high-ticket Request for Quotes (RFQs) directly from procurement managers, corporate buyers, and institutional clients.",
    whatWeSetUp: {
      channels: [
        "Google Search Ads targeting exact commercial B2B product specifications",
        "Technical B2B Product Catalog Website (Next.js)",
        "LinkedIn Thought Leadership & Executive Positioning",
        "Google Business Profile for manufacturing facilities"
      ],
      assets: [
        "Downloadable technical specification sheets and PDF catalogs with lead gates",
        "Commercial RFQ submission forms with MOQ (Minimum Order Quantity) fields",
        "Factory capability photos, ISO certification badges, and export credentials",
        "Automated WhatsApp inquiry notification directly to senior sales engineers"
      ]
    },
    examplePlan: {
      budgetRange: "₹25,000 - ₹50,000/month (ad spend + ₹9,999 agency package)",
      activities: [
        "Google Search campaign on high-intent industrial keywords (e.g. '[product] manufacturer in India')",
        "Development and maintenance of high-performance Next.js product catalog",
        "Exclusion of consumer, retail, and DIY search terms to avoid wasted clicks",
        "Monthly search query audits to uncover new emerging wholesale product terms"
      ]
    },
    expectedTimeline: [
      {
        phase: "Week 1 - 2: Technical B2B Positioning",
        duration: "14 days",
        deliverables: "Audit existing website, structure product category hierarchy, draft RFQ form with MOQ selectors, compile negative keyword lists.",
        outcomePlaceholder: "{{TODO: real result - B2B setup benchmark}}"
      },
      {
        phase: "Week 3 - 6: Campaign Activation & Lead Screening",
        duration: "30 days",
        deliverables: "Launch Google search campaigns on technical specification queries, monitor inbound RFQ quality, filter non-wholesale inquiries.",
        outcomePlaceholder: "{{TODO: real result - initial RFQ volume and deal value}}"
      },
      {
        phase: "Month 2+: Long-Term Technical SEO & Authority",
        duration: "Ongoing",
        deliverables: "Publish detailed industrial application guides, build authoritative industry directory citations, expand international export search targeting.",
        outcomePlaceholder: "{{TODO: real result - B2B contract conversion metric}}"
      }
    ],
    faqs: [
      {
        question: "How do you prevent retail consumers from submitting small retail orders on our B2B site?",
        answer: "We configure mandatory Minimum Order Quantity (MOQ) fields on all inquiry forms, include commercial wholesale terms in ad copy headlines, and aggressively negative-match retail search queries (e.g. 'single piece', 'buy online', 'retail price')."
      },
      {
        question: "Can you target international buyers for export-oriented manufacturers?",
        answer: "Yes. Google Search Ads allow precise geographic targeting in specific export destination countries (e.g. GCC, North America, Southeast Asia, Europe) targeting procurement keywords like 'Indian exporter of [product]'."
      },
      {
        question: "How does an independent website compare to IndiaMART or TradeIndia listings?",
        answer: "Marketplace listings force you into cutthroat price wars where your quote is shared with 10 competitors. An independent web presence builds proprietary buyer relationships, establishes brand authority, and commands premium pricing without intermediary commissions."
      },
      {
        question: "What package best suits manufacturing companies?",
        answer: "Our ₹9,999/month 'Grow' package provides custom website engineering, Google Search ad management, and monthly performance tracking ideal for mid-sized manufacturers."
      }
    ],
    relatedSolutions: [
      { title: "I run ads but get low-quality leads", href: "/solutions/ads-not-generating-leads" },
      { title: "My website looks fine but doesn't convert", href: "/solutions/website-not-converting" }
    ],
    relatedServices: [
      { title: "Website Development", href: "/services/website-development" },
      { title: "Meta & Google Ads", href: "/services/meta-google-ads" }
    ]
  },
  // Additional use cases linked from homepage row
  {
    slug: "salons-wellness",
    industry: "Salons & Wellness",
    headline: "Drive High-Ticket Bridal & Wellness Bookings for Salons & Spas",
    metaTitle: "Digital Marketing for Salons & Wellness Spas | Nexudyam",
    metaDescription: "Attract premium bridal makeup bookings, salon appointments, and local foot traffic with Google Maps 3-Pack and Instagram video marketing.",
    situation: "Salons, makeup artists, and luxury spas depend on seasonal bridal rushes and recurring local clients. Many struggle with slow weekday appointments and high client turnover.",
    typicalGoal: "Secure high-margin bridal packages and build a reliable base of weekly recurring salon clients.",
    whatWeSetUp: {
      channels: ["Google Business Profile", "Instagram Reels", "WhatsApp Booking Bot"],
      assets: ["Bridal portfolio landing page", "Lookbook video scripts", "Automated review QR cards"]
    },
    examplePlan: {
      budgetRange: "₹10,000 - ₹20,000/month",
      activities: ["Local Google Maps optimization", "Instagram bridal campaigns", "Weekly client booking reminders"]
    },
    expectedTimeline: [
      {
        phase: "Month 1",
        duration: "30 days",
        deliverables: "Google Business Profile overhaul, Instagram bridal highlight revamp.",
        outcomePlaceholder: "{{TODO: real result - bridal inquiries benchmark}}"
      }
    ],
    faqs: [
      {
        question: "How do you attract high-paying bridal clients?",
        answer: "We showcase high-resolution video transformations on Instagram Reels and run targeted geo-ads aimed at engaged couples within a 15km radius."
      }
    ],
    relatedSolutions: [{ title: "I don't show up on Google or Maps", href: "/solutions/not-showing-on-google" }],
    relatedServices: [{ title: "Google Business Profile", href: "/services/google-business-profile" }]
  },
  {
    slug: "real-estate",
    industry: "Real Estate",
    headline: "Generate Qualified Homebuyer Leads & Site Visits for Builders & Brokers",
    metaTitle: "Digital Marketing for Real Estate Builders & Brokers | Nexudyam",
    metaDescription: "Generate verified site-visit bookings and high-intent property buyer inquiries with targeted Google Search and Meta Ads.",
    situation: "Builders, developers, and property consultants waste large ad budgets on accidental form fills and invalid phone numbers from tire-kickers who cannot afford the project budget.",
    typicalGoal: "Deliver verified site-visit bookings and high-ticket investor inquiries directly to sales teams.",
    whatWeSetUp: {
      channels: ["Google Search Ads (Location & project intent)", "Meta Lead Gen (with budget qualification)", "WhatsApp Site Visit Scheduler"],
      assets: ["Project landing page with floor plans", "Interactive virtual tour integration", "Automated CRM lead routing"]
    },
    examplePlan: {
      budgetRange: "₹30,000 - ₹1,00,000/month",
      activities: ["High-intent Google search campaigns", "Meta retargeting with drone walk-throughs", "Call center WhatsApp integration"]
    },
    expectedTimeline: [
      {
        phase: "Month 1",
        duration: "30 days",
        deliverables: "Landing page launch, multi-step qualification ad setup.",
        outcomePlaceholder: "{{TODO: real result - qualified site visit booking rate}}"
      }
    ],
    faqs: [
      {
        question: "How do you filter buyers who can afford luxury property?",
        answer: "We include explicit starting prices in ad creatives and require budget bracket selection in lead forms, eliminating unqualified clicks before they submit."
      }
    ],
    relatedSolutions: [{ title: "I run ads but get low-quality leads", href: "/solutions/ads-not-generating-leads" }],
    relatedServices: [{ title: "Meta & Google Ads", href: "/services/meta-google-ads" }]
  },
  {
    slug: "restaurants-cafes",
    industry: "Restaurants & Cafes",
    headline: "Boost Table Reservations & Footfall for Dining Establishments",
    metaTitle: "Digital Marketing for Restaurants & Cafes | Nexudyam",
    metaDescription: "Pack your tables and drive weekend dining reservations with Google Maps 3-Pack rankings, food influencer Reels, and local Instagram ads.",
    situation: "Cafes, fine dining restaurants, and cloud kitchens face steep 25-35% commission fees on food aggregator apps and struggle to bring repeat guests directly through their doors.",
    typicalGoal: "Drive steady direct table reservations, corporate party bookings, and loyal repeat diners without aggregator dependency.",
    whatWeSetUp: {
      channels: ["Google Maps 3-Pack Optimization", "Instagram Food Reels", "WhatsApp Table Booking"],
      assets: ["Mobile-friendly digital food menu", "Ambiance & culinary video shorts", "Google review card system"]
    },
    examplePlan: {
      budgetRange: "₹10,000 - ₹25,000/month",
      activities: ["Google Maps menu & photo updates", "Local weekend dining Instagram ads", "Review velocity campaigns"]
    },
    expectedTimeline: [
      {
        phase: "Month 1",
        duration: "30 days",
        deliverables: "Google Business optimization, digital menu setup, weekend promo launch.",
        outcomePlaceholder: "{{TODO: real result - weekend table reservation uptick}}"
      }
    ],
    faqs: [
      {
        question: "How do local diners discover our cafe on Google Maps?",
        answer: "By optimizing your profile for categories like 'best cafe', 'family dining', and tagging signature food dishes, Google elevates your listing in 'near me' food searches."
      }
    ],
    relatedSolutions: [{ title: "I don't show up on Google or Maps", href: "/solutions/not-showing-on-google" }],
    relatedServices: [{ title: "Google Business Profile", href: "/services/google-business-profile" }]
  },
  {
    slug: "home-local-services",
    industry: "Home & Local Services",
    headline: "Generate Direct Calls & Service Bookings for Contractors & Technicians",
    metaTitle: "Digital Marketing for Home & Local Services | Nexudyam",
    metaDescription: "Rank at the top of local searches and capture emergency service calls for electricians, plumbers, interior designers, and repair businesses.",
    situation: "Home contractors, interior designers, solar installers, and repair specialists need steady local inquiries but struggle to compete with nationwide aggregator portals.",
    typicalGoal: "Generate direct customer phone calls and WhatsApp service appointments from homeowners within their immediate service territory.",
    whatWeSetUp: {
      channels: ["Google Call-Only Ads", "Google Business Profile (Service Area)", "WhatsApp Quick Quote"],
      assets: ["1-click call landing page", "Service territory map configuration", "Review acquisition automation"]
    },
    examplePlan: {
      budgetRange: "₹10,000 - ₹25,000/month",
      activities: ["Google local call ads", "Google Business Profile updates", "Local citation building"]
    },
    expectedTimeline: [
      {
        phase: "Month 1",
        duration: "30 days",
        deliverables: "Service area configuration, Google call-only ad campaign rollout.",
        outcomePlaceholder: "{{TODO: real result - incoming service calls volume}}"
      }
    ],
    faqs: [
      {
        question: "What are Google Call-Only Ads?",
        answer: "These are mobile search ads that directly prompt the searcher to tap and call your business phone number immediately, without requiring them to visit a website first."
      }
    ],
    relatedSolutions: [{ title: "I don't show up on Google or Maps", href: "/solutions/not-showing-on-google" }],
    relatedServices: [{ title: "Google Business Profile", href: "/services/google-business-profile" }]
  },
  {
    slug: "creators-artists",
    industry: "Creators & Artists",
    headline: "Build Digital Presence, Brand Deals & Event Bookings for Creators",
    metaTitle: "Digital Marketing & Growth for Creators & Artists | Nexudyam",
    metaDescription: "Establish professional media kits, portfolio websites, and booking pipelines for musical artists, creators, and public speakers.",
    situation: "Musicians, creators, performers, and speakers often manage bookings via messy DMs without a professional portfolio, verified web presence, or structured brand collaboration pipeline.",
    typicalGoal: "Streamline event bookings, build an authoritative digital press kit, and capture paid brand partnership inquiries.",
    whatWeSetUp: {
      channels: ["Digital Press Kit & Portfolio Website", "Instagram Authority Positioning", "Inquiry Routing Bot"],
      assets: ["Artist portfolio website with video showreels", "Rate card and tech rider PDF", "Direct booking inquiry funnel"]
    },
    examplePlan: {
      budgetRange: "₹10,000 - ₹20,000/month",
      activities: ["Portfolio website development", "Content calendar for showreels", "Direct booking inquiries setup"]
    },
    expectedTimeline: [
      {
        phase: "Month 1",
        duration: "30 days",
        deliverables: "Launch portfolio site and digital rate card, optimize social link-in-bio.",
        outcomePlaceholder: "{{TODO: real result - event booking conversion rate}}"
      }
    ],
    faqs: [
      {
        question: "How does a custom portfolio website help creators get higher booking rates?",
        answer: "Corporate event organizers and festival managers prefer booking artists with verified websites, professional tech riders, and clear contact channels over informal Instagram DM conversations."
      }
    ],
    relatedSolutions: [{ title: "I'm launching a brand or product", href: "/solutions/brand-or-product-launch" }],
    relatedServices: [{ title: "Website Development", href: "/services/website-development" }]
  }
];
