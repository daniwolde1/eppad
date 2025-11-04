import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      )
    }

    // Create transporter using your SMTP credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // eppad.org
      port: Number(process.env.SMTP_PORT), // 465
      secure: true, // SSL
      auth: {
        user: process.env.SMTP_USER, // info@eppad.org
        pass: process.env.SMTP_PASS, // email password from cPanel
      },
    })

    // Send email
    await transporter.sendMail({
      from: `"EPPAD Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // send to yourself
      subject: `New message from ${name} (${subject})`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { success: false, error: "Failed to send email. Please try again." },
      { status: 500 }
    )
  }
}
