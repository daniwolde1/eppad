import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const sql = `
      INSERT INTO messages (name, email, subject, message)
      VALUES (?, ?, ?, ?)
    `;
    await pool.query(sql, [name, email, subject, message]);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("DB insert error:", err.message || err);
    return NextResponse.json(
      { success: false, error: "Failed to save message." },
      { status: 500 }
    );
  }
}
