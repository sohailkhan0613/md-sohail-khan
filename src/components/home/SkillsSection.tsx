
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const skills = [
  { name: "Python", level: 90 },
  { name: "JavaScript", level: 95 },
  { name: "Node.js", level: 90 },
  { name: "Data Structures", level: 85 },
  { name: "C++", level: 80 },
  { name: "Java", level: 75 },
  { name: "Artificial Intelligence (AI)", level: 85 },
  { name: "Machine Learning", level: 80 },
  { name: "Kore.ai Virtual Assistant Platform", level: 95 },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="py-20 relative bg-gradient-to-b from-luxury-navy to-luxury-darkPurple/80"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title text-luxury-gold">My Skills</h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto mt-4 mb-6"></div>
            <p className="text-luxury-lightGray">
              Here are some of the technologies and skills I've mastered throughout my career.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`transition-all duration-700 delay-${
                  index * 100
                } transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-luxury-gold">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-luxury-navy/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-luxury-gold to-luxury-purple rounded-full transition-all duration-1000"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
