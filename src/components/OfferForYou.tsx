const Services = () => {
  const services = [
    {
      icon: "🦷",
      title: "General Dentistry",
      description: "Comprehensive oral health care including preventive treatments, cleanings, and routine dental procedures.",
      features: [
        "Regular dental checkups",
        "Professional teeth cleaning",
        "Cavity fillings and restorations",
        "Oral health assessments",
        "Preventive care education",
        "Dental X-rays and diagnostics"
      ]
    },
    {
      icon: "✨",
      title: "Cosmetic Dentistry",
      description: "Aesthetic dental treatments to enhance your smile and boost your confidence with beautiful, natural results.",
      features: [
        "Professional teeth whitening",
        "Porcelain veneers",
        "Smile design consultation",
        "Composite bonding",
        "Gum contouring",
        "Complete smile makeovers"
      ]
    },
    {
      icon: "🔧",
      title: "Restorative Dentistry",
      description: "Advanced treatments to restore damaged or missing teeth, improving both function and appearance.",
      features: [
        "Dental crowns and bridges",
        "Root canal therapy",
        "Dental implants",
        "Tooth extraction",
        "Dentures and partials",
        "Emergency dental care"
      ]
    },
    {
      icon: "🛒",
      title: "Orthodontics",
      description: "Teeth straightening solutions for all ages, including traditional braces and modern clear aligners.",
      features: [
        "Traditional metal braces",
        "Clear ceramic braces",
        "Invisalign treatment",
        "Retainer therapy",
        "Bite correction",
        "Adult orthodontics"
      ]
    }
  ]

  return (
    <section id="services" className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 glass-effect border border-amber-500/30 rounded-full premium-text text-sm font-medium mb-8">
            <span className="mr-2">🦷</span>
            Comprehensive Dental Services
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Dental Care
            <span className="block premium-text">Services</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Dr. Yasser Khenniche provides comprehensive dental care services at Golden Dental Clinic. 
            Each treatment is personalized with attention to detail and modern dental standards.
          </p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="premium-card p-8 text-left">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-slate-800/30 backdrop-blur-md border border-amber-500/30 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Treatment Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-slate-900 text-2xl">📋</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Consultation</h4>
                <p className="text-gray-300 text-sm">Understanding your dental needs and concerns</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-slate-900 text-2xl">🔍</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Diagnosis</h4>
                <p className="text-gray-300 text-sm">Comprehensive examination and treatment planning</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-slate-900 text-2xl">🦷</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Treatment</h4>
                <p className="text-gray-300 text-sm">Professional care using modern dental technology</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-slate-900 text-2xl">✨</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Follow-up</h4>
                <p className="text-gray-300 text-sm">Ongoing care and maintenance for optimal oral health</p>
              </div>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Modern Dental Equipment</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="premium-card p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Diagnostic</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Digital X-Ray Systems</li>
                  <li>• Intraoral Cameras</li>
                  <li>• 3D Imaging</li>
                  <li>• Laser Diagnostics</li>
                </ul>
              </div>
              <div className="premium-card p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Treatment</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Laser Therapy</li>
                  <li>• Ultrasonic Cleaners</li>
                  <li>• Air Abrasion</li>
                  <li>• Digital Impressions</li>
                </ul>
              </div>
              <div className="premium-card p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Comfort</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Sedation Options</li>
                  <li>• Pain-Free Injections</li>
                  <li>• Ergonomic Chairs</li>
                  <li>• Relaxing Atmosphere</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Smile?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Schedule your consultation with Dr. Yasser Khenniche and discover how we can help you achieve the perfect smile. 
              Our team is ready to provide you with exceptional dental care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
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

export default Services 