import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              Lets<span className="text-gray-900">Convert</span>
            </div>
            <p className="text-gray-100 mb-6 max-w-md">
              The most complete PDF solution with all the tools you need to work with PDFs. 100% free and easy to use.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Tools</h3>
            <ul className="space-y-2">
              <li><Link to="/merge" className="text-gray-400 hover:text-white">Merge PDF</Link></li>
              <li><Link to="/split" className="text-gray-400 hover:text-white">Split PDF</Link></li>
              <li><Link to="/compress" className="text-gray-400 hover:text-white">Compress PDF</Link></li>
              <li><Link to="/pdf-to-word" className="text-gray-400 hover:text-white">PDF to Word</Link></li>
              <li><Link to="/word-to-pdf" className="text-gray-400 hover:text-white">Word to PDF</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/help" className="text-gray-400 hover:text-white">Help Center</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LetsConvert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
