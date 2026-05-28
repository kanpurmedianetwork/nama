import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy │ Nexudyam",
  description: "Nexudyam's privacy policy explains how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="mb-16">
          <p className="font-mono text-sm text-subtle-foreground uppercase tracking-wider mb-4">
            Last updated: May 16, 2026
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Your privacy matters to us. This policy outlines how Nexudyam collects, uses, and safeguards your information.
          </p>
        </div>

        <div className="space-y-12 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              Nexudyam, headquartered in Kanpur, Uttar Pradesh, India, collects the following types of information when you use our website or services:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span><span><strong className="text-foreground">Personal Information:</strong> Name, email address, phone number, and business details provided through our contact form or WhatsApp communication.</span></li>
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span><span><strong className="text-foreground">Usage Data:</strong> Pages visited, time spent on pages, browser type, device type, and IP address collected through Google Analytics 4.</span></li>
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span><span><strong className="text-foreground">Cookies:</strong> We use essential and analytics cookies to improve your experience and understand how our website is used.</span></li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information collected to:</p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span>Respond to your inquiries and provide customer support</li>
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span>Deliver and improve our digital marketing, branding, and advertising services</li>
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span>Send service updates and relevant communications (with your consent)</li>
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span>Analyze website traffic and user behavior to improve our platform</li>
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span>Comply with legal obligations under Indian law</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Information Sharing</h2>
            <p>
              Nexudyam does not sell, trade, or rent your personal information to third parties. We may share your data only with trusted service providers who assist us in operating our website and delivering services (e.g., Google Analytics, Tally.so for forms, Meta for advertising), and only to the extent necessary. All third-party providers are bound by their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Our website is served over HTTPS, and we use secure third-party services for data collection and storage. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Third-Party Services</h2>
            <p className="mb-4">Our website integrates with the following third-party services:</p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span><strong className="text-foreground">Google Analytics 4</strong> — for website traffic analysis</li>
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span><strong className="text-foreground">Tally.so</strong> — for contact form submissions</li>
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span><strong className="text-foreground">WhatsApp (Meta)</strong> — for direct client communication</li>
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span><strong className="text-foreground">Google Maps</strong> — for location display</li>
            </ul>
            <p className="mt-4">Each service operates under its own privacy policy, and we encourage you to review them.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
            <p className="mb-4">Under applicable Indian data protection laws, you have the right to:</p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span>Access the personal data we hold about you</li>
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span>Request correction or deletion of your personal data</li>
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span>Withdraw consent for data processing at any time</li>
              <li className="flex items-start"><span className="text-foreground mr-3 font-bold">•</span>Lodge a complaint with the relevant data protection authority</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">7. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Contact form submissions and client communications are retained for the duration of our business relationship and for a reasonable period thereafter.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">8. Changes to This Policy</h2>
            <p>
              Nexudyam reserves the right to update this Privacy Policy at any time. Changes will be posted on this page with a revised "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="bg-surface border border-border p-8 rounded-2xl">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="mb-2">If you have any questions about this Privacy Policy, please contact us:</p>
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
