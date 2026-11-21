export interface CaseStudyItem {
  slug: string;
  draft: boolean;
  title: string;
  clientType: string;
  industry: string;
  challenge: string;
  approach: string[];
  results: {
    metric: string;
    label: string;
  }[];
  tools: string[];
  timeline: string;
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    slug: "msme-lead-generation-transformation",
    draft: true, // Marked draft: true - excluded from sitemap and public navigation
    title: "How an MSME Scaled Qualified Inbound Leads with Conversion-Focused Funnels",
    clientType: "Growing B2B & Retail Business",
    industry: "Manufacturing & Retail",
    challenge: "The business was spending on ad clicks but suffering from low inquiry quality, unverified phone numbers, and a slow, non-converting brochure website.",
    approach: [
      "Audited search query intent and deployed negative keyword lists to stop budget waste.",
      "Redesigned the mobile landing experience with direct WhatsApp lead routing.",
      "Introduced mandatory qualification filters on lead forms to eliminate non-serious submissions."
    ],
    results: [
      {
        metric: "{{TODO: real result - inquiry volume metric}}",
        label: "Increase in qualified inquiries"
      },
      {
        metric: "{{TODO: real result - CPL reduction metric}}",
        label: "Reduction in cost per qualified lead"
      },
      {
        metric: "{{TODO: real result - response time metric}}",
        label: "Lead response turnaround"
      }
    ],
    tools: ["Next.js", "Meta Ads Manager", "Google Ads", "Google Tag Manager", "WhatsApp Business API"],
    timeline: "60 Days",
    quote: {
      text: "{{TODO: real client quote once case study is published}}",
      author: "{{TODO: client contact name}}",
      role: "{{TODO: client designation}}"
    }
  }
];

export const publishedCaseStudies = caseStudiesData.filter((cs) => !cs.draft);
