import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { db } from "@/lib/db"; // your MySQL connection

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: "Missing username or password" },
        { status: 400 }
      );
    }

    // Query user
    const [rows]: any = await db.execute(
      "SELECT * FROM admin_users WHERE username = ?",
      [username]
    );

    if (!rows || rows.length === 0) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 401 }
      );
    }

    const user = rows[0];

    // Compare password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return NextResponse.json(
        { success: false, error: "Invalid password" },
        { status: 401 }
      );
    }

    // You could return JWT here if you want to implement auth sessions
    return NextResponse.json({ success: true, message: "Login successful" });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
