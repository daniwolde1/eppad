import nodemailer from "nodemailer";

async function testSMTP() {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 587,
      secure: false,
      auth: {
        user: "info@eppad.org",
        pass: "Q5(z]EQd%19M", // replace with your GoDaddy app password
      },
      tls: { rejectUnauthorized: false },
    });

    // Await verify so we catch success or failure
    await transporter.verify();
    console.log("✅ SMTP connection successful!");
  } catch (err) {
    console.error("❌ SMTP connection failed:", err.message || err);
  }
}

testSMTP();
