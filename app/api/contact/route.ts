
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type Body = {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(req: Request) {
  try {
    const body: Body = await req.json()

    // basic server-side validation
    if (!body?.name || !body?.email || !body?.subject || !body?.message) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // Create transporter using env variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE === "true" || true, // true for 465, false for 587 (STARTTLS)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: `"EPPAD Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER || "info@eppad.org",
      subject: `Website Contact — ${body.subject}`,
      text: [
        `Name: ${body.name}`,
        `Email: ${body.email}`,
        `Subject: ${body.subject}`,
        "",
        "Message:",
        body.message,
      ].join("\n"),
      html: `<p><strong>Name:</strong> ${body.name}</p>
             <p><strong>Email:</strong> ${body.email}</p>
             <p><strong>Subject:</strong> ${body.subject}</p>
             <hr/>
             <p>${body.message.replace(/\n/g, "<br/>")}</p>`,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error("API /api/contact error:", err)
    return NextResponse.json({ success: false, error: err?.message || "Unknown error" }, { status: 500 })
  }
}
