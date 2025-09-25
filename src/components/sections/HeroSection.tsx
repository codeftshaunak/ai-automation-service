'use client'

import { ArrowRight, Play, Sparkles, Zap, Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/30 to-purple-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),transparent)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0deg,rgba(120,119,198,0.1)_90deg,transparent_180deg,rgba(139,92,246,0.1)_270deg,transparent_360deg)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:6rem_6rem] animate-pulse" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-indigo-400/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-2 h-2 bg-purple-400/30 rounded-full animate-bounce" />
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-blue-400/20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-indigo-400/10 rounded-full animate-bounce" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-10">
          {/* Enhanced Badge */}
          <div className="flex justify-center animate-fadeInUp">
            <Badge variant="outline" className="px-6 py-3 text-lg bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/30 backdrop-blur-xl">
              <Sparkles className="w-5 h-5 mr-2 text-indigo-400" />
              <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent font-semibold">
                Next-Generation AI Solutions
              </span>
            </Badge>
          </div>

          {/* Enhanced Main Title */}
          <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none">
              <span className="block mb-4">
                <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent animate-pulse">
                  AI Agents
                </span>
                <span className="text-white/90 ml-4">that</span>
              </span>
              <span className="block relative">
                <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                  Transform
                </span>
                <span className="absolute -inset-1 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-xl -z-10 animate-pulse" />
              </span>
              <span className="block text-white/80 text-lg sm:text-2xl lg:text-3xl font-medium mt-4 tracking-wide">
                Everything
              </span>
            </h1>

            {/* Enhanced Subtitle */}
            <p className="max-w-4xl mx-auto text-xl sm:text-2xl text-gray-300 leading-relaxed font-light">
              Deploy autonomous AI agents that learn, adapt, and execute complex business operations
              <span className="text-indigo-300 font-medium"> with unprecedented intelligence.</span>
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              onClick={() => scrollToSection('services')}
              className="relative group bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-600 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <span className="relative flex items-center">
                <Zap className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                Explore Solutions
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="group relative border-2 border-indigo-400/30 bg-slate-800/30 backdrop-blur-xl text-indigo-300 hover:text-white hover:bg-indigo-500/20 px-12 py-6 text-xl font-bold rounded-full transition-all duration-300 hover:border-indigo-400 hover:scale-105"
            >
              <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Watch Demo
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/0 via-purple-600/0 to-indigo-600/0 group-hover:from-indigo-600/20 group-hover:via-purple-600/20 group-hover:to-indigo-600/20 rounded-full blur transition-all duration-300" />
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className="pt-20 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300 hover:scale-105">
                <div className="space-y-3">
                  <div className="relative">
                    <Brain className="w-8 h-8 mx-auto text-indigo-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    300%
                  </div>
                  <div className="text-gray-300 font-medium">Average ROI Increase</div>
                  <div className="text-sm text-gray-500">Within 12 months</div>
                </div>
              </div>

              <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-indigo-500/5 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105">
                <div className="space-y-3">
                  <div className="relative">
                    <Zap className="w-8 h-8 mx-auto text-purple-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    50+
                  </div>
                  <div className="text-gray-300 font-medium">Enterprise Clients</div>
                  <div className="text-sm text-gray-500">Trusted worldwide</div>
                </div>
              </div>

              <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-blue-500/5 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
                <div className="space-y-3">
                  <div className="relative">
                    <Sparkles className="w-8 h-8 mx-auto text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    99.9%
                  </div>
                  <div className="text-gray-300 font-medium">Uptime Guarantee</div>
                  <div className="text-sm text-gray-500">24/7 reliability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}