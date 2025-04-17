
import { useState } from "react";
import { Calendar, User, Mail, Briefcase, Clock, MessageSquare } from "lucide-react";
import { scheduleMeeting } from "@/utils/scheduleMeeting";

const ScheduleCall = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [objective, setObjective] = useState<string>("");
  const [preferredTime, setPreferredTime] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await scheduleMeeting(email, name, company, objective, preferredTime);
      // Reset form
      setEmail("");
      setName("");
      setCompany("");
      setObjective("");
      setPreferredTime("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="luxury-card transition-all duration-300 hover:border-luxury-gold">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <Calendar className="mr-2 text-luxury-gold" size={20} />
        Schedule a Call
      </h3>
      
      <p className="text-luxury-lightGray mb-6">
        Let's discuss how I can add value to your team. Fill in your details below and I'll send you a Google Meet invitation.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-luxury-lightGray text-sm mb-2">Your Name *</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-luxury-gold/70">
              <User size={16} />
            </div>
            <input 
              type="text" 
              id="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
              className="w-full pl-10 px-4 py-2 bg-luxury-navy/80 border border-luxury-gold/20 rounded focus:outline-none focus:border-luxury-gold/60 text-white transition-all"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-luxury-lightGray text-sm mb-2">Your Email *</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-luxury-gold/70">
              <Mail size={16} />
            </div>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="john@company.com"
              className="w-full pl-10 px-4 py-2 bg-luxury-navy/80 border border-luxury-gold/20 rounded focus:outline-none focus:border-luxury-gold/60 text-white transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-luxury-lightGray text-sm mb-2">Company Name</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-luxury-gold/70">
              <Briefcase size={16} />
            </div>
            <input 
              type="text" 
              id="company" 
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company Inc."
              className="w-full pl-10 px-4 py-2 bg-luxury-navy/80 border border-luxury-gold/20 rounded focus:outline-none focus:border-luxury-gold/60 text-white transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="objective" className="block text-luxury-lightGray text-sm mb-2">Meeting Objective</label>
          <div className="relative">
            <div className="absolute top-3 left-0 flex items-start pl-3 pointer-events-none text-luxury-gold/70">
              <MessageSquare size={16} />
            </div>
            <textarea 
              id="objective" 
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              placeholder="Brief description of what you'd like to discuss..."
              rows={3}
              className="w-full pl-10 px-4 py-2 bg-luxury-navy/80 border border-luxury-gold/20 rounded focus:outline-none focus:border-luxury-gold/60 text-white transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-luxury-lightGray text-sm mb-2">Preferred Time</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-luxury-gold/70">
              <Clock size={16} />
            </div>
            <input 
              type="text" 
              id="preferredTime" 
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              placeholder="e.g., Weekdays after 2 PM IST"
              className="w-full pl-10 px-4 py-2 bg-luxury-navy/80 border border-luxury-gold/20 rounded focus:outline-none focus:border-luxury-gold/60 text-white transition-all"
            />
          </div>
        </div>
        
        <button 
          type="submit"
          disabled={isSubmitting || !email || !name}
          className="w-full bg-luxury-gold text-luxury-navy font-medium py-2 rounded hover:bg-luxury-gold/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-luxury-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <Calendar className="mr-2" size={16} />
              Request Call
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default ScheduleCall;
