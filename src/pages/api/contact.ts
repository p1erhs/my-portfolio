import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "../../utils/sendEmail";

type Data = {
  error?: string;
  success?: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await sendEmail({
      to: process.env.CONTACT_RECIPIENT || "",
      subject: \`New contact message from \${name}\`,
      text: \`Name: \${name}\nEmail: \${email}\n\nMessage:\n\${message}\`,
    });
    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error("Email send error:", err);
    return res.status(500).json({ error: "Failed to send email." });
  }
}
