

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

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

export default Footer
