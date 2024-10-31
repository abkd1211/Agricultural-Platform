'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Lock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

interface FormFieldProps {
  label: string
  icon: React.ElementType
  type: string
  placeholder: string
}

const FormField = ({ label, icon: Icon, type, placeholder }: FormFieldProps) => (
  <div className="space-y-2">
    <Label htmlFor={label.toLowerCase()} className="text-sm font-medium text-gray-700">
      {label}
    </Label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      <Input
        type={type}
        id={label.toLowerCase()}
        placeholder={placeholder}
        className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
      />
    </div>
  </div>
)

export default function SignIn() {
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your sign-in logic here
    router.push('/home') // Redirect to home page after successful sign-in
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-[#f5f0e6] flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Image
            src="/img/logo2.png?height=80&width=80"
            alt="Farm Tech Pro Logo"
            width={80}
            height={80}
            className="mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back to Farm Tech Pro</h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <FormField label="Email" icon={Mail} type="email" placeholder="Enter your email" />
            <FormField label="Password" icon={Lock} type="password" placeholder="Enter your password" />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-gray-600 cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <Link href="/forgot-password" className="text-sm text-green-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/sign-up" className="text-green-600 hover:underline">
                Sign up here
              </Link>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}