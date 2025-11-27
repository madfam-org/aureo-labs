'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, ExternalLink, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { GlassPanel } from '@/components/ui/GlassPanel'
import type { LucideIcon } from 'lucide-react'

export interface DemoCardProps {
  id: string
  name: string
  tagline: string
  description: string
  icon: LucideIcon
  color: 'gold' | 'green' | 'purple' | 'blue' | 'red'
  demoUrl: string
  productUrl: string
  features: string[]
  stats: Array<{ label: string; value: string }>
  demoPreview?: React.ReactNode
}

const colorVariants = {
  gold: {
    gradient: 'from-gold-500 to-amber-600',
    border: 'border-gold-500/30',
    bg: 'bg-gold-500/10',
    text: 'text-gold-400',
    hover: 'hover:border-gold-500/50',
  },
  green: {
    gradient: 'from-green-500 to-emerald-600',
    border: 'border-green-500/30',
    bg: 'bg-green-500/10',
    text: 'text-green-400',
    hover: 'hover:border-green-500/50',
  },
  purple: {
    gradient: 'from-purple-500 to-violet-600',
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    hover: 'hover:border-purple-500/50',
  },
  blue: {
    gradient: 'from-blue-500 to-cyan-600',
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    hover: 'hover:border-blue-500/50',
  },
  red: {
    gradient: 'from-red-500 to-rose-600',
    border: 'border-red-500/30',
    bg: 'bg-red-500/10',
    text: 'text-red-400',
    hover: 'hover:border-red-500/50',
  },
}

export function InteractiveDemoCard({
  name,
  tagline,
  description,
  icon: Icon,
  color,
  demoUrl,
  productUrl,
  features,
  stats,
  demoPreview,
}: DemoCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const colors = colorVariants[color]

  return (
    <GlassPanel
      className={cn(
        'group relative overflow-hidden transition-all duration-500',
        colors.border,
        colors.hover,
        isHovered && 'shadow-lg shadow-neutral-900/50'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient on hover */}
      <div
        className={cn(
          'absolute inset-0 opacity-0 transition-opacity duration-500',
          colors.bg,
          isHovered && 'opacity-100'
        )}
      />

      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={cn('p-3 rounded-xl bg-gradient-to-br', colors.gradient)}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-100">{name}</h3>
              <p className="text-sm text-neutral-500">{tagline}</p>
            </div>
          </div>
          <Link
            href={productUrl}
            className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-neutral-400" />
          </Link>
        </div>

        {/* Description */}
        <p className="text-neutral-400 mb-4">{description}</p>

        {/* Demo Preview Area */}
        {demoPreview && (
          <div className="mb-4 p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
            {demoPreview}
          </div>
        )}

        {/* Features */}
        <div className="mb-4">
          <div className="grid grid-cols-2 gap-2">
            {features.slice(0, 4).map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm">
                <CheckCircle className={cn('w-4 h-4', colors.text)} />
                <span className="text-neutral-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-6 mb-6 py-4 border-y border-neutral-800">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className={cn('text-2xl font-bold', colors.text)}>{stat.value}</div>
              <div className="text-xs text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3">
          <Button asChild className="flex-1">
            <Link href={demoUrl}>
              <Play className="w-4 h-4 mr-2" />
              Try Demo
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href={productUrl}>
              Details
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Corner accent */}
      <div
        className={cn(
          'absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 transition-opacity duration-500',
          colors.bg,
          isHovered && 'opacity-50'
        )}
      />
    </GlassPanel>
  )
}

// Quick demo preview components for use with InteractiveDemoCard
export function MiniChatPreview() {
  return (
    <div className="space-y-2">
      <div className="bg-neutral-800 p-2 rounded text-xs text-neutral-300 ml-4">
        "Analyze Q3 sales data"
      </div>
      <div className="bg-gold-500/10 border border-gold-500/20 p-2 rounded text-xs text-neutral-200 mr-4">
        Q3 revenue: $2.4M (+18%). Top segment: Enterprise.
      </div>
    </div>
  )
}

export function MiniCalculatorPreview() {
  return (
    <div className="flex items-center justify-between">
      <div className="text-xs text-neutral-400">
        PLA • 125cm³ • Medium
      </div>
      <div className="text-lg font-bold text-green-400">$23.50</div>
    </div>
  )
}

export function MiniQuotePreview() {
  return (
    <div className="flex items-center justify-between">
      <div className="text-xs text-neutral-400">3 line items</div>
      <div className="text-lg font-bold text-purple-400">$1,247.00</div>
    </div>
  )
}

export function MiniInsightsPreview() {
  return (
    <div className="flex items-center justify-between">
      <div className="text-xs text-neutral-400">Savings potential</div>
      <div className="text-lg font-bold text-blue-400">+$2,450/mo</div>
    </div>
  )
}
