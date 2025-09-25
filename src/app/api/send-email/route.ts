import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { to, subject, text, html } = await request.json()

    // Create transporter using SMTP (you'll need to configure with actual email service)
    const transporter = nodemailer.createTransporter({
      service: 'gmail', // or your preferred email service
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
      }
    })

    // For now, we'll simulate sending and just log the email
    console.log('Contact Form Submission:')
    console.log('To:', to)
    console.log('Subject:', subject)
    console.log('Content:', text)

    // In a real implementation, you would uncomment this:
    /*
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      text: text,
      html: html
    })
    */

    // For demonstration purposes, we'll just return success
    // In production, you should configure actual email sending
    return NextResponse.json(
      { message: 'Email sent successfully (simulated)' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    )
  }
}