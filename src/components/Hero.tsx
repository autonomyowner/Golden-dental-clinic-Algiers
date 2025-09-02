const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-amber-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 glass-effect border border-amber-400/30 rounded-full premium-text text-sm font-medium mb-8">
            <span className="mr-2">✨</span>
            Premium Dental Care - Dr. Yasser Khenniche
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Perfect
            <span className="block premium-text">Golden Smile</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Dr. Yasser Khenniche provides comprehensive dental care, cosmetic dentistry, and advanced treatments in Kouba, Algeria. 
            Transform your smile into your most confident asset with modern dental technology and personalized care.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center premium-card p-6">
              <div className="text-3xl font-bold premium-text">2000+</div>
              <div className="text-gray-400">Happy Patients</div>
            </div>
            <div className="text-center premium-card p-6">
              <div className="text-3xl font-bold premium-text">10+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center premium-card p-6">
              <div className="text-3xl font-bold premium-text">100%</div>
              <div className="text-gray-400">Patient Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="btn-primary text-lg px-8 py-4"
            >
              Book Appointment
            </a>
            <a 
              href="/pricing" 
              className="btn-secondary text-lg px-8 py-4"
            >
              <span className="mr-2">🦷</span>
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 