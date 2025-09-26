'use client'

import { Check, Star, Zap, Crown, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

const pricingPlans = [
  {
    index: 0,
    icon: Star,
    gradient: 'from-blue-500 to-indigo-600',
    badgeVariant: 'outline' as const,
    popular: false
  },
  {
    index: 1,
    icon: Zap,
    gradient: 'from-indigo-500 to-purple-600',
    badgeVariant: 'default' as const,
    popular: true
  },
  {
    index: 2,
    icon: Crown,
    gradient: 'from-purple-500 to-pink-600',
    badgeVariant: 'secondary' as const,
    popular: false
  },
  {
    index: 3,
    icon: Crown,
    gradient: 'from-orange-500 to-red-600',
    badgeVariant: 'default' as const,
    popular: false
  }
]

export default function PricingSection() {
  const t = useTranslations('pricing')

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="py-32 bg-slate-800/30 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(120,119,198,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.05),transparent_50%)]" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm mb-6">
            <span className="text-indigo-300 text-sm font-medium">
              {t('badge')}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">{t('title')}</span>{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t('titleHighlight')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-6 pt-6">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <div key={index} className="relative">
                {/* Popular Badge - Outside Card */}
                {plan.popular && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 text-xs font-semibold shadow-lg">
                      {t('popularBadge')}
                    </Badge>
                  </div>
                )}

                <Card
                  className={`group relative h-full bg-slate-800/30 border-slate-600/30 hover:border-indigo-400/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-500/15 backdrop-blur-sm overflow-hidden rounded-2xl ${
                    plan.popular ? 'border-indigo-400/50 scale-105' : ''
                  }`}
                >
                  {/* Background Gradient Effect */}
                  <div className={`absolute -inset-px bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-2xl blur-sm`} />

                <CardHeader className="pb-6 relative p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl`}>
                    <Icon className="h-8 w-8 text-white drop-shadow-sm" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-indigo-300 transition-colors font-black mb-2">
                    {t(`plans.${plan.index}.name`)}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      {t(`plans.${plan.index}.price`)}
                    </span>
                    <span className="text-gray-400 ml-2">
                      {t(`plans.${plan.index}.period`)}
                    </span>
                  </div>
                  <CardDescription className="text-gray-300 text-sm leading-relaxed">
                    {t(`plans.${plan.index}.description`)}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative px-8 pb-8 flex-1">
                  <div className="space-y-6 h-full flex flex-col justify-between">
                    {/* Features */}
                    <ul className="space-y-3 flex-1">
                      {[0, 1, 2, 3, 4].map((featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                          <Check className="w-4 h-4 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{t(`plans.${plan.index}.features.${featureIndex}`)}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="pt-6">
                      <Button
                        onClick={scrollToContact}
                        className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                          plan.popular
                            ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white shadow-lg'
                            : 'bg-slate-700/50 text-indigo-300 hover:bg-indigo-500/20 hover:text-white border border-slate-600/50 hover:border-indigo-400/50'
                        }`}
                      >
                        <span className="flex items-center justify-center">
                          {t('getStarted')}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">
            {t('customSolution')}
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            variant="outline"
            className="border-2 border-indigo-400/40 bg-slate-800/40 backdrop-blur-xl text-indigo-300 hover:text-white hover:bg-indigo-500/20 px-8 py-3 text-lg font-bold rounded-full transition-all duration-300 hover:border-indigo-400 hover:scale-105"
          >
            {t('contactSales')}
          </Button>
        </div>
      </div>
    </section>
  )
}