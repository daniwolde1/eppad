import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import pool from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Check if user already exists
    const [existing]: any = await pool.query(
      "SELECT id FROM admin_users WHERE email = ?",
      [email]
    );
    if (existing.length > 0) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    await pool.query(
      "INSERT INTO admin_users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );

    return NextResponse.json({ success: true, message: "Admin user created successfully" });
  } catch (error) {
    console.error("Error creating admin user:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
