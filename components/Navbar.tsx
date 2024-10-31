'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button" // Adjust this path based on your setup

const Navbar = () => {
  const router = useRouter()

  const handleSignOut = () => {
      router.push('/')
  }

  return (
    <header className="bg-green-800 text-white p-3 fixed top-0 w-full shadow-md z-10 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">FarmTech Pro</h1>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><Link href="/home" className="hover:underline">Home</Link></li>
            <li><Link href="/animal_rearing" className="hover:underline">Animal Rearing</Link></li>
            <li><Link href="/plant_cropping" className="hover:underline">Plant Cropping</Link></li>
            <li><Link href="/disease_control" className="hover:underline">Disease Control</Link></li>
            <li><Link href="/modern_tools" className="hover:underline">Modern Tools</Link></li>
          </ul>
          <Button
            onClick={handleSignOut}
            variant="destructive"
            size="sm"
            className="ml-4"
          >
            Sign Out
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

