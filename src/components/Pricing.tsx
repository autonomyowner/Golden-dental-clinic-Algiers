const Pricing = () => {
  const plans = [
    {
      name: "Basic Care",
      price: "8,000",
      currency: "DA",
      period: "per visit",
      description: "Essential dental care for maintaining oral health",
      features: [
        "Comprehensive dental examination",
        "Professional teeth cleaning",
        "Oral health consultation",
        "Basic X-rays if needed",
        "Preventive care advice",
        "Treatment plan discussion",
        "Follow-up appointment included"
      ],
      popular: false,
      cta: "Book Now",
      color: "border-blue-500"
    },
    {
      name: "Complete Care",
      price: "15,000",
      currency: "DA",
      period: "per treatment",
      description: "Comprehensive dental treatments for optimal oral health",
      features: [
        "Everything in Basic Care",
        "Dental fillings and restorations",
        "Advanced diagnostic imaging",
        "Cosmetic consultation",
        "Teeth whitening options",
        "Priority appointment scheduling",
        "Emergency care access",
        "6-month follow-up included",
        "Payment plan options"
      ],
      popular: true,
      cta: "Most Popular",
      color: "border-amber-500"
    },
    {
      name: "Premium Care",
      price: "35,000",
      currency: "DA",
      period: "per treatment",
      description: "Advanced dental treatments and cosmetic procedures",
      features: [
        "Everything in Complete Care",
        "Cosmetic dentistry procedures",
        "Dental implant consultation",
        "Advanced restorative work",
        "Orthodontic evaluation",
        "Sedation options available",
        "Specialist referrals included",
        "VIP treatment experience",
        "Flexible payment plans",
        "Lifetime consultation access",
        "Emergency 24/7 support"
      ],
      popular: false,
      cta: "Premium Care",
      color: "border-purple-500"
    }
  ]

  const addons = [
    {
      name: "Teeth Whitening",
      price: "12,000",
      description: "Professional teeth whitening treatment",
      features: ["In-office whitening session", "Take-home maintenance kit", "Results guaranteed", "6-month touch-up included"]
    },
    {
      name: "Dental Implant",
      price: "80,000",
      description: "Single tooth implant with crown",
      features: ["Titanium implant placement", "Custom crown fitting", "Healing period monitoring", "Lifetime warranty"]
    },
    {
      name: "Orthodontic Treatment",
      price: "150,000",
      description: "Complete orthodontic treatment plan",
      features: ["Initial consultation", "Custom treatment plan", "Regular adjustments", "Retainer included"]
    },
    {
      name: "Emergency Care",
      price: "5,000",
      description: "After-hours emergency dental care",
      features: ["24/7 availability", "Pain relief treatment", "Emergency procedures", "Follow-up care"]
    }
  ]

  return (
    <section id="pricing" className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 glass-effect border border-amber-500/30 rounded-full premium-text text-sm font-medium mb-8">
            <span className="mr-2">🦷</span>
            Quality Dental Care - Transparent Pricing
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Choose Your
            <span className="block premium-text">Dental Care</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Professional dental care with transparent pricing and no hidden fees. 
            All treatments include consultation, follow-up care, and our guarantee of satisfaction.
          </p>

          {/* Pricing Plans */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`premium-card p-8 relative ${plan.popular ? 'ring-2 ring-amber-500 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-amber-500 text-slate-900 px-4 py-2 rounded-full text-sm font-bold">
                      ⭐ Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold premium-text">{plan.price}</span>
                    <span className="text-gray-300 text-lg ml-2">{plan.currency}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{plan.period}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href="tel:0797339451" 
                  className={`btn-primary w-full text-center ${plan.popular ? 'bg-amber-500 hover:bg-amber-600' : ''}`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="bg-slate-800/30 backdrop-blur-md border border-amber-500/30 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Specialized Services</h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              Additional dental services to enhance your oral health. Perfect for comprehensive dental care.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {addons.map((addon, index) => (
                <div key={index} className="premium-card p-6 text-left">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                      <p className="text-gray-300 text-sm">{addon.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold premium-text">{addon.price}</div>
                      <div className="text-gray-400 text-sm">DA</div>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {addon.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="tel:0797339451" 
                    className="btn-secondary w-full text-center text-sm"
                  >
                    Book This Service
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Golden Dental Clinic?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-slate-900 text-2xl">💎</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Premium Quality</h4>
                <p className="text-gray-300 text-sm">All treatments using modern dental technology and best practices</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-slate-900 text-2xl">🛡️</span>
                </div>
                <h4 className="text-white font-semibold mb-2">No Hidden Costs</h4>
                <p className="text-gray-300 text-sm">Transparent pricing with all costs explained upfront</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 premium-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-slate-900 text-2xl">🎯</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Results Focused</h4>
                <p className="text-gray-300 text-sm">Treatments designed to achieve optimal oral health and beautiful smiles</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-slate-800/30 backdrop-blur-md border border-amber-500/30 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">How long does a typical treatment take?</h4>
                  <p className="text-gray-300 text-sm">Most treatments take 30-60 minutes, with complex procedures scheduled for longer appointments.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Do you accept insurance?</h4>
                  <p className="text-gray-300 text-sm">We work with most major insurance providers and offer payment plans for uninsured patients.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">What if I need emergency dental care?</h4>
                  <p className="text-gray-300 text-sm">We provide 24/7 emergency contact and after-hours care for urgent dental needs.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">What payment methods do you accept?</h4>
                  <p className="text-gray-300 text-sm">We accept cash, credit cards, bank transfers, and offer flexible payment plans.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Do you provide oral health education?</h4>
                  <p className="text-gray-300 text-sm">Yes! We provide comprehensive education on proper oral hygiene and preventive care.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Are follow-up visits included?</h4>
                  <p className="text-gray-300 text-sm">Follow-up visits are included in most treatment plans to ensure optimal healing and results.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Smile?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Schedule your consultation with Dr. Yasser Khenniche for personalized dental care. 
              No obligation, just professional advice and a path to better oral health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0797339451" 
                className="btn-primary text-lg px-8 py-4"
              >
                🚀 Book Consultation
              </a>
              <a 
                href="https://www.instagram.com/dr_yasser_khenniche/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4"
              >
                <span className="mr-2">📱</span>
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
