
import { useState, FormEvent } from 'react';
import { toast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // In a real implementation, you would submit to a backend API
    // For now we'll just simulate a submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-luxury-navy border border-luxury-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-luxury-gold/50 text-white"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-luxury-navy border border-luxury-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-luxury-gold/50 text-white"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-luxury-navy border border-luxury-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-luxury-gold/50 text-white"
          placeholder="Project Inquiry"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-luxury-navy border border-luxury-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-luxury-gold/50 text-white resize-none"
          placeholder="I'd like to discuss a potential project..."
        ></textarea>
      </div>
      
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center py-3"
        >
          {isSubmitting ? (
            <span className="inline-flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-luxury-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="inline-flex items-center">
              <Send size={16} className="mr-2" />
              Send Message
            </span>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
