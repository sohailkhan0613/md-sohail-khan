
import { toast } from "@/hooks/use-toast";

export const scheduleMeeting = async (
  recruiterEmail: string,
  recruiterName: string = "Recruiter",
  company: string = "",
  objective: string = "Discussion about potential opportunities.",
  preferredTime: string = "",
  subject: string = "Interview with Mohd Sohail Khan"
) => {
  try {
    // Collect all meeting details
    const meetingDetails = {
      recruiterEmail,
      recruiterName,
      company,
      objective,
      preferredTime,
      myEmail: "sk581470@gmail.com",
      subject
    };
    
    console.log("Scheduling meeting with:", meetingDetails);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Create WhatsApp link with pre-filled message
    const phoneNumber = "9381635201";
    let message = `Hi Sohail, I'm ${recruiterName} from ${company || '[Company]'}. `;
    message += `I'd like to schedule a call to discuss: ${objective || 'potential opportunities'}. `;
    message += `My email is ${recruiterEmail}, and I'm available ${preferredTime || 'at your convenience'}.`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    // Show success toast
    toast({
      title: "Meeting Request Sent!",
      description: `I'll send you a Google Meet invite to ${recruiterEmail} shortly. You can also message me directly on WhatsApp.`,
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
