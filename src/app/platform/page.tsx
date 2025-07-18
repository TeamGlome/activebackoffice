import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, CheckCircle, Zap, Building2, DollarSign, Shield, Settings, Eye, Database, Workflow, Bot } from "lucide-react"

export default function PlatformPage() {
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
              Complete Platform Overview
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Powered Back Office
              <span className="text-orange-400"> Platform</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive automation platform with 14+ integrations, real-time AI, and modular design
              for network security, property management, storage, parking, and intellectual property protection.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-lg font-semibold text-white mb-3">97% AI Accuracy</h3>
                <p className="text-slate-400 text-sm">
                  Industry-leading AI compliance monitoring with predictive analytics and real-time insights
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-lg font-semibold text-white mb-3">14+ Integrations</h3>
                <p className="text-slate-400 text-sm">
                  Seamless connections to QuickBooks, Plaid, Google Drive, WatchGuard, and more
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold text-white mb-3">Real-Time Processing</h3>
                <p className="text-slate-400 text-sm">
                  Instant alerts, automated workflows, and live data synchronization across all systems
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Platform Features */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Core Platform Capabilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Financial Management */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Financial Management</CardTitle>
                <p className="text-slate-400">
                  Complete financial integration and automation
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    QuickBooks Online OAuth & Real-time Sync
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Plaid Banking Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Automated Financial Reporting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Cash Flow Analytics
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Document Management */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">Document Management</CardTitle>
                <p className="text-slate-400">
                  Advanced document processing and storage
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Google Drive & OneDrive Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Dropbox Business Support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    AI-Enhanced CSV Import
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Real-time Collaboration
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Processing */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Workflow className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Data Processing</CardTitle>
                <p className="text-slate-400">
                  Advanced data transformation and analytics
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Google Sheets Bidirectional Sync
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Excel Online Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Skyvia No-code ETL
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Pipedream Workflow Automation
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Security Operations */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-400" />
                </div>
                <CardTitle className="text-white">Security Operations</CardTitle>
                <p className="text-slate-400">
                  Comprehensive security monitoring and management
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    WatchGuard Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    24/7 Network Monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Real-time Threat Detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Automated Incident Response
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Maintenance Management */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-yellow-400" />
                </div>
                <CardTitle className="text-white">Maintenance Management</CardTitle>
                <p className="text-slate-400">
                  Advanced maintenance and asset management
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Fiix Software Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Work Order Automation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Preventive Maintenance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Asset Lifecycle Tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Platform Management */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-cyan-400" />
                </div>
                <CardTitle className="text-white">Platform Management</CardTitle>
                <p className="text-slate-400">
                  Enterprise-grade platform administration
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Multi-organization Support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Role-based Access Control
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    API & Webhook Management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Advanced Analytics
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI & Automation Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              AI & Automation Capabilities
            </h2>
            <p className="text-xl text-slate-300">
              Intelligent automation that transforms manual processes into streamlined workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <Bot className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">Predictive Analytics</h3>
                <p className="text-slate-400 text-sm">
                  97% accuracy in compliance violation prevention with machine learning models
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">Real-time Processing</h3>
                <p className="text-slate-400 text-sm">
                  Instant data processing and automated decision-making across all integrations
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <Eye className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">Computer Vision</h3>
                <p className="text-slate-400 text-sm">
                  Advanced image recognition for trademark detection and document processing
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <Workflow className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">Workflow Automation</h3>
                <p className="text-slate-400 text-sm">
                  Intelligent business process automation with conditional logic and triggers
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
            Ready to Experience the Platform?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Explore our comprehensive automation platform and see how it can transform your operations.
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
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
