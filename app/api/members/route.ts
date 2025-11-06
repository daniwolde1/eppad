import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM members ORDER BY created_at DESC");
    return NextResponse.json(rows);
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch members" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const [result] = await pool.query(
      `INSERT INTO members 
      (first_name, last_name, email, phone, country, city, membership_type, current_position, institution, years_of_experience, areas_of_interest, working_groups, how_did_you_hear, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')`,
      [
        data.firstName,
        data.lastName,
        data.email,
        data.phone,
        data.country,
        data.city,
        data.membershipType,
        data.currentPosition,
        data.institution,
        data.yearsOfExperience,
        data.areasOfInterest,
        data.workingGroups || "",
        data.howDidYouHear,
      ]
    );

    // Return inserted row ID for redirect
    return NextResponse.json({ id: (result as any).insertId });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: "Failed to save member" }, { status: 500 });
  }
}
