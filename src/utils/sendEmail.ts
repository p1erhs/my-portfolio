import nodemailer from "nodemailer";

export interface EmailOptions {
  to: string;
  subject: string;
  text: string;
}

export async function sendEmail(options: EmailOptions) {
  // Replace these with your actual SMTP credentials or environment variables:
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g., "smtp.gmail.com"
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // your email address
      pass: process.env.SMTP_PASS, // your email password / app password
    },
  });

  await transporter.sendMail({
    from: \`"Ioannis Pieris" <\${process.env.SMTP_USER}>\`,
    to: options.to,
    subject: options.subject,
    text: options.text,
  });
}
