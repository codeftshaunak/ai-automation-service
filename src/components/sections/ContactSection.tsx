'use client'

import { useState, FormEvent } from 'react'
import { TrendingUp, Shield, Users, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import toast, { Toaster } from 'react-hot-toast'
import { useTranslations } from 'next-intl'

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  phone: string
  industry: string
  budget: string
  projectType: string
  message: string
}

const benefits = [
  {
    icon: TrendingUp,
    index: 0
  },
  {
    icon: Shield,
    index: 1
  },
  {
    icon: Users,
    index: 2
  }
]

export default function ContactSection() {
  const t = useTranslations('contact')
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    budget: '',
    projectType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create email content
      const emailContent = `
New Contact Form Submission:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Industry: ${formData.industry}
Budget: ${formData.budget}
Project Type: ${formData.projectType}

Message:
${formData.message}
      `

      // Send email using EmailJS (you'll need to configure this)
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'diptodev17@gmail.com',
          subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
          text: emailContent
        }),
      })

      if (response.ok) {
        toast.success(t('success'))
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          industry: '',
          budget: '',
          projectType: '',
          message: ''
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error(t('error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Toaster position="top-right" />
      <section id="contact" className="py-32 bg-slate-800/30 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(120,119,198,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(139,92,246,0.05),transparent_50%)]" />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm mb-6">
              <span className="text-indigo-300 text-sm font-medium">{t('badge')}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {t('start')}{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {t('transformation')}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
            {/* Benefits Section */}
            <div className="mb-12 lg:mb-0">
              <div className="bg-slate-700/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
                <h3 className="text-2xl font-semibold mb-8 flex items-center text-white">
                  <CheckCircle className="w-6 h-6 text-indigo-400 mr-3" />
                  {t('whyPartner')}
                </h3>

                <div className="space-y-6">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                          <Icon className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">
                            {t(`benefits.${benefit.index}.title`)}
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {t(`benefits.${benefit.index}.description`)}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-slate-600/50 space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-5 h-5 text-indigo-400" />
                    <span>{t('contactInfo.email')}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-5 h-5 text-indigo-400" />
                    <span>{t('contactInfo.phone')}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-indigo-400" />
                    <span>{t('contactInfo.location')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-slate-700/30 border-slate-600/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{t('form.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-gray-300">
                          {t('form.firstName')} {t('form.required')}
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="bg-slate-800/50 border-slate-600/50 text-white focus:border-indigo-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-gray-300">
                          {t('form.lastName')} {t('form.required')}
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="bg-slate-800/50 border-slate-600/50 text-white focus:border-indigo-500"
                          required
                        />
                      </div>
                    </div>

                    {/* Email and Company */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-300">
                          {t('form.email')} {t('form.required')}
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="bg-slate-800/50 border-slate-600/50 text-white focus:border-indigo-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-gray-300">
                          Company *
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="bg-slate-800/50 border-slate-600/50 text-white focus:border-indigo-500"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300">
                        {t('form.phone')}
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-slate-800/50 border-slate-600/50 text-white focus:border-indigo-500"
                      />
                    </div>

                    {/* Industry and Budget */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-gray-300">{t('form.industry')}</Label>
                        <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                          <SelectTrigger className="bg-slate-800/50 border-slate-600/50 text-white">
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-gray-300">{t('form.budget')}</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger className="bg-slate-800/50 border-slate-600/50 text-white">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-10k">Under $10K</SelectItem>
                            <SelectItem value="10k-50k">$10K - $50K</SelectItem>
                            <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                            <SelectItem value="over-100k">Over $100K</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Project Type */}
                    <div className="space-y-2">
                      <Label className="text-gray-300">Project Type</Label>
                      <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                        <SelectTrigger className="bg-slate-800/50 border-slate-600/50 text-white">
                          <SelectValue placeholder="What are you interested in?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ai-agents">AI Agents Development</SelectItem>
                          <SelectItem value="automation">Process Automation</SelectItem>
                          <SelectItem value="chatbot">Conversational AI</SelectItem>
                          <SelectItem value="analytics">Predictive Analytics</SelectItem>
                          <SelectItem value="integration">System Integration</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-300">
                        Project Details *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="bg-slate-800/50 border-slate-600/50 text-white focus:border-indigo-500 min-h-[120px]"
                        placeholder="Tell us about your project, goals, and how we can help..."
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg font-semibold group"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          {isSubmitting ? t('form.submitting') : t('form.submit')}
                          <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}