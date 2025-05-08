const API_URL = 'https://emailer-api-buddyguard-i6x1vqdqc-haziqhuzairi11s-projects.vercel.app/api/send';


const sendEmail = async ({ to, subject, text }) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to, subject, text }),
    });

    const responseText = await response.text();  // Use text() instead of json() for debugging
    console.log('Raw response:', responseText);   // Log raw response for debugging

    // Check if the response is valid JSON
    let data;
    try {
      data = JSON.parse(responseText);  // Try parsing the response as JSON
    } catch (jsonError) {
      throw new Error('Invalid JSON response');
    }

    if (!response.ok) {
      throw new Error(data.message || 'Email failed to send');
    }

    return data;
  } catch (error) {
    console.error('Error sending email:', error);  // Log the error for debugging
    throw new Error('There was an error sending the email');
  }
};

export default sendEmail;
