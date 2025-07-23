import { Resend } from "resend";
import {redirect} from  'next/navigation'


// EMAIL SENDGING FUCTIONALITY 
// ADD RESEND_API_KEY IN YOUR .ENV FILE 

export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message");
  const name = formdata.get("name");
  const senderEmail = formdata.get("SenderEmail");
  console.log("BREVO KEY:", process.env.BREVO_API_KEY);
  if (!message || !senderEmail || !name) {
    return { error: "Invalid input data" };
  }

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": process.env.BREVO_API_KEY!,
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      sender: {
        name: name,
        email: senderEmail,
      },
      to: [
        {
          email: "yassyn.contact@gmail.com",
          name: "Recipient Name",
        },
      ],
      subject: `${name} From Contact Form.`,
      htmlContent: `<p><strong>Sender:</strong> ${senderEmail}</p><p>${message}</p>`,
    }),
  });

  if (!response.ok) {
    const err = await response.json();
    console.error("Brevo API Error:", err);
    return { error: "Failed to send email" };
  }

  return redirect("/");
};
