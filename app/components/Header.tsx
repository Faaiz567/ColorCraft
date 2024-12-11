import Link from 'next/link'
import { Home, Palette, Droplet, Layers } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white z-50">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-4 items-center"
        style={{
          filter: 'drop-shadow(0px 0px 2px #00FFFF)',
        }}>
          <li>
            <Link href="/" className="flex items-center hover:text-gray-300">
              <Home className="w-5 h-5 mr-1" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/color-palette" className="flex items-center hover:text-gray-300">
              <Palette className="w-5 h-5 mr-1" />
              <span className="hidden sm:inline">Color Palette</span>
            </Link>
          </li>
          <li>
            <Link href="/color-generator" className="flex items-center hover:text-gray-300">
              <Droplet className="w-5 h-5 mr-1" />
              <span className="hidden sm:inline">Color Generator</span>
            </Link>
          </li>
          <li>
            <Link href="/gradient-generator" className="flex items-center hover:text-gray-300">
              <Layers className="w-5 h-5 mr-1" />
              <span className="hidden sm:inline">Gradient Generator</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

