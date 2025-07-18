import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, CheckCircle, Building2, Shield, Scale, Warehouse, Car, Zap } from "lucide-react"

export default function SolutionsPage() {
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
                Access Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20 mb-4">
              Industry Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tailored Solutions for
              <span className="text-orange-400"> Every Industry</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our modular platform adapts to your specific industry needs with specialized workflows,
              compliance monitoring, and automation designed for your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold text-white mb-3">Industry-Specific</h3>
                <p className="text-slate-400 text-sm">
                  Specialized workflows and features designed for your specific industry requirements
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🧩</div>
                <h3 className="text-lg font-semibold text-white mb-3">Modular Design</h3>
                <p className="text-slate-400 text-sm">
                  Activate only the modules you need, tailored to your business model and scale
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-lg font-semibold text-white mb-3">Proven Results</h3>
                <p className="text-slate-400 text-sm">
                  97% compliance accuracy and $245K+ annual savings across our customer base
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Industry-Specific Solutions</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Property Management */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-white text-2xl">Property Management</CardTitle>
                <p className="text-slate-400">
                  Comprehensive property operations with AI-powered compliance and financial automation
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-300 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    97% compliance violation prevention (47 NYC Local Laws)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    QuickBooks & Plaid financial integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Fiix maintenance management integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Real-time portfolio analytics and reporting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Tenant management and engagement tools
                  </li>
                </ul>
                <Link href="https://app.activebackoffice.com/dashboard/property-management">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Explore Property Management
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Intellectual Property Protection */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-white text-2xl">Intellectual Property Protection</CardTitle>
                <p className="text-slate-400">
                  Automated trademark monitoring and takedown management for law firms
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-300 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Automated trademark monitoring across web & marketplaces
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Legal-grade evidence collection with chain of custody
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Semi-automated takedown request processing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Complete legal case management workflow
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    AI-powered violation detection and prioritization
                  </li>
                </ul>
                <Link href="/solutions/intellectual-property">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    Learn About IP Protection
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Network Security */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-400" />
                </div>
                <CardTitle className="text-white text-2xl">Network Security Operations</CardTitle>
                <p className="text-slate-400">
                  Comprehensive security monitoring and threat management with WatchGuard integration
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-300 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    WatchGuard security appliance integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    24/7 network monitoring and threat detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Real-time security alerts and incident response
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Automated security policy enforcement
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Comprehensive security analytics and reporting
                  </li>
                </ul>
                <Link href="https://app.activebackoffice.com/dashboard/integrations/watchguard">
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                    Explore Security Operations
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Storage & Parking Automation */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="flex items-center gap-1">
                    <Warehouse className="w-4 h-4 text-purple-400" />
                    <Car className="w-4 h-4 text-purple-400" />
                  </div>
                </div>
                <CardTitle className="text-white text-2xl">Storage & Parking Automation</CardTitle>
                <p className="text-slate-400">
                  Self-service automation for storage facilities and parking operations
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-300 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Automated self-storage unit management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Smart parking space allocation and monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Integrated payment processing and billing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Real-time occupancy tracking and analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Mobile-first customer experience
                  </li>
                </ul>
                <Link href="https://app.activebackoffice.com/dashboard">
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                    Explore Automation Solutions
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-slate-300">
              Our modular platform can be configured for any industry or specific business requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">Rapid Deployment</h3>
                <p className="text-slate-400 text-sm">
                  Get your custom solution up and running in weeks, not months, with our modular approach
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <Building2 className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">Industry Expertise</h3>
                <p className="text-slate-400 text-sm">
                  Our team has deep experience across multiple industries and compliance requirements
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <Scale className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">Scalable Architecture</h3>
                <p className="text-slate-400 text-sm">
                  Built to grow with your business from startup to enterprise with flexible pricing
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Industry Operations?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Discover how our industry-specific solutions can streamline your operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://app.activebackoffice.com">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:text-white text-lg px-8 py-6">
                Discuss Custom Solution
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
