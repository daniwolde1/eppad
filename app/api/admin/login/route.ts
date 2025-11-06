import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    console.log("📩 Login attempt:", email);

    const [rows]: any = await db.execute(
      "SELECT * FROM admin_users WHERE email = ?",
      [email]
    );
    console.log("✅ Query result:", rows);

    if (!rows || rows.length === 0) {
      console.log("❌ No user found for:", email);
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const user = rows[0];
    console.log("👤 Found user:", user);

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("🔐 Password valid:", isPasswordValid);

    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    console.log("🎟️ Token generated");
    return NextResponse.json({ message: "Login successful", token });
  } catch (error: any) {
    console.error("💥 Login error:", error.message || error);
    return NextResponse.json({ error: error.message || "Server error" }, { status: 500 });
  }
}
