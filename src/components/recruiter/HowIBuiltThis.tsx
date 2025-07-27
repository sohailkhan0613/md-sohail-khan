import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HowIBuiltThis = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <div className="luxury-card overflow-hidden transform hover:scale-[1.01] transition-all duration-500">
          <div className="p-8">
            <h2 className="text-3xl font-serif font-bold text-luxury-gold mb-6">
              How I Built This Portfolio
            </h2>
            
            <Tabs defaultValue="tech-stack" className="w-full">
              <TabsList className="mb-6 bg-luxury-navy/50 p-1">
                <TabsTrigger value="tech-stack" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-luxury-navy">
                  Tech Stack
                </TabsTrigger>
                <TabsTrigger value="development" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-luxury-navy">
                  Development Process
                </TabsTrigger>
                <TabsTrigger value="challenges" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-luxury-navy">
                  Challenges & Solutions
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="tech-stack" className="space-y-4">
                <p className="text-luxury-lightGray mb-4">
                  This portfolio website is built with a modern tech stack featuring React, TypeScript, and Tailwind CSS. Here's a breakdown of the technologies used:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-luxury-navy/50 p-4 rounded-lg hover:bg-luxury-navy/70 transition-all">
                    <h4 className="text-luxury-gold font-bold mb-2">Frontend</h4>
                    <ul className="text-luxury-lightGray space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                        React with TypeScript
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                        Tailwind CSS for styling
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                        Shadcn UI components
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                        Lucide React for icons
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-luxury-navy/50 p-4 rounded-lg hover:bg-luxury-navy/70 transition-all">
                    <h4 className="text-luxury-gold font-bold mb-2">Animation & Interactivity</h4>
                    <ul className="text-luxury-lightGray space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                        Custom canvas animations
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                        Interactive game components
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                        Intersection Observer API
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                        Scroll animations
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-luxury-navy/50 p-4 rounded-lg hover:bg-luxury-navy/70 transition-all">
                    <h4 className="text-luxury-gold font-bold mb-2">Contact & Forms</h4>
                    <ul className="text-luxury-lightGray space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                        React Hook Form
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                        Form validation
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                        Toast notifications
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                        Contact routing logic
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="development" className="space-y-4">
                <p className="text-luxury-lightGray mb-4">
                  The development process followed a user-centered approach with several phases:
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center shrink-0">
                      <span className="text-luxury-gold font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Planning & Design</h4>
                      <p className="text-luxury-lightGray">
                        Started with wireframes and mockups to establish the luxury aesthetic and site structure. Focused on creating a responsive, engaging experience for visitors.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center shrink-0">
                      <span className="text-luxury-gold font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Component Architecture</h4>
                      <p className="text-luxury-lightGray">
                        Built reusable UI components for consistency across the site. Implemented a modular structure with separate pages and components to maintain clean code.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center shrink-0">
                      <span className="text-luxury-gold font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Interactive Elements</h4>
                      <p className="text-luxury-lightGray">
                        Added engaging features like the canvas background animation, interactive games, and portfolio filters to create a memorable user experience.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center shrink-0">
                      <span className="text-luxury-gold font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Testing & Optimization</h4>
                      <p className="text-luxury-lightGray">
                        Rigorously tested on different devices to ensure responsive design. Optimized code and assets for performance and accessibility.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="challenges" className="space-y-4">
                <p className="text-luxury-lightGray mb-4">
                  Building this portfolio presented several interesting challenges that required creative solutions:
                </p>
                
                <div className="space-y-6">
                  <div className="bg-luxury-navy/50 p-4 rounded-lg hover:bg-luxury-navy/70 transition-all">
                    <h4 className="text-luxury-gold font-bold mb-2">Canvas Animation Performance</h4>
                    <p className="text-luxury-lightGray">
                      <span className="text-white font-medium">Challenge:</span> The particle animation background initially caused performance issues on mobile devices.
                    </p>
                    <p className="text-luxury-lightGray mt-2">
                      <span className="text-white font-medium">Solution:</span> Implemented dynamic particle count based on device capability, optimized render loops, and added debouncing for resize events.
                    </p>
                  </div>
                  
                  <div className="bg-luxury-navy/50 p-4 rounded-lg hover:bg-luxury-navy/70 transition-all">
                    <h4 className="text-luxury-gold font-bold mb-2">Responsive Game Components</h4>
                    <p className="text-luxury-lightGray">
                      <span className="text-white font-medium">Challenge:</span> Making interactive games work well across all device sizes while maintaining playability.
                    </p>
                    <p className="text-luxury-lightGray mt-2">
                      <span className="text-white font-medium">Solution:</span> Used relative sizing based on viewport, implemented touch controls for mobile, and created adaptive layouts that restructure based on screen size.
                    </p>
                  </div>
                  
                  <div className="bg-luxury-navy/50 p-4 rounded-lg hover:bg-luxury-navy/70 transition-all">
                    <h4 className="text-luxury-gold font-bold mb-2">Project Filter System</h4>
                    <p className="text-luxury-lightGray">
                      <span className="text-white font-medium">Challenge:</span> Creating a smooth, animated filtering system for portfolio projects without jumpy layout shifts.
                    </p>
                    <p className="text-luxury-lightGray mt-2">
                      <span className="text-white font-medium">Solution:</span> Implemented CSS grid with fixed heights and transition delays, used opacity for smooth item removal, and maintained consistent grid spacing regardless of filter selection.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIBuiltThis; 