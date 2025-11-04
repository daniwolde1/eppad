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

    // Create transporter with debug enabled
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465", // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      logger: true,       // logs info to console
      debug: true,        // prints SMTP communication
    })

    // Prepare the email
    const mailOptions = {
      from: `"EPPAD Contact Form" <${process.env.SMTP_USER}>`,
      to: "daniwolde@gmail.com", // change temporarily to a Gmail for testing if needed
      subject: `New message from ${name} (${subject})`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    }

    // Send email and log full response
    const info = await transporter.sendMail(mailOptions)
    console.log("Nodemailer info:", info)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email." },
      { status: 500 }
    )
  }
}