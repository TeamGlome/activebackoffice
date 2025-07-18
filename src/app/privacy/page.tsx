import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="flex h-16 items-center justify-between px-6 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center font-bold text-white text-sm">
              ABO
            </div>
            <h1 className="text-xl font-semibold text-white">Active Back Office</h1>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="text-slate-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-300">
              Last updated: January 18, 2025
            </p>
          </div>

          <div className="prose prose-slate prose-invert max-w-none">
            <div className="bg-slate-800/30 rounded-2xl p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <p className="text-slate-300 leading-relaxed">
                  We collect information you provide directly to us, such as when you create an account,
                  use our services, or contact us for support. This may include your name, email address,
                  phone number, company information, and property management data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p className="text-slate-300 leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services,
                  process transactions, send communications, and provide customer support. We may also
                  use your information for AI-powered analytics to help improve compliance monitoring
                  and predictive maintenance features.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
                <p className="text-slate-300 leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may
                  share your information with trusted service providers who assist us in operating
                  our platform, conducting business, or serving our users, provided they agree to
                  keep this information confidential.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                <p className="text-slate-300 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect
                  your personal information against unauthorized access, alteration, disclosure, or
                  destruction. This includes encryption of data in transit and at rest, regular
                  security audits, and access controls.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Integrations</h2>
                <p className="text-slate-300 leading-relaxed">
                  Our platform integrates with third-party services such as QuickBooks, Plaid, Google Drive,
                  and others. When you connect these services, you may be sharing information with these
                  third parties according to their own privacy policies. We recommend reviewing their
                  privacy practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
                <p className="text-slate-300 leading-relaxed">
                  You have the right to access, update, or delete your personal information. You may
                  also request that we restrict or stop processing your data. To exercise these rights,
                  please contact us at privacy@activebackoffice.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Changes to This Policy</h2>
                <p className="text-slate-300 leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any
                  changes by posting the new privacy policy on this page and updating the "Last updated"
                  date at the top of this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
                <p className="text-slate-300 leading-relaxed">
                  If you have any questions about this privacy policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-slate-700/50 rounded-lg">
                  <p className="text-slate-300">
                    Email: privacy@activebackoffice.com<br />
                    Phone: +1 (555) 123-4567<br />
                    Address: 123 Technology Drive, Suite 400, New York, NY 10001
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
