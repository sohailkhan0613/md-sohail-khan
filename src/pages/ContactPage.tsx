
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ContactForm from "@/components/ContactForm";
import { MapPin, Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-luxury-navy text-white">
      <AnimatedBackground />
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-luxury opacity-30"></div>
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-luxury-navy to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Get In <span className="text-luxury-gold">Touch</span>
            </h1>
            <p className="text-lg text-luxury-lightGray max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out to me using the form below or through any of my contact channels.
            </p>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="luxury-card flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-luxury-gold mb-6">Contact Information</h2>
                  <p className="text-luxury-lightGray mb-8">
                    Feel free to reach out to me through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                  
                  <div className="space-y-6 mb-12">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-luxury-gold/10 rounded-full">
                        <MapPin className="text-luxury-gold" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-1">Location</h3>
                        <p className="text-luxury-lightGray">Hyderabad, Telangana, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-luxury-gold/10 rounded-full">
                        <Mail className="text-luxury-gold" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                        <a
                          href="mailto:sk581470@gmail.com"
                          className="text-luxury-lightGray hover:text-luxury-gold transition-colors"
                        >
                          sk581470@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-luxury-gold/10 rounded-full">
                        <Phone className="text-luxury-gold" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-1">Phone</h3>
                        <a
                          href="tel:+919381635201"
                          className="text-luxury-lightGray hover:text-luxury-gold transition-colors"
                        >
                          +91 9381 635 201
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-4">Connect on Social Media</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/mohd-sohail-khan-8b59a41ab/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#0077b5] rounded-full hover:bg-[#0077b5]/80 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="text-white" size={24} />
                    </a>
                    <a
                      href="https://github.com/sohailkhan0613"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#24292e] rounded-full hover:bg-[#24292e]/80 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="text-white" size={24} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="luxury-card">
                <h2 className="text-2xl font-serif font-bold text-luxury-gold mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <div className="luxury-card overflow-hidden h-[400px]">
              <iframe
                title="Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31698907518!2d78.26795728939116!3d17.412624556857813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1649958884024!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
