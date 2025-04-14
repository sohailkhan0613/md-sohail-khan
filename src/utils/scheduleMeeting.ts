
import { toast } from "@/hooks/use-toast";

export const scheduleMeeting = async (
  recruiterEmail: string,
  recruiterName: string = "Recruiter",
  subject: string = "Interview with Mohd Sohail Khan",
  description: string = "Discussion about potential opportunities."
) => {
  try {
    // In a real implementation, you would submit to a backend API
    // For demonstration, we'll just show a success message
    
    console.log("Scheduling meeting with:", {
      recruiterEmail,
      recruiterName,
      myEmail: "sk581470@gmail.com",
      subject,
      description
    });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success toast
    toast({
      title: "Meeting Request Sent!",
      description: `I'll send you a Google Meet invite to ${recruiterEmail} shortly.`,
    });
    
    return true;
  } catch (error) {
    console.error("Error scheduling meeting:", error);
    
    toast({
      title: "Error",
      description: "There was an error scheduling the meeting. Please try again or contact me directly.",
      variant: "destructive",
    });
    
    return false;
  }
};
