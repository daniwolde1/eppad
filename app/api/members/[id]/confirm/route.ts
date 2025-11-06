import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    await pool.query("UPDATE members SET status = 'completed' WHERE id = ?", [id]);
    return NextResponse.json({ message: "Member confirmed successfully" });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: "Failed to confirm member" }, { status: 500 });
  }
}
