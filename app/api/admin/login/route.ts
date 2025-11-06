import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 });
    }

    // Fetch user from database
    const [rows]: any = await pool.query(
      "SELECT * FROM admin_users WHERE email = ? LIMIT 1",
      [email]
    );

    if (!rows || rows.length === 0) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const user = rows[0];

    if (!user.password) {
      console.error("User record found but password is missing:", user);
      return NextResponse.json({ error: "User password not set in DB" }, { status: 500 });
    }

    // Compare provided password with stored hash
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // Generate token (optional)
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || "secret-key",
      { expiresIn: "1h" }
    );

    return NextResponse.json({
      success: true,
      token,
      user: { id: user.id, email: user.email },
    });
  } catch (err: any) {
    console.error("Login route error:", err);
    return NextResponse.json(
      { error: "Server error during login" },
      { status: 500 }
    );
  }
}
