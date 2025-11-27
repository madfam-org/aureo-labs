import { DemoShowcase } from '@/components/sections/DemoShowcase'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Globe, Shield, Zap, Users, Building, Star, Cpu, Lock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { GlassPanel } from '@/components/ui/GlassPanel'

const enterpriseFeatures = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II, GDPR, and HIPAA compliant by design.',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: '99.9% uptime with deployment across 50+ regions worldwide.',
  },
  {
    icon: Cpu,
    title: 'AI-First Architecture',
    description: 'Purpose-built infrastructure for LLM workloads and real-time inference.',
  },
  {
    icon: Lock,
    title: 'Data Privacy',
    description: 'Your data never leaves your environment. Full data isolation guaranteed.',
  },
]

const stats = [
  { label: 'Active Users', value: '50K+', icon: Users },
  { label: 'Enterprise Clients', value: '500+', icon: Building },
  { label: 'Customer Rating', value: '4.9/5', icon: Star },
]

const testimonials = [
  {
    quote: "Aureo Labs transformed our operations with AI that actually works in the real world. The demos sold us instantly.",
    author: "Sarah Chen",
    role: "CTO, TechCorp",
    company: "TechCorp",
  },
  {
    quote: "Forge Sight reduced our quoting time by 90%. The demo showed us exactly what we'd get—no surprises.",
    author: "Marcus Rodriguez",
    role: "VP Operations, ManufacturePro",
    company: "ManufacturePro",
  },
  {
    quote: "PENNY handles 70% of our customer inquiries automatically. We tried the demo and deployed within a week.",
    author: "Priya Patel",
    role: "Director of Support, ScaleUp Inc",
    company: "ScaleUp Inc",
  },
]

const trustedBy = [
  'TechCorp', 'ManufacturePro', 'ScaleUp Inc', 'InnovateCo', 'GlobalTech', 'FutureLabs'
]

export default function HomePage() {
  return (
    <>
      {/* Demo-First Hero */}
      <DemoShowcase />

      <main className="bg-neutral-950">
        {/* Trust Indicators */}
        <section className="py-12 border-y border-neutral-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <p className="text-neutral-500 text-sm uppercase tracking-wider">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center gap-8">
                {trustedBy.map((company) => (
                  <span key={company} className="text-neutral-600 font-semibold">{company}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="text-center">
                    <div className="inline-flex items-center gap-2 mb-2">
                      <Icon className="h-5 w-5 text-gold-500" />
                      <span className="text-3xl font-bold text-neutral-100">{stat.value}</span>
                    </div>
                    <p className="text-sm text-neutral-400">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="py-24 bg-neutral-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-neutral-100">Built for </span>
                <span className="gold-text">Enterprise Reality</span>
              </h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                Our AI platforms are designed from the ground up for production environments,
                delivering the reliability and performance your business demands.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {enterpriseFeatures.map((feature) => {
                const Icon = feature.icon
                return (
                  <Card key={feature.title} className="text-center">
                    <CardHeader>
                      <div className="mx-auto h-14 w-14 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4">
                        <Icon className="h-7 w-7 text-gold-500" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Demo-First Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-100 mb-6">
                  See It Before You <span className="gold-text">Commit</span>
                </h2>
                <p className="text-lg text-neutral-400 mb-8">
                  We believe in showing, not telling. Every product has a fully functional demo
                  so you can experience the value before making any commitment.
                </p>

                <div className="space-y-4">
                  {[
                    'Interactive demos with real functionality',
                    'No credit card required to explore',
                    'See ROI projections for your specific use case',
                    'Test with your own data in sandbox mode',
                    'Get personalized onboarding within 24 hours',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-neutral-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link href="/products">
                      Explore All Demos
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div>
                <GlassPanel className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full text-sm text-green-400 mb-4">
                      <Zap className="w-4 h-4" />
                      <span>Quick Start</span>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-100 mb-2">From Demo to Production</h3>
                    <p className="text-neutral-400 text-sm">Average time to value</p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { step: '1', label: 'Try Demo', time: '5 min', status: 'active' },
                      { step: '2', label: 'Schedule Call', time: '15 min', status: 'pending' },
                      { step: '3', label: 'Custom Setup', time: '1 day', status: 'pending' },
                      { step: '4', label: 'Go Live', time: '< 1 week', status: 'pending' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold ${
                          item.status === 'active'
                            ? 'bg-gold-500 text-neutral-900'
                            : 'bg-neutral-800 text-neutral-400'
                        }`}>
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <p className="text-neutral-200 font-medium">{item.label}</p>
                        </div>
                        <div className="text-sm text-neutral-500">{item.time}</div>
                      </div>
                    ))}
                  </div>
                </GlassPanel>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-neutral-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-100 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-neutral-400">
                Real results from real businesses
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <GlassPanel key={index} className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-gold-500 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-neutral-300 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                  <div>
                    <p className="font-semibold text-neutral-100">{testimonial.author}</p>
                    <p className="text-sm text-neutral-500">{testimonial.role}</p>
                  </div>
                </GlassPanel>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <GlassPanel variant="gold" className="text-center max-w-4xl mx-auto p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-100 mb-4">
                Ready to See AI in Action?
              </h2>
              <p className="text-lg text-neutral-300 mb-8">
                Pick a product, try the demo, and discover how AI can transform your business.
                No commitment, no credit card—just results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/products">
                    Browse All Demos
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/contact">
                    Talk to an Expert
                  </Link>
                </Button>
              </div>
            </GlassPanel>
          </div>
        </section>
      </main>
    </>
  )
}
