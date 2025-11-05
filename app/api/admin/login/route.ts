import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.ADMIN_JWT_SECRET || "supersecret";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    const [rows]: any = await pool.query(
      "SELECT * FROM admin_users WHERE username = ?",
      [username]
    );

    if (!rows || rows.length === 0) {
      return NextResponse.json({ success: false, error: "Invalid credentials" });
    }

    const user = rows[0];

    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) {
      return NextResponse.json({ success: false, error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
      expiresIn: "8h",
    });

    return NextResponse.json({ success: true, token });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ success: false, error: err.message });
  }
}
