const ContactPage = () => {
  const contactMethods = [
    {
      icon: "📞",
      title: "Call Us",
      value: "0797339451",
      description: "Book your dental appointment",
      link: "tel:+213797339451",
      color: "bg-green-500/20 border-green-500/30"
    },
    {
      icon: "📍",
      title: "Visit Us",
      value: "Cité les annassers 2, Kouba",
      description: "Our dental clinic location",
      link: "#",
      color: "bg-blue-500/20 border-blue-500/30"
    },
    {
      icon: "📱",
      title: "Instagram",
      value: "@dr_yasser_khenniche",
      description: "Follow for dental tips and updates",
      link: "https://www.instagram.com/dr_yasser_khenniche/",
      color: "bg-purple-500/20 border-purple-500/30"
    },
    {
      icon: "🕰",
      title: "Hours",
      value: "Mon-Sat 9AM-7PM",
      description: "Clinic operating hours",
      link: "#",
      color: "bg-amber-500/20 border-amber-500/30"
    }
  ]


  return (
    <section id="contact-page" className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 glass-effect border border-blue-500/30 rounded-full premium-text text-sm font-medium mb-8">
            <span className="mr-2">🦷</span>
            Contact Golden Dental Clinic
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Contact
            <span className="block premium-text">Dr. Yasser Khenniche</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your smile? Get in touch with Golden Dental Clinic. 
            Dr. Yasser Khenniche is here to discuss your dental needs and create your perfect smile.
          </p>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? "_blank" : undefined}
                rel={method.link.startsWith('http') ? "noopener noreferrer" : undefined}
                className={`premium-card p-6 text-center hover:transform hover:scale-105 transition-all duration-300 ${method.color}`}
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{method.description}</p>
                <div className="premium-text font-semibold">{method.value}</div>
              </a>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="premium-card p-8">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Service Type</label>
                  <select className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500">
                    <option value="">Select service type</option>
                    <option value="checkup">General Checkup</option>
                    <option value="cleaning">Teeth Cleaning</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="restorative">Restorative Treatment</option>
                    <option value="orthodontics">Orthodontics</option>
                    <option value="emergency">Emergency Care</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Preferred Time</label>
                  <select className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500">
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 5PM)</option>
                    <option value="evening">Evening (5PM - 7PM)</option>
                    <option value="weekend">Weekend Available</option>
                    <option value="flexible">Flexible Schedule</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Dental Concerns</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Please describe any dental concerns, pain, or specific treatments you're interested in..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-lg py-4"
                >
                  🚀 Book Appointment
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="premium-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 premium-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-slate-900 text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Location</h4>
                      <p className="text-gray-300 text-sm">
                        Cité les annassers 2, Kouba, Algeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 premium-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-slate-900 text-xl">⏰</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Business Hours</h4>
                      <p className="text-gray-300 text-sm">
                        Monday - Saturday: 9:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 premium-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-slate-900 text-xl">💼</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Services</h4>
                      <p className="text-gray-300 text-sm">
                        General, Cosmetic, Restorative, Emergency Dentistry
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 premium-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-slate-900 text-xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Response Time</h4>
                      <p className="text-gray-300 text-sm">
                        Within 24 hours for all inquiries
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="premium-gradient p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Golden Dental Clinic?</h3>
                <ul className="space-y-3 text-slate-900">
                  <li className="flex items-center">
                    <span className="mr-3">✓</span>
                    Experienced Dr. Yasser Khenniche
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">✓</span>
                    Modern dental technology and techniques
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">✓</span>
                    Comprehensive dental care services
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">✓</span>
                    Personalized patient care and follow-up
                  </li>
                </ul>
              </div>
            </div>
          </div>


          {/* Quick Contact Section */}
          <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Quick Contact Options</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a 
                href="tel:+213797339451" 
                className="premium-card p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 text-sm">Book your appointment now</p>
              </a>
              
              <a 
                href="https://www.instagram.com/dr_yasser_khenniche/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="premium-card p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
                <p className="text-gray-300 text-sm">Follow for dental tips</p>
              </a>
              
              <a 
                href="#" 
                className="premium-card p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 text-sm">Kouba, Algeria location</p>
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Smile?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't wait to achieve the perfect smile. Contact Golden Dental Clinic today and let Dr. Yasser Khenniche help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+213797339451" 
                className="btn-primary text-lg px-8 py-4"
              >
                🚀 Book Appointment
              </a>
              <a 
                href="/pricing" 
                className="btn-secondary text-lg px-8 py-4"
              >
                <span className="mr-2">🦷</span>
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
