import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { ids } = await req.json();
    if (!ids || !Array.isArray(ids) || ids.length === 0)
      return NextResponse.json({ success: false, error: "No message IDs provided" });

    const placeholders = ids.map(() => "?").join(",");
    await pool.query(`DELETE FROM contact_messages WHERE id IN (${placeholders})`, ids);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ success: false, error: err.message });
  }
}
