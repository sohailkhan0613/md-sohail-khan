
import { toast } from "@/hooks/use-toast";

/*
import { google } from 'googleapis';
import readline from 'readline';
import { OAuth2Client } from 'google-auth-library';

// OAuth2 credentials (from Google Cloud Console)
const CLIENT_ID = 'YOUR_CLIENT_ID';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
const REDIRECT_URI = 'YOUR_REDIRECT_URI';

// Set up OAuth2 client
const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// Generate the URL for user authentication
const SCOPES = ['https://www.googleapis.com/auth/calendar'];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to get OAuth2 token
async function getOAuth2Token(): Promise<string> {
  return new Promise((resolve, reject) => {
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);

    rl.question('Enter the code from that page here: ', async (code: string) => {
      try {
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);
        console.log('Successfully authenticated!');
        rl.close();
        resolve(tokens.access_token || '');
      } catch (error) {
        reject('Error while retrieving access token: ' + error.message);
      }
    });
  });
}

// Function to create a Google Calendar event with Google Meet link
async function createGoogleMeetInvite(meetingdetails) {
  const accessToken = await getOAuth2Token();

  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  // Define event details
  const event = {
    summary: 'Google Meet Meeting ',
    description: 'This is a sample Google Meet invite created using TypeScript.',
    start: {
      dateTime: '2025-05-01T10:00:00-07:00', // Replace with the actual start date and time
      timeZone: 'America/Los_Angeles',
    },
    end: {
      dateTime: '2025-05-01T11:00:00-07:00', // Replace with the actual end date and time
      timeZone: 'America/Los_Angeles',
    },
    attendees: [
      { email: 'attendee1@example.com' },
      { email: 'attendee2@example.com' },
    ],
    reminders: {
      useDefault: true,
    },
    conferenceData: {
      createRequest: {
        requestId: 'sample123', // Random unique ID for creating the Google Meet link
        conferenceSolutionKey: {
          type: 'hangoutsMeet',
        },
      },
    },
  };

  try {
    const response = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
      conferenceDataVersion: 1,
    });

    console.log('Event created: ', response.data.htmlLink);
    console.log('Google Meet Link:', response.data.conferenceData?.entryPoints?.[0]?.uri);
  } catch (error) {
    console.error('Error creating event:', error);
  }
}


*/

export const scheduleMeeting = async (
  recruiterEmail: string,
  recruiterName: string = "Recruiter",
  subject: string = "Interview with Mohd Sohail Khan",
  description: string = "Discussion about potential opportunities."
) => {
  try {
    // In a real implementation, you would submit to a backend API
    // For demonstration, we'll just show a success message
    let meetingdetails = {
      recruiterEmail,
      recruiterName,
      myEmail: "sk581470@gmail.com",
      subject,
      description
    }
    console.log("Scheduling meeting with:", {
      recruiterEmail,
      recruiterName,
      myEmail: "sk581470@gmail.com",
      subject,
      description
    });

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));// Run the function to create a Google Meet invite
    // createGoogleMeetInvite(meetingdetails)

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
