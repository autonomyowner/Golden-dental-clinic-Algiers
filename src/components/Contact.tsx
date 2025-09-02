const Contact = () => {
  const contactInfo = [
    {
      name: "Phone",
      value: "0797339451",
      icon: "📞",
      link: "tel:+213797339451",
      description: "Call for appointment booking"
    },
    {
      name: "Location",
      value: "Cité les annassers 2, Kouba",
      icon: "📍",
      link: "#",
      description: "Visit our dental clinic"
    },
    {
      name: "Instagram",
      value: "@dr_yasser_khenniche",
      icon: "📱",
      link: "https://www.instagram.com/dr_yasser_khenniche/",
      description: "Follow us for dental tips"
    }
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="premium-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your smile? Contact Dr. Yasser Khenniche at Golden Dental Clinic for professional dental care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="premium-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 premium-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <span className="text-slate-900 text-lg">📍</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-gray-300 text-sm">
                      Cité les annassers 2, Kouba, Algeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 premium-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <span className="text-slate-900 text-lg">⏰</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Business Hours</h4>
                    <p className="text-gray-300 text-sm">
                      Monday - Saturday: 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 premium-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <span className="text-slate-900 text-lg">💼</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Services</h4>
                    <p className="text-gray-300 text-sm">
                      General, Cosmetic, Restorative, Emergency Dentistry
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 premium-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <span className="text-slate-900 text-lg">🎯</span>
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
                  Comprehensive dental services
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Personalized care and follow-up
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Links */}
          <div className="space-y-6">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target={contact.link.startsWith('http') ? "_blank" : undefined}
                rel={contact.link.startsWith('http') ? "noopener noreferrer" : undefined}
                className="block premium-card p-6 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">{contact.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{contact.name}</h3>
                      <p className="text-gray-300 text-sm">{contact.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="premium-text font-bold text-lg">{contact.value}</div>
                    <div className="text-gray-400 text-sm">contact</div>
                  </div>
                </div>
              </a>
            ))}

            <div className="premium-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Book Your Appointment</h3>
              <p className="text-gray-300 mb-4">
                Ready for professional dental care? Contact us to schedule your consultation.
              </p>
              <a 
                href="tel:0797339451" 
                className="btn-primary w-full text-center"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 premium-card p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Smile?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let Dr. Yasser Khenniche at Golden Dental Clinic create a beautiful, healthy smile that will boost your confidence. 
            Contact us today to schedule your consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0797339451" 
              className="btn-primary text-lg px-8 py-4"
            >
              Book Appointment
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
    </section>
  )
}

export default Contact 