import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  DollarSign,
  Users,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  Settings,
  CheckCircle,
  Star,
  ArrowRight,
  PlayCircle,
  FileText,
  Eye,
  Scale
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="flex h-16 items-center justify-between px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center font-bold text-white text-sm">
                ABO
              </div>
              <h1 className="text-xl font-semibold text-white">Active Back Office</h1>
            </div>
            <Badge variant="secondary" className="bg-orange-500/10 text-orange-400 border-orange-500/20">
              AI-Powered Platform
            </Badge>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/platform">
              <Button variant="ghost" className="text-slate-400 hover:text-white">
                Platform
              </Button>
            </Link>
            <Link href="/solutions">
              <Button variant="ghost" className="text-slate-400 hover:text-white">
                Solutions
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" className="text-slate-400 hover:text-white">
                About
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" className="text-slate-400 hover:text-white">
                Contact
              </Button>
            </Link>
            <Link href="https://app.activebackoffice.com">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              AI-Powered Back Office
              <span className="text-orange-400"> Automation Platform</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Modular platform built to automate and simplify the operational backbone
              of network security, property management, automated storage, parking, and
              intellectual property protection with real-time AI and intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="https://app.activebackoffice.com">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
                  Access Dashboard
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:text-white text-lg px-8 py-6">
                <PlayCircle className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 mt-12 text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Real-Time AI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Modular Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Multi-Industry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Back Office Automation Across Industries
            </h2>
            <p className="text-xl text-slate-300">
              Modular platform designed for network security, property management, storage, parking, and legal services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Real-Time AI & Automation */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">Real-Time AI & Automation</CardTitle>
                <p className="text-slate-400">
                  Intelligent workflows that replace manual processes with automated decision-making and instant alerts
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Automated workflows
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Instant notifications
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    AI-driven insights
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Multi-Industry Applications */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Multi-Industry Applications</CardTitle>
                <p className="text-slate-400">
                  Network security, property management, automated storage, parking, and intellectual property protection for law firms
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Security operations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Property & storage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    IP protection & legal AI
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Modular Platform Design */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Modular Platform Design</CardTitle>
                <p className="text-slate-400">
                  Activate only the tools you need, tailored to your specific business model and requirements
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Customizable modules
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Scalable architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Seamless integration
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Property Management Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              AI-Powered Property Management
            </h2>
            <p className="text-xl text-slate-300">
              Comprehensive property operations with 97% compliance accuracy and automated workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-lg font-semibold text-white mb-3">Portfolio Management</h3>
                <p className="text-slate-400 text-sm">
                  Centralized property portfolio oversight with real-time performance metrics and tenant tracking
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-lg font-semibold text-white mb-3">Compliance Monitoring</h3>
                <p className="text-slate-400 text-sm">
                  97% violation prevention accuracy with 47 NYC Local Laws covered and predictive analytics
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-lg font-semibold text-white mb-3">Maintenance Automation</h3>
                <p className="text-slate-400 text-sm">
                  Fiix integration for work order management, preventive maintenance, and asset lifecycle tracking
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-semibold text-white mb-3">Financial Integration</h3>
                <p className="text-slate-400 text-sm">
                  QuickBooks and Plaid banking integration with automated reporting and real-time cash flow monitoring
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="https://app.activebackoffice.com/dashboard/property-management">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3">
                Explore Property Management
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intellectual Property Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Intellectual Property Protection for Law Firms
            </h2>
            <p className="text-xl text-slate-300">
              Secure trademark monitoring, evidence collection, and controlled takedown management with built-in safeguards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold text-white mb-3">Trademark Monitoring</h3>
                <p className="text-slate-400 text-sm">
                  Automated web scraping and AI-powered detection across marketplaces and social platforms
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-lg font-semibold text-white mb-3">Evidence Capture</h3>
                <p className="text-slate-400 text-sm">
                  Legal-grade evidence collection with timestamps and chain of custody for court admissibility
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🚨</div>
                <h3 className="text-lg font-semibold text-white mb-3">Takedown Automation</h3>
                <p className="text-slate-400 text-sm">
                  Semi-automated takedown requests with platform-specific API integrations and compliance tracking
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-lg font-semibold text-white mb-3">Case Management</h3>
                <p className="text-slate-400 text-sm">
                  Complete legal workflow with team collaboration, document templates, and status tracking
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/solutions/intellectual-property">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3">
                Learn More About IP Protection
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Back Office?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join businesses across industries who have streamlined their operations and gained
            real-time visibility with Active Back Office's intelligent automation platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://app.activebackoffice.com">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
                Access Dashboard
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:text-white text-lg px-8 py-6">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center font-bold text-white text-sm">
                  ABO
                </div>
                <h3 className="text-xl font-semibold text-white">Active Back Office</h3>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                Modular AI-powered platform automating back-office operations across network security,
                property management, storage, parking, and legal services with real-time intelligence.
              </p>
              <p className="text-slate-500 text-sm">
                © 2025 Active Back Office LLC. All rights reserved.
              </p>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="https://www.activebackoffice.com/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link href="https://www.activebackoffice.com/dashboard/integrations" className="hover:text-white transition-colors">Integrations</Link></li>
                <li><Link href="https://www.activebackoffice.com/dashboard/compliance" className="hover:text-white transition-colors">Compliance</Link></li>
                <li><Link href="https://www.activebackoffice.com/dashboard/ai-analytics" className="hover:text-white transition-colors">AI Analytics</Link></li>
              </ul>
            </div>

            {/* Solutions Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/solutions/intellectual-property" className="hover:text-white transition-colors">IP Protection</Link></li>
                <li><Link href="https://www.activebackoffice.com/dashboard/integrations/watchguard" className="hover:text-white transition-colors">Network Security</Link></li>
                <li><Link href="https://www.activebackoffice.com/dashboard/property-management" className="hover:text-white transition-colors">Property Management</Link></li>
                <li><Link href="https://www.activebackoffice.com/dashboard/integrations" className="hover:text-white transition-colors">All Integrations</Link></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
