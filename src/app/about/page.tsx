import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Building2, Users, Target, Award } from "lucide-react"

export default function AboutPage() {
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
              About Active Back Office
            </h1>
            <p className="text-xl text-slate-300">
              A modular platform built to automate and simplify the operational backbone of
              network security, property management, automated self-storage and parking, with
              intellectual property protection and AI tools for law firms and service-based businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Target className="w-8 h-8 text-orange-400 mb-2" />
                <CardTitle className="text-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  To empower businesses across industries with AI-driven tools that automate back-office
                  operations, provide real-time visibility, and transform traditional workflows into
                  streamlined, data-driven systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Award className="w-8 h-8 text-blue-400 mb-2" />
                <CardTitle className="text-white">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  To be the leading AI-powered back-office automation platform that transforms how businesses
                  across network security, property management, storage, parking, and legal services
                  handle their operational workflows.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">What We Do</h2>
            <div className="prose prose-slate prose-invert max-w-none">
              <p className="text-slate-300 leading-relaxed">
                We centralize essential back-office functions—lease tracking, financial reporting, legal oversight,
                and tenant engagement—into a unified interface. With real-time analytics, automated workflows, and
                intelligent alerts, businesses gain the clarity and control needed to operate efficiently and scale confidently.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6 text-center mt-12">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚙️</span>
                  <div>
                    <h4 className="text-white font-semibold">Automation-First</h4>
                    <p className="text-slate-300 text-sm">Replace manual processes with intelligent workflows that reduce overhead and improve accuracy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <h4 className="text-white font-semibold">Real-Time Financial Visibility</h4>
                    <p className="text-slate-300 text-sm">Monitor performance, cash flow, and activity through dynamic dashboards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔔</span>
                  <div>
                    <h4 className="text-white font-semibold">Instant Alerts & Notifications</h4>
                    <p className="text-slate-300 text-sm">Stay ahead of deadlines, payment issues, compliance requirements, and operational anomalies</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🧠</span>
                  <div>
                    <h4 className="text-white font-semibold">AI-Driven Insights</h4>
                    <p className="text-slate-300 text-sm">Surface trends, flag risks, and support smarter decision-making</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🧱</span>
                  <div>
                    <h4 className="text-white font-semibold">Modular Design</h4>
                    <p className="text-slate-300 text-sm">Activate only the tools you need, tailored to your business model</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔐</span>
                  <div>
                    <h4 className="text-white font-semibold">Security-Focused Architecture</h4>
                    <p className="text-slate-300 text-sm">Built with privacy, control, and reliability in mind</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-slate-700/30 rounded-xl">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <h4 className="text-white font-semibold mb-2">Complementary Integration</h4>
                  <p className="text-slate-300 text-sm">Active Back Office doesn't replace your existing systems—it makes them more powerful. By enhancing data flow, visibility, and automation, we extend the value of the tools you already rely on.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6 text-center mt-12">Why It Matters</h2>
            <div className="text-center mb-8">
              <p className="text-slate-300 leading-relaxed">
                Operational complexity shouldn't slow down innovation. Active Back Office empowers businesses to move faster,
                respond smarter, and deliver better experiences—without the burden of outdated systems or fragmented tools.
                <span className="text-orange-400 font-semibold">It's not about starting over—it's about leveling up.</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Building2 className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Business Operations Automated</h3>
              <p className="text-3xl font-bold text-orange-400">1,000+</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Industry Integrations</h3>
              <p className="text-3xl font-bold text-blue-400">14+</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">AI Accuracy Rate</h3>
              <p className="text-3xl font-bold text-green-400">97%</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
