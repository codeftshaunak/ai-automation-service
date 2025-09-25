'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-slate-900/90 backdrop-blur-xl border-b border-slate-700/30 shadow-2xl shadow-indigo-500/10'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Drypta Agents"
                width={48}
                height={48}
                className="rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
                Drypta
              </span>
              <span className="text-xs font-medium text-gray-400 -mt-1 tracking-wider uppercase">
                AI Agents
              </span>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            <div className="flex items-center space-x-10">
              <button
                onClick={() => scrollToSection('hero')}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 font-medium group"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300" />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 font-medium group"
              >
                <span className="relative z-10">About</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300" />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 font-medium group"
              >
                <span className="relative z-10">Services</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 font-medium group"
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300" />
              </button>
            </div>

            <Button
              onClick={() => scrollToSection('contact')}
              className="relative group bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-600 text-white px-8 py-6 font-bold rounded-full shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <span className="relative">Get Started</span>
            </Button>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative h-12 w-12 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-xl"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mx-4 mt-2 py-6 space-y-1 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-700/30 shadow-2xl shadow-black/20">
            <div className="px-6 space-y-1">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-4 py-4 text-gray-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300 rounded-xl font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-4 text-gray-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300 rounded-xl font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-4 text-gray-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300 rounded-xl font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-4 text-gray-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300 rounded-xl font-medium"
              >
                Contact
              </button>
            </div>
            <div className="px-6 pt-4 border-t border-slate-700/50">
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-4 font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}