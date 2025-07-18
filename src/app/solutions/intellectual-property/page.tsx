import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, CheckCircle, Eye, Shield, Zap, Scale, Users, Clock, AlertTriangle } from "lucide-react"

export default function IntellectualPropertyPage() {
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
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" className="text-slate-400 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link href="https://app.activebackoffice.com">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Access Portal
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 mb-4">
              Intellectual Property Protection
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Automated Trademark Protection
              <span className="text-blue-400"> at Scale</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Enable law firms and companies to monitor, document, and act on trademark infringements
              across the web—automatically and at scale. Complete detection, evidence capture, takedown
              automation, and legal case tracking in one streamlined interface.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Problem</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Manual Monitoring is Impossible</h4>
                    <p className="text-slate-400 text-sm">Tracking trademark violations across thousands of websites and marketplaces is overwhelming</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Time-Intensive Evidence Collection</h4>
                    <p className="text-slate-400 text-sm">Screenshots, documentation, and legal filing preparation takes hours per case</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Inconsistent Takedown Processes</h4>
                    <p className="text-slate-400 text-sm">Each platform has different requirements, making systematic enforcement difficult</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Our Solution</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">97% automated detection accuracy</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Legal-grade evidence collection</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Platform-specific takedown automation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Complete case management workflow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Complete IP Protection Pipeline</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Trademark Monitoring Engine */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">🔍 Trademark Monitoring Engine</CardTitle>
                <p className="text-slate-400">
                  Automated detection across web, marketplaces, and social platforms
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Upload trademark assets via secure dashboard
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Automated web monitoring with rate-limited scanning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Marketplace APIs: Amazon, Shopify, Facebook, TikTok
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    AI image recognition with usage monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Configurable alerts with throttling controls
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Evidence Capture Engine */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-white">📸 Evidence Capture Engine</CardTitle>
                <p className="text-slate-400">
                  Legal-grade evidence collection with full audit trail
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Automated screenshots, URLs, HTML source
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    AI-generated violation summaries via NLP
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Timestamped evidence with chain of custody
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Brand-specific document repositories
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Court-admissible evidence standards
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Violation Auto-Reporting Engine */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-red-400" />
                </div>
                <CardTitle className="text-white">🚨 Violation Auto-Reporting Engine</CardTitle>
                <p className="text-slate-400">
                  Semi-automated takedown requests with human oversight
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Rate-limited API integrations with usage monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Controlled automation with mandatory legal review
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Evidence attachment with audit trail
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Multi-tier approval workflow for compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Complete submission logs and abuse detection
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Legal Case Tracker */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">⚖️ Legal Case Tracker</CardTitle>
                <p className="text-slate-400">
                  Complete case management with team collaboration
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Full case metadata and status workflow
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Team assignment, deadlines, and reminders
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Document templates for cease & desist letters
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Role-based access control (RBAC)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Export capabilities (PDF, Docx, HTML)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Access Control & Risk Mitigation */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Access Control & Risk Mitigation
            </h2>
            <p className="text-xl text-slate-300">
              Enterprise-grade security and usage controls to ensure responsible automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Login Protection */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Login Protection</CardTitle>
                <p className="text-slate-400">
                  Multi-layered authentication and access controls
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Role-based access (Admin, Analyst, Legal Reviewer)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    OAuth2 with MFA support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Session limits and IP monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Suspicious activity detection
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Usage Throttling */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-yellow-400" />
                </div>
                <CardTitle className="text-white">Usage Throttling</CardTitle>
                <p className="text-slate-400">
                  Controlled automation with built-in safeguards
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Brand upload limits per plan
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Scan frequency caps (daily, weekly)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Evidence storage quotas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    API rate limits for submissions
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Audit & Abuse Detection */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <CardTitle className="text-white">Audit & Abuse Detection</CardTitle>
                <p className="text-slate-400">
                  Proactive monitoring and abuse prevention
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Automated alerts for excessive usage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Manual review triggers for suspicious patterns
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Optional CAPTCHA and bot detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Complete audit trail for compliance
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Tiered Pricing Plans (With Risk Controls)
            </h2>
            <p className="text-xl text-slate-300">
              Secure, controlled intellectual property protection with built-in safeguards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Solo Plan */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl">Solo</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">$149</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <p className="text-slate-400 mt-2">Perfect for solo practitioners</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    1 brand, 3 active cases/month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Manual takedown requests
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Basic monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Evidence collection & storage
                  </li>
                </ul>
                <div className="bg-slate-700/50 rounded-lg p-3 mt-4 mb-6">
                  <p className="text-slate-300 text-sm font-semibold mb-1">Risk Controls:</p>
                  <p className="text-slate-400 text-xs">2 users max, weekly scanning</p>
                </div>
                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-slate-800/50 border-blue-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl">Pro</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">$599</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <p className="text-slate-400 mt-2">Best for growing law firms</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    10 brands, full web scanning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Auto-form filling with review
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    AI-powered detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Advanced case workflows
                  </li>
                </ul>
                <div className="bg-slate-700/50 rounded-lg p-3 mt-4 mb-6">
                  <p className="text-slate-300 text-sm font-semibold mb-1">Risk Controls:</p>
                  <p className="text-slate-400 text-xs">5 users max, daily scanning</p>
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl">Enterprise</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">$1,499</span>
                  <span className="text-slate-400">+/month</span>
                </div>
                <p className="text-slate-400 mt-2">For large law firms & IP portfolios</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Unlimited brands with usage monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Full automation with controls
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Priority support & legal templates
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Rate-limited API access
                  </li>
                </ul>
                <div className="bg-slate-700/50 rounded-lg p-3 mt-4 mb-6">
                  <p className="text-slate-300 text-sm font-semibold mb-1">Risk Controls:</p>
                  <p className="text-slate-400 text-xs">10 users max, hourly scanning, usage-based scaling</p>
                </div>
                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Usage-Based Add-ons */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Usage-Based Add-ons</h3>
              <p className="text-lg text-slate-300">
                Optional enhancements to extend your plan capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="p-6">
                  <div className="text-2xl mb-3">📈</div>
                  <h4 className="text-white font-semibold mb-2">Extra Brands</h4>
                  <p className="text-2xl font-bold text-orange-400 mb-2">$15</p>
                  <p className="text-slate-400 text-sm">per brand/month beyond plan limit</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="p-6">
                  <div className="text-2xl mb-3">📋</div>
                  <h4 className="text-white font-semibold mb-2">Additional Cases</h4>
                  <p className="text-2xl font-bold text-blue-400 mb-2">$30</p>
                  <p className="text-slate-400 text-sm">per case beyond monthly quota</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="p-6">
                  <div className="text-2xl mb-3">📄</div>
                  <h4 className="text-white font-semibold mb-2">Legal Documents</h4>
                  <p className="text-2xl font-bold text-green-400 mb-2">$20</p>
                  <p className="text-slate-400 text-sm">per document (cease & desist, takedown templates)</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="p-6">
                  <div className="text-2xl mb-3">🔌</div>
                  <h4 className="text-white font-semibold mb-2">API Access</h4>
                  <p className="text-2xl font-bold text-purple-400 mb-2">$149</p>
                  <p className="text-slate-400 text-sm">per month or $0.01/call for internal automation</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-slate-800/30 rounded-xl p-6 mt-8">
              <p className="text-slate-300 text-center">
                <span className="font-semibold text-white">Enterprise Pricing:</span> Starts at $1,499/month and scales based on actual usage,
                number of users, and scan frequency. No true "unlimited" unless usage is predictable and access is locked down.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your IP Protection?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join law firms who have streamlined their trademark protection with
            Active Back Office's intelligent automation platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://app.activebackoffice.com">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-6">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:text-white text-lg px-8 py-6">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
