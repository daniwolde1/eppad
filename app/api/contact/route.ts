import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    await db.query(
      "INSERT INTO contacts (name, email, message, created_at) VALUES (?, ?, ?, NOW())",
      [name, email, message]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Database insert error:", error);
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
  }
}
