'use client'

import { Bot, Zap, MessageCircle, TrendingUp, Database, Layers } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    icon: Bot,
    title: 'Intelligent Agents',
    description: 'Deploy autonomous AI agents that learn, adapt, and execute complex tasks with minimal human intervention.',
    features: ['Machine Learning', 'Natural Language Processing', 'Automated Decision Making']
  },
  {
    icon: Zap,
    title: 'Smart Automation',
    description: 'Streamline operations with intelligent automation that handles repetitive tasks and optimizes workflows.',
    features: ['Process Automation', 'Workflow Optimization', 'Task Scheduling']
  },
  {
    icon: MessageCircle,
    title: 'Conversational AI',
    description: 'Create sophisticated chatbots and virtual assistants that provide human-like interactions.',
    features: ['Multi-language Support', 'Context Awareness', '24/7 Availability']
  },
  {
    icon: TrendingUp,
    title: 'Predictive Intelligence',
    description: 'Leverage advanced analytics and machine learning to forecast trends and make data-driven decisions.',
    features: ['Predictive Modeling', 'Risk Assessment', 'Market Analysis']
  },
  {
    icon: Database,
    title: 'Data Intelligence',
    description: 'Transform raw data into actionable insights with our comprehensive data analysis platform.',
    features: ['Data Mining', 'Pattern Recognition', 'Real-time Analytics']
  },
  {
    icon: Layers,
    title: 'Integration Platform',
    description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.',
    features: ['API Integration', 'Custom Solutions', 'Scalable Architecture']
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm mb-6">
            <span className="text-indigo-300 text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">AI Solutions</span>{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Tailored for You
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From intelligent automation to predictive analytics, we offer comprehensive AI solutions
            that transform how businesses operate and compete.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group bg-slate-700/30 border-slate-600/50 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our AI experts design a custom solution that fits your specific needs and objectives.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}