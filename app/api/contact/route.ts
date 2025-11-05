import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    await connection.execute(
      "INSERT INTO messages (name, email, subject, message, created_at) VALUES (?, ?, ?, ?, NOW())",
      [name, email, subject, message]
    );

    await connection.end();

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
