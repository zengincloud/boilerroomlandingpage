import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  BarChart3,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Globe,
  Headphones,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
  Rocket,
  Search,
  Smartphone,
  Twitter,
  Users,
  Zap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-950 text-gray-100 scroll-smooth">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-purple-500" />
            <span className="text-xl font-bold">BoilerRoom</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-gray-300 hover:text-purple-400 hover:underline underline-offset-4"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-gray-300 hover:text-purple-400 hover:underline underline-offset-4"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-gray-300 hover:text-purple-400 hover:underline underline-offset-4"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-gray-300 hover:text-purple-400 hover:underline underline-offset-4"
            >
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Log In
            </Button>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              Get Started
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gray-900 to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                    The All-in-One Sales Execution Platform
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Prospect, sequence, dial, and close deals—faster and more efficiently than ever before.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
                  >
                    Book a Demo
                    <Calendar className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    Watch Video
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <CheckCircle2 className="mr-1 h-3 w-3 text-purple-500" />
                    <span>More Calls</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="mr-1 h-3 w-3 text-purple-500" />
                    <span>More Meetings</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="mr-1 h-3 w-3 text-purple-500" />
                    <span>More Revenue</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-lg border border-gray-800 bg-gray-950 p-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-800/20 opacity-50"></div>
                  <div className="relative h-full w-full rounded bg-gray-900 p-4 shadow-xl">
                    <div className="flex items-center gap-2 border-b border-gray-800 pb-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <div className="ml-2 text-xs text-gray-400">BoilerRoom Dashboard</div>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="rounded bg-gray-800 p-2">
                        <div className="text-xs text-gray-400">Calls Today</div>
                        <div className="text-xl font-bold text-white">127</div>
                        <div className="mt-1 text-xs text-green-400">+24%</div>
                      </div>
                      <div className="rounded bg-gray-800 p-2">
                        <div className="text-xs text-gray-400">Connections</div>
                        <div className="text-xl font-bold text-white">42</div>
                        <div className="mt-1 text-xs text-green-400">+18%</div>
                      </div>
                      <div className="rounded bg-gray-800 p-2">
                        <div className="text-xs text-gray-400">Meetings</div>
                        <div className="text-xl font-bold text-white">12</div>
                        <div className="mt-1 text-xs text-green-400">+33%</div>
                      </div>
                    </div>
                    <div className="mt-3 rounded bg-gray-800 p-3">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-white">Next Best Actions</div>
                        <div className="text-xs text-purple-400">AI Recommended</div>
                      </div>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center gap-2 rounded bg-gray-700 p-2">
                          <Phone className="h-4 w-4 text-purple-500" />
                          <div className="text-xs text-white">Call John Smith - Decision Maker</div>
                        </div>
                        <div className="flex items-center gap-2 rounded bg-gray-700 p-2">
                          <Mail className="h-4 w-4 text-purple-500" />
                          <div className="text-xs text-white">Follow up with Acme Corp proposal</div>
                        </div>
                        <div className="flex items-center gap-2 rounded bg-gray-700 p-2">
                          <Linkedin className="h-4 w-4 text-purple-500" />
                          <div className="text-xs text-white">Connect with Sarah Jones - VP Sales</div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white">
                        <Zap className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-900/50 px-3 py-1 text-sm text-purple-300">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  One Platform. All Your Sales Needs.
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  BoilerRoom eliminates the need for multiple disjointed tools by combining everything sales teams need
                  in one powerful platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-900/30 mx-auto">
                  <Search className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Automated Prospecting</h3>
                <p className="text-sm text-gray-400">
                  AI-powered lead sourcing and account research to surface the best-fit prospects without manual work.
                </p>
              </div>
              <div className="grid gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-900/30 mx-auto">
                  <MessageSquare className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Multi-Channel Sequencing</h3>
                <p className="text-sm text-gray-400">
                  Seamlessly automate outreach across email, LinkedIn, calls, and SMS in one unified platform.
                </p>
              </div>
              <div className="grid gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-900/30 mx-auto">
                  <Phone className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Parallel Dialing</h3>
                <p className="text-sm text-gray-400">
                  Call multiple prospects at once, dramatically increasing connection rates and productivity.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-900/30 mx-auto">
                  <BarChart3 className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Real-Time AI Insights</h3>
                <p className="text-sm text-gray-400">
                  Get smart recommendations on who to target next, what to say, and when to follow up.
                </p>
              </div>
              <div className="grid gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-900/30 mx-auto">
                  <Globe className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Full CRM Sync</h3>
                <p className="text-sm text-gray-400">
                  Automatically log activities, update records, and eliminate manual data entry in your CRM.
                </p>
              </div>
              <div className="grid gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-900/30 mx-auto">
                  <Users className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Team Collaboration</h3>
                <p className="text-sm text-gray-400">
                  Share winning templates, track team performance, and coach reps to success with built-in analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-purple-900/50 px-3 py-1 text-sm text-purple-300 w-fit">
                  Why BoilerRoom?
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Stop Juggling Multiple Sales Tools
                </h2>
                <p className="text-gray-400 md:text-xl">
                  Unlike existing solutions that force SDRs to jump between Outreach, SalesLoft, Gong, Aircall, and
                  Salesforce, BoilerRoom consolidates everything into one streamlined platform.
                </p>
                <ul className="grid gap-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-purple-500" />
                    <div className="text-gray-300">
                      <span className="font-medium">Save 2+ hours daily</span> on administrative tasks
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-purple-500" />
                    <div className="text-gray-300">
                      <span className="font-medium">Increase connection rates by 3X</span> with parallel dialing
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-purple-500" />
                    <div className="text-gray-300">
                      <span className="font-medium">Book 40% more meetings</span> with AI-powered sequencing
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-purple-500" />
                    <div className="text-gray-300">
                      <span className="font-medium">Reduce tool costs by 50%</span> with our all-in-one platform
                    </div>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900">
                    Get Started
                    <Rocket className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="BoilerRoom dashboard"
                    className="relative z-10 mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-900/50 px-3 py-1 text-sm text-purple-300">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Streamlined Sales Execution
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  BoilerRoom makes it easy to execute your entire sales process in one platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="BoilerRoom platform screenshot"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900/50 text-purple-300">
                      1
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-white">Find Your Ideal Prospects</h3>
                      <p className="text-gray-400">
                        Use AI-powered prospecting to identify and prioritize your best-fit accounts and contacts.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900/50 text-purple-300">
                      2
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-white">Create Multi-Channel Sequences</h3>
                      <p className="text-gray-400">
                        Build automated sequences that combine email, phone, LinkedIn, and SMS touchpoints.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900/50 text-purple-300">
                      3
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-white">Execute at Scale</h3>
                      <p className="text-gray-400">
                        Use parallel dialing to make more calls, AI to personalize outreach, and analytics to optimize
                        results.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900/50 text-purple-300">
                      4
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-white">Book More Meetings</h3>
                      <p className="text-gray-400">
                        Convert prospects to meetings with smart scheduling, follow-ups, and real-time coaching.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-purple-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-500/20 px-3 py-1 text-sm text-purple-300">
                  The BoilerRoom Difference
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Why Sales Teams Love BoilerRoom
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 text-purple-400">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">3X More Connections</h3>
                <p className="mt-2 text-gray-400">
                  Our parallel dialing technology lets you call multiple prospects simultaneously, dramatically
                  increasing connection rates.
                </p>
              </div>
              <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 text-purple-400">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">AI-Powered Efficiency</h3>
                <p className="mt-2 text-gray-400">
                  Smart recommendations help you prioritize the right prospects, personalize outreach, and optimize your
                  sales process.
                </p>
              </div>
              <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 text-purple-400">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">All Channels, One Platform</h3>
                <p className="mt-2 text-gray-400">
                  Seamlessly switch between email, phone, LinkedIn, and SMS without leaving the platform or losing
                  context.
                </p>
              </div>
              <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 text-purple-400">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">Data-Driven Insights</h3>
                <p className="mt-2 text-gray-400">
                  Comprehensive analytics help you understand what's working, what's not, and how to improve your sales
                  performance.
                </p>
              </div>
              <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 text-purple-400">
                  <Headphones className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">World-Class Support</h3>
                <p className="mt-2 text-gray-400">
                  Our customer success team ensures you get the most out of BoilerRoom with personalized onboarding and
                  ongoing support.
                </p>
              </div>
              <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 text-purple-400">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">Mobile Optimized</h3>
                <p className="mt-2 text-gray-400">
                  Stay productive on the go with our mobile app that gives you full access to your sales workflow from
                  anywhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-900/50 px-3 py-1 text-sm text-purple-300">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Trusted by Top Sales Teams
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our customers have to say about how BoilerRoom has transformed their sales process.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gray-800"></div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Mark Thompson</h4>
                      <p className="text-sm text-gray-400">VP of Sales, TechCorp</p>
                    </div>
                  </div>
                  <p className="text-gray-400">
                    "Since implementing BoilerRoom, our SDR team has increased meetings booked by 42%. The parallel
                    dialing feature alone has doubled our connection rates."
                  </p>
                  <div className="flex items-center gap-1">
                    <div className="text-purple-400">★★★★★</div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gray-800"></div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Jessica Rivera</h4>
                      <p className="text-sm text-gray-400">SDR Manager, GrowthX</p>
                    </div>
                  </div>
                  <p className="text-gray-400">
                    "My team was juggling 5 different tools before BoilerRoom. Now everything is in one place, and we've
                    reclaimed at least 2 hours per rep per day in productivity."
                  </p>
                  <div className="flex items-center gap-1">
                    <div className="text-purple-400">★★★★★</div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gray-800"></div>
                    <div>
                      <h4 className="text-lg font-bold text-white">David Chen</h4>
                      <p className="text-sm text-gray-400">Director of Sales, EnterpriseAI</p>
                    </div>
                  </div>
                  <p className="text-gray-400">
                    "The AI-powered insights have been a game-changer for our team. We're targeting the right prospects
                    at the right time with the right message, and our conversion rates show it."
                  </p>
                  <div className="flex items-center gap-1">
                    <div className="text-purple-400">★★★★★</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-900/50 px-3 py-1 text-sm text-purple-300">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that's right for your team and start closing more deals today.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-white">Starter</h3>
                  <p className="text-gray-400">Perfect for individual SDRs and small teams.</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">$99</span>
                    <span className="text-gray-400">/user/month</span>
                  </div>
                  <ul className="grid gap-2 py-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-300">Multi-channel sequencing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-300">Basic parallel dialing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-300">CRM integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-300">Email support</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
                </div>
              </div>
              <div className="relative rounded-lg border border-purple-700 bg-gray-900 p-6 shadow-sm">
                <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-purple-600 px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-white">Professional</h3>
                  <p className="text-gray-400">For growing sales teams and organizations.</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">$149</span>
                    <span className="text-gray-400">/user/month</span>
                  </div>
                  <ul className="grid gap-2 py-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-300">Everything in Starter</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-300">Advanced parallel dialing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-300">AI-powered insights</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-300">Team analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-300">Priority support</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900">
                    Get Started
                  </Button>
                </div>
              </div>
              <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-white">Enterprise</h3>
                  <p className="text-gray-400">For large teams and organizations with custom needs.</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">Custom</span>
                  </div>
                  <ul className="grid gap-2 py-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-300">Everything in Professional</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-300">Custom integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-300">Advanced security features</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-300">Dedicated account manager</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-300">Custom training & onboarding</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-950 to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                    Ready to Transform Your Sales Process?
                  </h2>
                  <p className="text-gray-300 md:text-xl">
                    Join thousands of sales professionals who are closing more deals with BoilerRoom.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
                  >
                    Book a Demo
                    <Calendar className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    Start Free Trial
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
                  <div className="grid gap-4">
                    <h3 className="text-xl font-bold text-white">Request a Personalized Demo</h3>
                    <p className="text-gray-400">
                      See how BoilerRoom can help your team close more deals and boost productivity.
                    </p>
                    <div className="grid gap-4">
                      <Input placeholder="Full Name" className="bg-gray-800 border-gray-700 text-white" />
                      <Input placeholder="Work Email" className="bg-gray-800 border-gray-700 text-white" />
                      <Input placeholder="Company" className="bg-gray-800 border-gray-700 text-white" />
                      <Input placeholder="Phone Number" className="bg-gray-800 border-gray-700 text-white" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900">
                      Request Demo
                    </Button>
                    <p className="text-xs text-gray-500">
                      By submitting this form, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-gray-800 py-6 md:py-0 bg-gray-950">
        <div className="container flex flex-col gap-6 md:flex-row md:justify-between md:py-8">
          <div className="flex flex-col gap-6 md:w-1/3 md:gap-8">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-purple-500" />
              <span className="text-xl font-bold text-white">BoilerRoom</span>
            </div>
            <p className="text-sm text-gray-400">
              The all-in-one sales execution platform that helps SDRs and sales teams prospect, sequence, dial, and
              close deals—faster and more efficiently.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold text-white">Product</h3>
              <ul className="grid gap-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-purple-400 hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 hover:underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 hover:underline">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 hover:underline">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold text-white">Resources</h3>
              <ul className="grid gap-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-purple-400 hover:underline">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 hover:underline">
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 hover:underline">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold text-white">Company</h3>
              <ul className="grid gap-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-purple-400 hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 hover:underline">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold text-white">Legal</h3>
              <ul className="grid gap-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-purple-400 hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 hover:underline">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container flex flex-col gap-6 border-t border-gray-800 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} BoilerRoom. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-purple-400">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-purple-400">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

