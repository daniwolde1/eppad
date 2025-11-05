import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // ✅ Nodemailer transporter using GoDaddy non-SSL (port 587)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,           // mail.eppad.org
      port: Number(process.env.SMTP_PORT),   // 587
      secure: process.env.SMTP_SECURE === "true", // false for port 587
      auth: {
        user: process.env.SMTP_USER,         // info@eppad.org
        pass: process.env.SMTP_PASS,         // email password or app password
      },
    });

    // ✅ Mail options
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,             // send to yourself
      subject: `📩 New Contact Form Message: ${subject}`,
      text: `
From: ${name} <${email}>

Message:
${message}
      `,
      html: `
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>${message}</p>
      `,
    };

    // ✅ Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Mail sent:", info.messageId);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("❌ Email sending error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
