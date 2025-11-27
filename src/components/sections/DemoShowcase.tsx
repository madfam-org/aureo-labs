'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, Pause, Sparkles, Zap, TrendingUp, Calculator, Bot, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { GlassPanel } from '@/components/ui/GlassPanel'

// Product demos configuration
const productDemos = [
  {
    id: 'penny',
    name: 'PENNY',
    tagline: 'AI Assistant Platform',
    description: 'Intelligent automation that understands your business context',
    icon: Bot,
    color: 'gold',
    demoUrl: '/demo/penny',
    href: '/products/penny',
    preview: {
      type: 'chat',
      messages: [
        { role: 'user', content: 'Summarize today\'s sales report' },
        { role: 'assistant', content: 'Today\'s sales: $47,230 (+12% vs yesterday). Top performer: Enterprise tier with 8 new subscriptions. Alert: Inventory low on SKU-2847.' },
      ],
    },
    stats: { users: '25K+', satisfaction: '98%' },
  },
  {
    id: 'forge-sight',
    name: 'Forge Sight',
    tagline: 'Pricing Intelligence',
    description: 'Real-time pricing optimization for manufacturing',
    icon: TrendingUp,
    color: 'green',
    demoUrl: '/demo/forge-sight',
    href: '/products/forge-sight',
    preview: {
      type: 'calculator',
      inputs: { material: 'PLA', volume: '125cm³', complexity: 'Medium' },
      output: { price: '$23.50', margin: '34%', confidence: '96%' },
    },
    stats: { optimized: '$2.3M', accuracy: '99.2%' },
  },
  {
    id: 'cotiza',
    name: 'Cotiza Studio',
    tagline: 'Quotation System',
    description: 'Generate professional quotes in seconds',
    icon: Calculator,
    color: 'purple',
    demoUrl: '/demo/cotiza',
    href: '/products/cotiza',
    preview: {
      type: 'quote',
      items: ['3D Print Service', 'Post-Processing', 'Express Shipping'],
      total: '$1,247.00',
    },
    stats: { quotes: '12K+', conversion: '67%' },
  },
  {
    id: 'dhanam',
    name: 'Dhanam',
    tagline: 'Financial Wellness',
    description: 'AI-powered personal finance management',
    icon: Sparkles,
    color: 'blue',
    demoUrl: '/demo/dhanam',
    href: '/products/dhanam',
    preview: {
      type: 'insights',
      savings: '+$2,450',
      trend: 'up',
      tip: 'Switch to suggested plan to save $127/mo',
    },
    stats: { users: '4.2M', saved: '$2.4B' },
  },
]

// Demo preview components
function ChatPreview({ messages }: { messages: Array<{ role: string; content: string }> }) {
  const [visibleMessages, setVisibleMessages] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleMessages((prev) => (prev < messages.length ? prev + 1 : prev))
    }, 800)
    return () => clearInterval(timer)
  }, [messages.length])

  return (
    <div className="space-y-3">
      {messages.slice(0, visibleMessages).map((msg, i) => (
        <div
          key={i}
          className={cn(
            'p-3 rounded-lg text-sm animate-fade-up',
            msg.role === 'user'
              ? 'bg-neutral-800 text-neutral-200 ml-8'
              : 'bg-gold-500/10 text-neutral-100 mr-8 border border-gold-500/20'
          )}
        >
          {msg.content}
        </div>
      ))}
      {visibleMessages < messages.length && (
        <div className="flex gap-1 ml-2">
          <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
          <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
      )}
    </div>
  )
}

function CalculatorPreview({ inputs, output }: { inputs: Record<string, string>; output: Record<string, string> }) {
  const [showOutput, setShowOutput] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowOutput(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-2">
        {Object.entries(inputs).map(([key, value]) => (
          <div key={key} className="bg-neutral-800 p-2 rounded text-center">
            <div className="text-xs text-neutral-500 capitalize">{key}</div>
            <div className="text-sm text-neutral-200">{value}</div>
          </div>
        ))}
      </div>
      {showOutput && (
        <div className="bg-green-500/10 border border-green-500/20 p-3 rounded-lg animate-fade-up">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-2xl font-bold text-green-400">{output.price}</div>
              <div className="text-xs text-neutral-400">Margin: {output.margin}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-neutral-500">Confidence</div>
              <div className="text-lg font-semibold text-green-400">{output.confidence}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function QuotePreview({ items, total }: { items: string[]; total: string }) {
  const [visibleItems, setVisibleItems] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems((prev) => (prev < items.length + 1 ? prev + 1 : prev))
    }, 500)
    return () => clearInterval(timer)
  }, [items.length])

  return (
    <div className="space-y-2">
      {items.slice(0, visibleItems).map((item, i) => (
        <div key={i} className="flex justify-between text-sm animate-fade-up">
          <span className="text-neutral-300">{item}</span>
          <span className="text-neutral-400">✓</span>
        </div>
      ))}
      {visibleItems > items.length && (
        <div className="border-t border-neutral-700 pt-2 mt-2 animate-fade-up">
          <div className="flex justify-between">
            <span className="font-semibold text-neutral-200">Total</span>
            <span className="font-bold text-purple-400">{total}</span>
          </div>
        </div>
      )}
    </div>
  )
}

function InsightsPreview({ savings, tip }: { savings: string; trend: string; tip: string }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="text-3xl font-bold text-blue-400">{savings}</div>
        <TrendingUp className="w-5 h-5 text-green-500" />
      </div>
      <div className="text-xs text-neutral-400">Monthly savings potential</div>
      <div className="bg-blue-500/10 border border-blue-500/20 p-2 rounded text-xs text-blue-300">
        💡 {tip}
      </div>
    </div>
  )
}

// Main component
export function DemoShowcase() {
  const [activeDemo, setActiveDemo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // Auto-rotate demos
  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % productDemos.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isPlaying])

  const currentDemo = productDemos[activeDemo]
  const Icon = currentDemo.icon

  const colorClasses = {
    gold: 'from-gold-500 to-amber-600 border-gold-500/30 bg-gold-500/10',
    green: 'from-green-500 to-emerald-600 border-green-500/30 bg-green-500/10',
    purple: 'from-purple-500 to-violet-600 border-purple-500/30 bg-purple-500/10',
    blue: 'from-blue-500 to-cyan-600 border-blue-500/30 bg-blue-500/10',
  }

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />
      <div className="absolute inset-0 bg-grid-white/5" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-10 h-64 w-64 bg-gold-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 h-48 w-48 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 px-4 py-2 rounded-full text-sm text-gold-400 mb-6">
            <Zap className="w-4 h-4" />
            <span>Try Our Products Live</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-neutral-100 mb-4">
            AI That <span className="gold-text">Actually Works</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Don't just read about our products—experience them. Interactive demos show you exactly how our AI platforms solve real business problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Demo Preview Panel */}
          <div className="order-2 lg:order-1">
            <GlassPanel className="p-6 min-h-[400px]">
              {/* Demo Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={cn('p-2 rounded-lg bg-gradient-to-br', colorClasses[currentDemo.color as keyof typeof colorClasses])}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-100">{currentDemo.name}</h3>
                    <p className="text-xs text-neutral-500">{currentDemo.tagline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-neutral-500">Live Demo</span>
                </div>
              </div>

              {/* Demo Content */}
              <div className="mb-6" key={currentDemo.id}>
                {currentDemo.preview.type === 'chat' && (
                  <ChatPreview messages={currentDemo.preview.messages!} />
                )}
                {currentDemo.preview.type === 'calculator' && (
                  <CalculatorPreview
                    inputs={currentDemo.preview.inputs!}
                    output={currentDemo.preview.output!}
                  />
                )}
                {currentDemo.preview.type === 'quote' && (
                  <QuotePreview
                    items={currentDemo.preview.items!}
                    total={currentDemo.preview.total!}
                  />
                )}
                {currentDemo.preview.type === 'insights' && (
                  <InsightsPreview
                    savings={currentDemo.preview.savings!}
                    trend={currentDemo.preview.trend!}
                    tip={currentDemo.preview.tip!}
                  />
                )}
              </div>

              {/* Demo Stats */}
              <div className="flex gap-4 mb-6 pt-4 border-t border-neutral-800">
                {Object.entries(currentDemo.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg font-bold text-neutral-100">{value}</div>
                    <div className="text-xs text-neutral-500 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3">
                <Button asChild className="flex-1">
                  <Link href={currentDemo.demoUrl}>
                    <Play className="w-4 h-4 mr-2" />
                    Try Full Demo
                  </Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href={currentDemo.href}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </GlassPanel>
          </div>

          {/* Product Selector */}
          <div className="order-1 lg:order-2 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-neutral-100">Select a Product</h2>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? 'Pause' : 'Play'}
              </button>
            </div>

            {productDemos.map((demo, index) => {
              const DemoIcon = demo.icon
              const isActive = index === activeDemo
              return (
                <button
                  key={demo.id}
                  onClick={() => {
                    setActiveDemo(index)
                    setIsPlaying(false)
                  }}
                  className={cn(
                    'w-full text-left p-4 rounded-xl border transition-all duration-300',
                    isActive
                      ? `${colorClasses[demo.color as keyof typeof colorClasses]} border-opacity-50`
                      : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700'
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      'p-3 rounded-lg transition-colors',
                      isActive ? `bg-gradient-to-br ${colorClasses[demo.color as keyof typeof colorClasses]}` : 'bg-neutral-800'
                    )}>
                      <DemoIcon className={cn('w-5 h-5', isActive ? 'text-white' : 'text-neutral-400')} />
                    </div>
                    <div className="flex-1">
                      <h3 className={cn('font-semibold', isActive ? 'text-neutral-100' : 'text-neutral-300')}>
                        {demo.name}
                      </h3>
                      <p className="text-sm text-neutral-500">{demo.description}</p>
                    </div>
                    {isActive && (
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-current rounded-full animate-pulse" />
                        <span className="text-xs text-neutral-400">Active</span>
                      </div>
                    )}
                  </div>
                </button>
              )
            })}

            {/* View All Products Link */}
            <Link
              href="/products"
              className="flex items-center justify-center gap-2 text-gold-400 hover:text-gold-300 transition-colors mt-6"
            >
              <Globe className="w-4 h-4" />
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <GlassPanel variant="gold" className="inline-block px-8 py-4">
            <p className="text-neutral-300 mb-4">
              Ready to see how AI can transform your business?
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Request Custom Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/developers">
                  API Documentation
                </Link>
              </Button>
            </div>
          </GlassPanel>
        </div>
      </div>
    </section>
  )
}
