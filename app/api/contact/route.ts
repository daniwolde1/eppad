import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: `New message from ${name}: ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>${message}</p>
      `,
    }

    const info = await transporter.sendMail(mailOptions)
    console.log("✅ Message sent:", info.messageId)
    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("❌ Mail error:", error)
    return NextResponse.json({ success: false, error: error.message })
  }
}
