# Drypta Agents - AI Solutions Website

A modern, professional website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components. This website showcases AI solutions and services with a clean, responsive design inspired by cutting-edge technology platforms.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Professional Design**: Clean, modern UI with glassmorphism effects and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Contact Form**: Working contact form with email functionality
- **SEO Optimized**: Built-in Next.js SEO optimization
- **Performance Focused**: Optimized for fast loading and smooth interactions

## 🛠️ Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Email**: Nodemailer
- **Fonts**: Inter (Google Fonts)

## 📋 Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd drypta-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your email configuration:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   CONTACT_EMAIL=diptodev17@gmail.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Setup

To enable the contact form email functionality:

### Gmail Setup (Recommended)
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. Use your Gmail address and the generated app password in `.env.local`

### Other Email Providers
You can configure other SMTP providers by updating the transporter configuration in `src/app/api/send-email/route.ts`.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── api/send-email/          # Email API endpoint
│   ├── globals.css              # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx      # Navigation component
│   │   └── Footer.tsx          # Footer component
│   ├── sections/
│   │   ├── HeroSection.tsx     # Hero section
│   │   ├── AboutSection.tsx    # About section
│   │   ├── ServicesSection.tsx # Services section
│   │   └── ContactSection.tsx  # Contact section
│   └── ui/                     # shadcn/ui components
```

## 🎨 Design Features

- **Professional Color Scheme**: Dark theme with indigo/purple gradient accents
- **Glassmorphism Effects**: Modern frosted glass UI elements
- **Smooth Animations**: Hover effects and transitions
- **Typography**: Inter font for excellent readability
- **Responsive Grid**: Mobile-first responsive design
- **Interactive Elements**: Smooth scrolling navigation and form interactions

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
You can deploy to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Customization

### Colors
Edit the Tailwind configuration or CSS variables to change the color scheme.

### Content
Update the content in each section component:
- Hero: `src/components/sections/HeroSection.tsx`
- About: `src/components/sections/AboutSection.tsx`
- Services: `src/components/sections/ServicesSection.tsx`
- Contact: `src/components/sections/ContactSection.tsx`

### Styling
- Global styles: `src/app/globals.css`
- Component-specific styles: Use Tailwind classes
- Custom animations: Add to globals.css

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📞 Support

For support or questions about this website, please contact:
- Email: diptodev17@gmail.com

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
