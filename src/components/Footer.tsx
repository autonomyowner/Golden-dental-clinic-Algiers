const Footer = () => {
  return (
    <footer className="glass-effect border-t border-amber-500/30">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 premium-gradient rounded-full flex items-center justify-center shadow-lg">
                <span className="text-slate-900 font-bold text-lg">🦷</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Golden Dental Clinic</h3>
                <p className="premium-text text-sm">Dr. Yasser Khenniche</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Premium dental clinic in Kouba, Algeria, specializing in comprehensive dental care, 
              cosmetic dentistry, and advanced treatments with modern technology.
            </p>
            <div className="flex space-x-4">
              <a 
                href="tel:+213797339451" 
                className="premium-text hover:text-amber-300 transition-colors"
              >
                <span className="text-2xl">📞</span>
              </a>
              <a 
                href="https://www.instagram.com/dr_yasser_khenniche/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="premium-text hover:text-amber-300 transition-colors"
              >
                <span className="text-2xl">📱</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                Cité les annassers 2, Kouba
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                0797339451
              </li>
              <li className="flex items-center">
                <span className="mr-2">📱</span>
                @dr_yasser_khenniche
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-500/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Golden Dental Clinic - Dr. Yasser Khenniche. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a 
              href="tel:+213797339451" 
              className="premium-text hover:text-amber-300 transition-colors text-sm"
            >
              Book Appointment
            </a>
            <a 
              href="https://www.instagram.com/dr_yasser_khenniche/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="premium-text hover:text-amber-300 transition-colors text-sm"
            >
              Follow Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 