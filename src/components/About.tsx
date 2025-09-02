const About = () => {
  return (
    <section id="about" className="section-padding glass-effect">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="premium-text">Our Clinic</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Golden Dental Clinic, led by Dr. Yasser Khenniche, is dedicated to providing exceptional dental care with modern technology 
            and personalized treatment plans for patients in Kouba and throughout Algeria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="premium-card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 premium-gradient rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-slate-900 text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To provide comprehensive, compassionate dental care using state-of-the-art technology and techniques, 
                ensuring every patient achieves optimal oral health and their most confident smile.
              </p>
            </div>

            <div className="premium-card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 premium-gradient rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-slate-900 text-2xl">🌟</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To be the premier dental clinic in Algeria, setting the standard for excellence in dental care 
                through advanced treatments, patient comfort, and lasting oral health results.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="premium-gradient p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Golden Dental Clinic?</h3>
              <ul className="space-y-3 text-slate-900">
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Experienced Dr. Yasser Khenniche
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  State-of-the-art dental technology
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Comprehensive dental services
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Personalized treatment plans
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Comfortable and welcoming environment
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="premium-card p-6 text-center">
                <div className="text-3xl font-bold premium-text mb-2">2000+</div>
                <div className="text-gray-400 text-sm">Satisfied Patients</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About 