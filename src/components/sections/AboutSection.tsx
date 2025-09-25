'use client'

import { Target, Eye, Heart, Star, Users, Award } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const values = [
  {
    icon: Star,
    title: 'Innovation',
    description: 'Pushing the boundaries of AI technology to create groundbreaking solutions that redefine what\'s possible.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Maintaining the highest standards in everything we do, from code quality to client service.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working closely with our clients to understand their needs and deliver tailored solutions.'
  },
  {
    icon: Heart,
    title: 'Human-Centered',
    description: 'Building AI that enhances human capabilities rather than replacing them, fostering meaningful interactions.'
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.03),transparent_50%)]" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm mb-6">
            <span className="text-indigo-300 text-sm font-medium">About Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Our</span>{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Identity
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are pioneers in AI technology, dedicated to creating intelligent solutions that empower
            businesses to achieve unprecedented growth and efficiency.
          </p>
        </div>

        {/* Mission, Vision, Values Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-slate-700/30 border-slate-600/50 hover:border-indigo-500/50 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 leading-relaxed">
                To democratize AI technology and make intelligent solutions accessible to businesses
                of all sizes, enabling them to compete in the digital economy.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-700/30 border-slate-600/50 hover:border-indigo-500/50 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 leading-relaxed">
                A world where AI agents seamlessly integrate into every aspect of business operations,
                creating unprecedented levels of efficiency and innovation.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-700/30 border-slate-600/50 hover:border-indigo-500/50 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">Values</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 leading-relaxed">
                Innovation, excellence, collaboration, and human-centered design guide every decision
                we make and every solution we create.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Values Section */}
        <div className="bg-slate-800/50 rounded-3xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            Our Core Values in Action
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
                      {value.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
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
              5+
            </div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              100+
            </div>
            <div className="text-gray-400">AI Models Deployed</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              50+
            </div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              24/7
            </div>
            <div className="text-gray-400">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}