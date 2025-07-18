import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-xl text-slate-300">
              Last updated: January 18, 2025
            </p>
          </div>

          <div className="prose prose-slate prose-invert max-w-none">
            <div className="bg-slate-800/30 rounded-2xl p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-slate-300 leading-relaxed">
                  By accessing or using the Active Back Office platform, you agree to be bound by these
                  Terms of Service and all applicable laws and regulations. If you do not agree with
                  any of these terms, you are prohibited from using or accessing this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                <p className="text-slate-300 leading-relaxed">
                  Active Back Office provides an AI-powered property management platform that includes
                  compliance monitoring, financial integrations, maintenance management, and analytics
                  tools. Our service is designed to help property managers streamline operations and
                  maintain compliance with applicable regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
                <p className="text-slate-300 leading-relaxed">
                  To access certain features of our service, you must create an account. You are
                  responsible for maintaining the confidentiality of your account credentials and
                  for all activities that occur under your account. You agree to notify us immediately
                  of any unauthorized use of your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Acceptable Use</h2>
                <p className="text-slate-300 leading-relaxed">
                  You agree to use our service only for lawful purposes and in accordance with these
                  Terms. You may not use our service to violate any applicable laws or regulations,
                  infringe upon the rights of others, or engage in any fraudulent or harmful activities.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Payment Terms</h2>
                <p className="text-slate-300 leading-relaxed">
                  Subscription fees are billed in advance on a monthly or annual basis. All fees are
                  non-refundable except as required by law. We reserve the right to change our pricing
                  with 30 days' notice to existing subscribers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Data and Privacy</h2>
                <p className="text-slate-300 leading-relaxed">
                  Your use of our service is also governed by our Privacy Policy. We take data security
                  seriously and implement appropriate measures to protect your information. However,
                  you acknowledge that no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Third-Party Integrations</h2>
                <p className="text-slate-300 leading-relaxed">
                  Our platform integrates with various third-party services. These integrations are
                  subject to the terms and conditions of the respective third-party providers. We
                  are not responsible for the availability, accuracy, or functionality of third-party
                  services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
                <p className="text-slate-300 leading-relaxed">
                  In no event shall Active Back Office be liable for any indirect, incidental, special,
                  consequential, or punitive damages, including without limitation, loss of profits,
                  data, use, goodwill, or other intangible losses, resulting from your use of the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Termination</h2>
                <p className="text-slate-300 leading-relaxed">
                  We may terminate or suspend your account and access to our service immediately,
                  without prior notice, for any reason, including if you breach these Terms of Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
                <p className="text-slate-300 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 p-4 bg-slate-700/50 rounded-lg">
                  <p className="text-slate-300">
                    Email: legal@activebackoffice.com<br />
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
