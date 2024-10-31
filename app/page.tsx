import Head from 'next/head'
import Image from 'next/image'
import { /* motion, */ /*MotionProps*/ } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Leaf, Cloud, TrendingUp, Users, ChevronRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

// Hero Section
const Hero = () => (
  <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
    <Image
      src="/img/pexels-nc-farm-bureau-mark-2255801.jpg?height=1080&width=1920"
      alt="Lush agricultural field"
      layout="fill"
      objectFit="cover"
      priority
      className="z-0"
    />
    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
    <div className="absolute inset-0 z-0">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-green-900/30 to-transparent"></div>
    </div>
    {/* <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="z-20 text-center space-y-6 px-4 max-w-4xl"
    > */}
    <div className="z-20 text-center space-y-6 px-4 max-w-4xl">
      <h1 className="text-5xl md:text-7xl font-bold">
        FarmTech Pro
      </h1>
      <p className="text-xl md:text-2xl">
        Revolutionizing agriculture, one tap at a time
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
          Download App
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
        <div className="flex gap-4 w-full sm:w-auto">
          <Link href="/sign-in">
            <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white w-full sm:w-auto">
              Sign In
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white w-full sm:w-auto">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
    {/* </motion.div> */}
    <div className="absolute bottom-0 left-0 w-full flex justify-center pb-8 z-20">
      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      > */}
      <div>
        <ChevronRight size={40} className="transform rotate-90" />
      </div>
      {/* </motion.div> */}
    </div>
  </section>
)

// Feature Card Component
type FeatureCardProps = {
  icon: React.ElementType,
  title: string,
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
    <Icon className="h-12 w-12 text-green-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

// Features Section
const Features = () => (
  <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        Key Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={Leaf}
          title="Crop Management"
          description="Optimize your crop yield with AI-powered insights and recommendations."
        />
        <FeatureCard
          icon={Cloud}
          title="Weather Forecasting"
          description="Stay ahead of the weather with accurate, localized forecasts."
        />
        <FeatureCard
          icon={TrendingUp}
          title="Market Trends"
          description="Make informed decisions with real-time market data and analysis."
        />
        <FeatureCard
          icon={Users}
          title="Community Support"
          description="Connect with fellow farmers and agricultural experts for advice and support."
        />
      </div>
    </div>
  </section>
)

// Testimonial Card Component
type TestimonialCardProps = {
  name: string,
  role: string,
  quote: string,
  image: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, quote, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
    <Image
      src={image}
      alt={name}
      width={64}
      height={64}
      className="rounded-full mx-auto mb-4"
    />
    <p className="text-gray-600 italic mb-4">&quot;{quote}&quot;</p>
    <h4 className="font-semibold">{name}</h4>
    <p className="text-sm text-gray-500">{role}</p>
  </div>
)

// Testimonials Section
const Testimonials = () => (
  <section className="py-20 bg-green-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialCard
          name="John Mensah"
          role="Organic Farmer"
          quote="FarmTech Pro has revolutionized how I manage my crops. The insights are invaluable!"
          image="/img/Mensah.jpg?height=64&width=64"
        />
        <TestimonialCard
          name="Owusu Smith"
          role="Agricultural Consultant"
          quote="I recommend FarmTech Pro to all my clients. It's a game-changer in the industry."
          image="/img/Farmer.jpg?height=74&width=74"
        />
        <TestimonialCard
          name="Jane Johnson"
          role="Large-scale Farm Owner"
          quote="The market trend analysis has helped me maximize my profits. Couldn't farm without it!"
          image="/img/Jane.jpg?height=64&width=64"
        />
      </div>
    </div>
  </section>
)

// Footer Section
const Footer = () => (
  <footer className="bg-green-800 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">FarmTech Pro</h3>
          <p className="text-sm">Revolutionizing agriculture, one tap at a time</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
          <form className="space-y-2">
            <Input type="email" placeholder="Enter your email" className="w-full" />
            <Button type="submit" className="w-full bg-white text-green-800 hover:bg-gray-100">
              Subscribe
            </Button>
          </form>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-300"><Facebook /></a>
            <a href="#" className="hover:text-gray-300"><Twitter /></a>
            <a href="#" className="hover:text-gray-300"><Instagram /></a>
            <a href="#" className="hover:text-gray-300"><Linkedin /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

// Main Page Component
export default function Home() {
  return (
    <>
      <Head>
        <title>FarmTech Pro</title>
      </Head>
      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
