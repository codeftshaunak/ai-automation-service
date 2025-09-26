'use client'

import { Target, Eye, Heart, Star, Users, Award } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslations } from 'next-intl'

const values = [
  {
    icon: Star,
    key: 0
  },
  {
    icon: Award,
    key: 1
  },
  {
    icon: Users,
    key: 2
  },
  {
    icon: Heart,
    key: 3
  }
]

export default function AboutSection() {
  const t = useTranslations('about')
  return (
    <section id="about" className="py-32 relative">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.03),transparent_50%)]" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm mb-6">
            <span className="text-indigo-300 text-sm font-medium">{t('badge')}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">{t('our')}</span>{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t('identity')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Mission, Vision, Values Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-slate-700/30 border-slate-600/50 hover:border-indigo-500/50 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">{t('mission.title')}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 leading-relaxed">
                {t('mission.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-700/30 border-slate-600/50 hover:border-indigo-500/50 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">{t('vision.title')}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 leading-relaxed">
                {t('vision.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-700/30 border-slate-600/50 hover:border-indigo-500/50 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">{t('values.title')}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 leading-relaxed">
                {t('values.description')}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Values Section */}
        <div className="bg-slate-800/50 rounded-3xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            {t('coreValuesTitle')}
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {t(`valuesDetails.${value.key}.title`)}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {t(`valuesDetails.${value.key}.description`)}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t('stats.experience')}
            </div>
            <div className="text-gray-400">{t('stats.experienceLabel')}</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t('stats.models')}
            </div>
            <div className="text-gray-400">{t('stats.modelsLabel')}</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t('stats.clients')}
            </div>
            <div className="text-gray-400">{t('stats.clientsLabel')}</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t('stats.support')}
            </div>
            <div className="text-gray-400">{t('stats.supportLabel')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}