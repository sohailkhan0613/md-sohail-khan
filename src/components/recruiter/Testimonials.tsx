import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award } from "lucide-react";

const testimonials = [
  {
    name: "Nanda kumar",
    role: "Director at Kore.AI",
    content: "Sohail developed an AI chatbot for our customer service that reduced support tickets by 45%. His technical skills and problem-solving abilities are exceptional."
  },
  {
    name: "Akram khan",
    role: "Manager at Mphasis",
    content: "Working with Sohail was a game-changer for our automation needs. He delivered high-quality solutions on time and was always willing to go the extra mile."
  },
  {
    name: "Ganer, Siddhaling",
    role: "Senior Manager at Genpact",
    content: "Sohail has consistently proven to be an key resource to the team. His strong technical background and expertise have been key in troubleshooting major issues and ensuring seamless execution of tasks. His significant contribution to the GRecruit UC-2 project has had a direct impact on its success, showcasing his ability to tackle complex challenges with ease and efficiency"
  }
];

const Testimonials = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif font-bold text-luxury-gold mb-8 text-center">
          Professional Endorsements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="luxury-card hover:border-luxury-gold/50 transition-all duration-500 group transform hover:scale-[1.02]"
            >
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Award className="text-luxury-gold mr-2" size={20} />
                  <CardTitle className="text-white group-hover:text-luxury-gold transition-colors">
                    {testimonial.name}
                  </CardTitle>
                </div>
                <CardDescription className="text-luxury-purple">
                  {testimonial.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-luxury-lightGray">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 