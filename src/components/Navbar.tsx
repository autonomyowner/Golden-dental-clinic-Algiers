import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed w-full z-50 glass-effect border-b border-amber-400/30">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/pexels-karolina-grabowska-4386464.jpg" 
              alt="Golden Dental Clinic Logo" 
              className="w-12 h-12 rounded-full object-cover border-2 border-amber-400/50"
            />
            <div>
              <h1 className="text-white font-bold text-xl">Golden Dental Clinic</h1>
              <p className="premium-text text-xs">Dr. Yasser Khenniche</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${location.pathname === '/' ? 'text-amber-400' : 'text-white hover:text-amber-400'}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors ${location.pathname === '/services' ? 'text-amber-400' : 'text-white hover:text-amber-400'}`}
            >
              Services
            </Link>
            <Link 
              to="/pricing" 
              className={`transition-colors ${location.pathname === '/pricing' ? 'text-amber-400' : 'text-white hover:text-amber-400'}`}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${location.pathname === '/contact' ? 'text-amber-400' : 'text-white hover:text-amber-400'}`}
            >
              Contact
            </Link>
            <a 
              href="tel:0797339451" 
              className="btn-primary"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-amber-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t border-amber-400/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className={`block px-3 py-2 transition-colors ${location.pathname === '/' ? 'text-amber-400' : 'text-white hover:text-amber-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`block px-3 py-2 transition-colors ${location.pathname === '/services' ? 'text-amber-400' : 'text-white hover:text-amber-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/pricing" 
                className={`block px-3 py-2 transition-colors ${location.pathname === '/pricing' ? 'text-amber-400' : 'text-white hover:text-amber-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 transition-colors ${location.pathname === '/contact' ? 'text-amber-400' : 'text-white hover:text-amber-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="tel:0797339451" 
                className="block px-3 py-2 btn-primary text-center"
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 