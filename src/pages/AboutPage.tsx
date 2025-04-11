
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Github, Linkedin, Mail, Phone, Calendar, MapPin, GraduationCap, Briefcase, Award } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef } from "react";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  const experienceVisible = useIntersectionObserver(experienceRef, { threshold: 0.1 });
  const educationVisible = useIntersectionObserver(educationRef, { threshold: 0.1 });
  const skillsVisible = useIntersectionObserver(skillsRef, { threshold: 0.1 });

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
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                  About <span className="text-luxury-gold">Me</span>
                </h1>
                <p className="text-lg text-luxury-lightGray max-w-xl mb-8">
                  I'm a Senior Software Engineer with expertise in AI-powered applications, chatbot development, and creating 
                  innovative solutions that enhance business efficiency and customer satisfaction.
                </p>
                
                <div className="flex flex-wrap gap-5 mb-8">
                  <a
                    href="https://github.com/sohailkhan0613"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-luxury-navy border border-luxury-gold/30 rounded-md hover:bg-luxury-gold/10 transition-colors"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohd-sohail-khan-8b59a41ab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-luxury-navy border border-luxury-gold/30 rounded-md hover:bg-luxury-gold/10 transition-colors"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="mailto:sk581470@gmail.com"
                    className="flex items-center gap-2 px-4 py-2 bg-luxury-navy border border-luxury-gold/30 rounded-md hover:bg-luxury-gold/10 transition-colors"
                  >
                    <Mail size={18} />
                    <span>Email</span>
                  </a>
                  <a
                    href="tel:+919381635201"
                    className="flex items-center gap-2 px-4 py-2 bg-luxury-navy border border-luxury-gold/30 rounded-md hover:bg-luxury-gold/10 transition-colors"
                  >
                    <Phone size={18} />
                    <span>Phone</span>
                  </a>
                </div>
                
                <div className="flex flex-col gap-4 text-luxury-lightGray">
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-luxury-gold" />
                    <span>Hyderabad, Telangana, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar size={16} className="text-luxury-gold" />
                    <span>Available for projects and consultancy</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-luxury-gold to-luxury-purple blur-md opacity-70"></div>
                  <div className="relative rounded-full border-4 border-luxury-gold/50 overflow-hidden w-64 h-64 md:w-80 md:h-80">
                    <img
                      src="/lovable-uploads/67919068-40aa-4d8a-ab11-04b6954ef83a.png"
                      alt="Mohd Sohail Khan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section 
          ref={experienceRef}
          className="py-20 relative overflow-hidden"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="section-title text-luxury-gold">Professional Experience</h2>
              <div className="w-20 h-1 bg-luxury-gold mx-auto mt-4 mb-6"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative pl-8 border-l-2 border-luxury-gold/30">
                {/* Experience 1 */}
                <div 
                  className={`mb-12 transition-all duration-1000 ${experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <div className="absolute left-[-8px] w-4 h-4 rounded-full bg-luxury-gold"></div>
                  
                  <div className="luxury-card">
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">Senior Software Engineer</h3>
                        <div className="flex items-center mt-1">
                          <Briefcase size={16} className="text-luxury-gold mr-2" />
                          <span className="text-luxury-lightGray">SkillRecruit · Full-time</span>
                        </div>
                      </div>
                      <div className="text-luxury-gold mt-2 md:mt-0 text-sm">
                        Jun 2024 - Present · 11 mos
                      </div>
                    </div>
                    
                    <p className="text-luxury-lightGray mb-4">
                      As a Senior Software Engineer at Genpact (on the payroll of Skill Recruit), I have been entrusted with the
                      responsibilities of a Technical Architect, managing and maintaining the architecture of various web-based
                      applications and solutions. I am passionate about driving innovation and ensuring that our systems are scalable,
                      efficient, and aligned with business objectives.
                    </p>
                    <p className="text-luxury-lightGray mb-4">
                      One of my key achievements has been the successful development and deployment of over 10 conversational
                      chatbots using Kore.ai and backend platforms. These bots leverage advanced AI capabilities and are hosted on
                      Azure to ensure robust performance, reliability, and security. Each bot is designed with at least 10 intents and
                      rich AI functionality, transforming customer interactions and improving user engagement across platforms.
                    </p>
                    <p className="text-luxury-lightGray">
                      With expertise in Node.js, backend development, and cloud architecture, I strive to deliver cutting-edge solutions
                      that have a tangible impact on both business efficiency and customer satisfaction.
                    </p>
                  </div>
                </div>
                
                {/* Experience 2 */}
                <div 
                  className={`mb-12 transition-all duration-1000 delay-100 ${experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <div className="absolute left-[-8px] w-4 h-4 rounded-full bg-luxury-gold"></div>
                  
                  <div className="luxury-card">
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">Software Engineer</h3>
                        <div className="flex items-center mt-1">
                          <Briefcase size={16} className="text-luxury-gold mr-2" />
                          <span className="text-luxury-lightGray">Kore.ai · Full-time</span>
                        </div>
                      </div>
                      <div className="text-luxury-gold mt-2 md:mt-0 text-sm">
                        Mar 2022 - Jun 2024 · 2 yrs 4 mos
                      </div>
                    </div>
                    
                    <p className="text-luxury-lightGray">
                      While working as a software engineer for Kore.ai, I helped build multi-lingual NLP-driven highly intelligent
                      chatbots for clients such as eBay, Cigna legal, Otsuka, Yahoo etc. I worked intensively with clients in
                      requirement gathering and smooth and efficient delivery of the products. Worked on multiple platforms for
                      the chatbots such as Websdk, Slack, WhatsApp and others.
                    </p>
                  </div>
                </div>
                
                {/* Experience 3 */}
                <div 
                  className={`transition-all duration-1000 delay-200 ${experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <div className="absolute left-[-8px] w-4 h-4 rounded-full bg-luxury-gold"></div>
                  
                  <div className="luxury-card">
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">Associate Engineer</h3>
                        <div className="flex items-center mt-1">
                          <Briefcase size={16} className="text-luxury-gold mr-2" />
                          <span className="text-luxury-lightGray">Kore.ai · Full-time</span>
                        </div>
                      </div>
                      <div className="text-luxury-gold mt-2 md:mt-0 text-sm">
                        Jun 2020 - Mar 2022 · 1 yr 10 mos
                      </div>
                    </div>
                    
                    <p className="text-luxury-lightGray">
                      Started my career as an Associate Engineer at Kore.ai, where I focused on learning and implementing
                      chatbot development techniques and working with NLP technologies. Contributed to various client projects
                      while gaining experience in software development best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Education Section */}
        <section 
          ref={educationRef}
          className="py-20 relative overflow-hidden bg-gradient-to-b from-luxury-navy to-luxury-darkPurple/80"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="section-title text-luxury-gold">Education</h2>
              <div className="w-20 h-1 bg-luxury-gold mx-auto mt-4 mb-6"></div>
            </div>
            
            <div 
              className={`max-w-2xl mx-auto luxury-card transition-all duration-1000 ${educationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-luxury-gold/10 rounded-md">
                  <GraduationCap size={36} className="text-luxury-gold" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white">Bachelor's degree, Computer Science</h3>
                  <p className="text-luxury-gold mt-1">AAR Mahaveer Engineering College - India</p>
                  <p className="text-luxury-lightGray mt-1">2016 - 2020</p>
                  
                  <p className="mt-4 text-luxury-lightGray">
                    Completed my Bachelor's degree in Computer Science with a focus on programming
                    languages, algorithms, data structures, and software development methodologies.
                    Participated in various technical projects and competitions throughout my studies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section 
          ref={skillsRef}
          className="py-20 relative overflow-hidden"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="section-title text-luxury-gold">Skills & Expertise</h2>
              <div className="w-20 h-1 bg-luxury-gold mx-auto mt-4 mb-6"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div 
                  className={`luxury-card transition-all duration-1000 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                >
                  <h3 className="text-xl font-bold text-white mb-6">Technical Skills</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-white">Python</span>
                        <span className="text-luxury-gold">Expert</span>
                      </div>
                      <div className="h-2 w-full bg-luxury-navy rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-luxury-gold to-luxury-purple transition-all duration-1000 rounded-full"
                          style={{ width: skillsVisible ? '90%' : '0%' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-white">JavaScript</span>
                        <span className="text-luxury-gold">Expert</span>
                      </div>
                      <div className="h-2 w-full bg-luxury-navy rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-luxury-gold to-luxury-purple transition-all duration-1000 rounded-full"
                          style={{ width: skillsVisible ? '95%' : '0%' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-white">Data Structures</span>
                        <span className="text-luxury-gold">Advanced</span>
                      </div>
                      <div className="h-2 w-full bg-luxury-navy rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-luxury-gold to-luxury-purple transition-all duration-1000 rounded-full"
                          style={{ width: skillsVisible ? '85%' : '0%' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-white">C++</span>
                        <span className="text-luxury-gold">Advanced</span>
                      </div>
                      <div className="h-2 w-full bg-luxury-navy rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-luxury-gold to-luxury-purple transition-all duration-1000 rounded-full"
                          style={{ width: skillsVisible ? '80%' : '0%' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-white">Java</span>
                        <span className="text-luxury-gold">Intermediate</span>
                      </div>
                      <div className="h-2 w-full bg-luxury-navy rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-luxury-gold to-luxury-purple transition-all duration-1000 rounded-full"
                          style={{ width: skillsVisible ? '75%' : '0%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div 
                  className={`luxury-card transition-all duration-1000 delay-100 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                >
                  <h3 className="text-xl font-bold text-white mb-6">Specialized Skills</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-white">Artificial Intelligence (AI)</span>
                        <span className="text-luxury-gold">Advanced</span>
                      </div>
                      <div className="h-2 w-full bg-luxury-navy rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-luxury-gold to-luxury-purple transition-all duration-1000 rounded-full"
                          style={{ width: skillsVisible ? '85%' : '0%' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-white">Machine Learning</span>
                        <span className="text-luxury-gold">Advanced</span>
                      </div>
                      <div className="h-2 w-full bg-luxury-navy rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-luxury-gold to-luxury-purple transition-all duration-1000 rounded-full"
                          style={{ width: skillsVisible ? '80%' : '0%' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-white">Kore.ai Virtual Assistant Platform</span>
                        <span className="text-luxury-gold">Expert</span>
                      </div>
                      <div className="h-2 w-full bg-luxury-navy rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-luxury-gold to-luxury-purple transition-all duration-1000 rounded-full"
                          style={{ width: skillsVisible ? '95%' : '0%' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-white">Node.js</span>
                        <span className="text-luxury-gold">Expert</span>
                      </div>
                      <div className="h-2 w-full bg-luxury-navy rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-luxury-gold to-luxury-purple transition-all duration-1000 rounded-full"
                          style={{ width: skillsVisible ? '90%' : '0%' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-white">Cloud Architecture (Azure)</span>
                        <span className="text-luxury-gold">Advanced</span>
                      </div>
                      <div className="h-2 w-full bg-luxury-navy rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-luxury-gold to-luxury-purple transition-all duration-1000 rounded-full"
                          style={{ width: skillsVisible ? '85%' : '0%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div 
                className={`mt-12 luxury-card transition-all duration-1000 delay-200 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <h3 className="text-xl font-bold text-white mb-6">Achievements & Certifications</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="p-2 bg-luxury-gold/10 rounded-md h-fit">
                      <Award size={24} className="text-luxury-gold" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Chatbot Development Excellence Award</h4>
                      <p className="text-luxury-lightGray">
                        Recognized for developing high-performing conversational chatbots that significantly improved customer
                        interaction metrics.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="p-2 bg-luxury-gold/10 rounded-md h-fit">
                      <Award size={24} className="text-luxury-gold" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Kore.ai Master Developer Certification</h4>
                      <p className="text-luxury-lightGray">
                        Achieved advanced certification for expertise in building and deploying enterprise-grade virtual assistants.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="p-2 bg-luxury-gold/10 rounded-md h-fit">
                      <Award size={24} className="text-luxury-gold" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Azure Cloud Solutions Specialist</h4>
                      <p className="text-luxury-lightGray">
                        Certified in designing and implementing solutions on Microsoft Azure cloud platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
