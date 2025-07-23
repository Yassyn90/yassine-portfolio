import { Resend } from "resend";
import {redirect} from  'next/navigation'


// EMAIL SENDGING FUCTIONALITY 
// ADD RESEND_API_KEY IN YOUR .ENV FILE 

export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message");
  const name = formdata.get("name");
  const senderEmail = formdata.get("SenderEmail");

  console.log("RESEND KEY:", process.env.RESEND_API_KEY);

  if (!message || !senderEmail || !name) {
    return { error: "Invalid input data" };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY!}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Yassyn IDAR <onboarding@resend.dev>", // must be a verified sender or domain on Resend
      to: ["yassyn.contact@gmail.com"],
      subject: "You received a new EMAIL from Contact form",
      html: `
        <p><strong>Sender:</strong> ${senderEmail}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p>${message}</p>
      `,
    }),
  });

  if (!response.ok) {
    const err = await response.json();
    console.error("Resend API Error:", err);
    return { error: "Failed to send email" };
  }

  return redirect("/");
};