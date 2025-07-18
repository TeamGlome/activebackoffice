import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, Phone, Bot, MessageSquare, Zap, Brain, Clock } from "lucide-react"

export default function ContactPage() {
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

      {/* Content */}
      <main className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 mb-4">
              AI-Powered Support
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Help from Our
              <span className="text-blue-400"> AI-Powered Team</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Connect with our intelligent support system and expert team. Get instant answers
              or schedule a consultation to transform your business operations.
            </p>
          </div>

          {/* AI-Powered Support Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <Bot className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">AI Virtual Assistant</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Get instant answers to your questions about our platform, pricing, and features
                </p>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">
                  Chat with AI Assistant
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">Smart Contact Form</h3>
                <p className="text-slate-400 text-sm mb-4">
                  AI-powered form that understands your needs and routes you to the right expert
                </p>
                <Button className="bg-purple-500 hover:bg-purple-600 text-white w-full">
                  Start Smart Form
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">Instant Demo</h3>
                <p className="text-slate-400 text-sm mb-4">
                  AI-guided platform demo tailored to your industry and specific use cases
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                  Launch AI Demo
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <Mail className="w-8 h-8 text-orange-400 mb-2" />
                  <CardTitle className="text-white">Email Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-2">General Inquiries:</p>
                  <a href="mailto:info@activebackoffice.com" className="text-orange-400 hover:text-orange-300">
                    info@activebackoffice.com
                  </a>
                  <p className="text-slate-300 mb-2 mt-4">Sales & Demos:</p>
                  <a href="mailto:sales@activebackoffice.com" className="text-orange-400 hover:text-orange-300">
                    sales@activebackoffice.com
                  </a>
                  <p className="text-slate-300 mb-2 mt-4">Technical Support:</p>
                  <a href="mailto:support@activebackoffice.com" className="text-orange-400 hover:text-orange-300">
                    support@activebackoffice.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <Phone className="w-8 h-8 text-blue-400 mb-2" />
                  <CardTitle className="text-white">Phone Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-2">Sales & General Inquiries:</p>
                  <a href="tel:+1-212-300-5142" className="text-blue-400 hover:text-blue-300 text-lg font-semibold">
                    (212) 300-5142
                  </a>
                  <p className="text-slate-400 text-sm mt-2">
                    Monday - Friday: 9 AM - 6 PM EST
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <Clock className="w-8 h-8 text-green-400 mb-2" />
                  <CardTitle className="text-white">New York Technology Company</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    We are a New York-based technology company specializing in AI-powered
                    back-office automation. All consultations and support are provided
                    remotely through our advanced digital platform.
                  </p>
                  <div className="mt-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <p className="text-blue-400 text-sm">
                      <strong>Remote-First:</strong> We provide all services digitally for maximum efficiency and global reach.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI-Powered Contact Form */}
            <div>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Brain className="w-8 h-8 text-purple-400" />
                    <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                      AI-Powered
                    </Badge>
                  </div>
                  <CardTitle className="text-white">Intelligent Contact Form</CardTitle>
                  <p className="text-slate-400 text-sm">
                    Our AI analyzes your inquiry and routes you to the perfect solution
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="Your Company Name"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">
                        Industry
                      </label>
                      <select className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:border-purple-500 transition-colors">
                        <option value="">Select Industry</option>
                        <option>Property Management</option>
                        <option>Legal Services</option>
                        <option>Network Security</option>
                        <option>Storage & Parking</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      What brings you here? *
                    </label>
                    <select className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:border-purple-500 transition-colors">
                      <option value="">AI will help route your inquiry...</option>
                      <option>I want to see a demo</option>
                      <option>I need pricing information</option>
                      <option>I have technical questions</option>
                      <option>I want to discuss integration</option>
                      <option>I'm interested in IP protection</option>
                      <option>I need compliance help</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Tell us about your needs
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Describe your business challenges, current tools, team size, or any specific requirements..."
                    ></textarea>
                  </div>

                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Bot className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-400 text-sm font-semibold">AI Analysis</span>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Our AI will analyze your responses and connect you with the right specialist.
                      Based on your industry and needs, we'll prioritize your inquiry and provide
                      relevant resources.
                    </p>
                  </div>

                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                    <Brain className="w-4 h-4 mr-2" />
                    Submit to AI Assistant
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
