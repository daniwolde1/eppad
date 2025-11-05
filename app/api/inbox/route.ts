import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [rows] = await connection.query(
      "SELECT id, name, email, subject, message, created_at FROM messages ORDER BY created_at DESC"
    );

    await connection.end();

    return NextResponse.json({ success: true, messages: rows });
  } catch (error: any) {
    console.error("Inbox API error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
