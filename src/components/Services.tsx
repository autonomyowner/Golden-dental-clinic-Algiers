const Services = () => {
  const services = [
    {
      icon: "🦷",
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, and preventive treatments.",
      features: ["Routine cleanings", "Dental fillings", "Preventive care"]
    },
    {
      icon: "✨",
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with professional teeth whitening and cosmetic treatments.",
      features: ["Teeth whitening", "Veneers", "Smile makeovers"]
    },
    {
      icon: "🔧",
      title: "Restorative Dentistry",
      description: "Restore damaged teeth with crowns, bridges, and advanced dental procedures.",
      features: ["Dental crowns", "Bridges", "Root canal therapy"]
    }
  ]

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="premium-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive dental care services provided by Dr. Yasser Khenniche at Golden Dental Clinic.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="premium-card p-8 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className="premium-text mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="premium-card p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Professional Dental Care</h3>
            <p className="text-gray-300">Quality treatments with transparent pricing</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Pricing Card */}
            <div className="premium-gradient p-8 rounded-2xl text-center shadow-2xl">
              <div className="text-6xl font-bold text-slate-900 mb-2">From 5,000 DA</div>
              <div className="text-slate-900 text-lg mb-6">Starting Price</div>
              <ul className="space-y-3 text-slate-900 text-left">
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Professional dental examination
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Personalized treatment plan
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Modern dental technology
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Comfortable treatment environment
                </li>
              </ul>
            </div>

            {/* Requirements */}
            <div className="space-y-6">
              <div className="premium-card p-6">
                <h4 className="text-xl font-bold text-white mb-4">What to Expect</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <span className="premium-text mr-3">🎯</span>
                    Thorough dental examination
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="premium-text mr-3">📚</span>
                    Detailed treatment explanation
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="premium-text mr-3">💬</span>
                    Comfortable treatment experience
                  </div>
                </div>
              </div>

              <div className="premium-card p-6">
                <h4 className="text-xl font-bold text-white mb-4">Treatment Benefits</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <span className="premium-text mr-3">🌟</span>
                    Improved oral health
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="premium-text mr-3">🤝</span>
                    Enhanced smile confidence
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="premium-text mr-3">📈</span>
                    Long-lasting dental health
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services 