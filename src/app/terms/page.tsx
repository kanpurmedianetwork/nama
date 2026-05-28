import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service │ Nexudyam",
  description: "Nexudyam's terms of service outline the rules, guidelines, and agreements for using our digital marketing and branding services.",
};

export default function TermsPage() {
  return (
    <div className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="mb-16">
          <p className="font-mono text-sm text-subtle-foreground uppercase tracking-wider mb-4">
            Last updated: May 16, 2026
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Please read these terms carefully before using the Nexudyam website or engaging our services.
          </p>
        </div>

        <div className="space-y-12 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Nexudyam website (nexudyam.in) or any services provided by Nexudyam, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services. Nexudyam is operated by Akash Kumar, with its headquarters in Kanpur, Uttar Pradesh, India.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Services</h2>
            <p className="mb-4">
              Nexudyam provides digital marketing, brand identity design, social media marketing, paid advertising management, website development, AI content marketing, event promotion, and artist management services. The scope, deliverables, and timelines of each engagement will be agreed upon between Nexudyam and the client before work commences.
            </p>
            <p>
              Service packages and pricing are as listed on our website. Nexudyam reserves the right to modify pricing with reasonable notice. Existing agreements will be honored at their agreed-upon rates for the duration of the engagement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Client Obligations</h2>
            <p className="mb-4">As a client, you agree to:</p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span>Provide accurate and complete information required for service delivery</li>
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span>Respond to approval requests and feedback in a timely manner</li>
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span>Ensure you have the rights to any content, logos, or materials you provide to us</li>
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span>Make payments as per the agreed schedule</li>
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span>Not use our services for any unlawful or prohibited purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Payment Terms</h2>
            <p className="mb-4">
              All service packages are billed monthly unless otherwise agreed in writing. Payments are due at the beginning of each billing cycle. Ad spend budgets (for Meta Ads, Google Ads) are separate from Nexudyam's service fees and are paid directly to the respective advertising platforms.
            </p>
            <p>
              In case of non-payment, Nexudyam reserves the right to pause or terminate services after providing written notice. Refunds are handled on a case-by-case basis at Nexudyam's discretion.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              Upon full payment, all deliverables created specifically for the client (logos, brand guidelines, website code, social media content) become the property of the client. Nexudyam retains the right to showcase work in our portfolio unless the client requests otherwise in writing.
            </p>
            <p>
              The Nexudyam brand name, logo, website design, and proprietary tools remain the exclusive property of Nexudyam and may not be used, copied, or reproduced without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
            <p className="mb-4">
              Nexudyam strives to deliver the best possible results for every client. However, we do not guarantee specific outcomes such as search engine rankings, social media follower counts, or revenue increases, as these depend on numerous external factors beyond our control.
            </p>
            <p>
              To the maximum extent permitted by applicable Indian law, Nexudyam shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">7. Termination</h2>
            <p>
              Either party may terminate the service engagement with 15 days written notice. Upon termination, the client will be billed for work completed up to the date of termination. Any deliverables completed and paid for will be transferred to the client. Nexudyam reserves the right to terminate services immediately in cases of misuse, non-payment, or violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">8. Website Usage</h2>
            <p className="mb-4">When using the Nexudyam website, you agree not to:</p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span>Attempt to gain unauthorized access to any portion of the website</li>
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span>Use any automated means to scrape or collect data from the website</li>
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span>Transmit any harmful code, viruses, or malicious software</li>
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span>Use the website in any way that could damage or impair its availability</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">9. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Kanpur, Uttar Pradesh.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">10. Changes to Terms</h2>
            <p>
              Nexudyam reserves the right to modify these Terms of Service at any time. Updated terms will be posted on this page with a revised date. Continued use of our website or services after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="bg-surface border border-border p-8 rounded-2xl">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="mb-2">If you have any questions about these Terms of Service, please contact us:</p>
            <ul className="space-y-2 mt-4">
              <li
                dangerouslySetInnerHTML={{
                  __html: '<strong class="text-foreground">Email:</strong> <!--email_off-->hello@nexudyam.in<!--/email_off-->'
                }}
              />
              <li><strong className="text-foreground">Phone:</strong> +91 91618 81100</li>
              <li><strong className="text-foreground">Address:</strong> Kanpur, Uttar Pradesh, India</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
