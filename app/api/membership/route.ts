import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      country,
      city,
      membershipType,
      currentPosition,
      institution,
      yearsOfExperience,
      areasOfInterest,
      workingGroups,
      howDidYouHear,
    } = data;

    // Validate required fields
    if (!firstName || !lastName || !email || !membershipType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const [result]: any = await pool.query(
      `INSERT INTO memberships 
      (firstName, lastName, email, phone, country, city, membershipType, currentPosition, institution, yearsOfExperience, areasOfInterest, workingGroups, howDidYouHear, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')`,
      [
        firstName,
        lastName,
        email,
        phone,
        country,
        city,
        membershipType,
        currentPosition,
        institution,
        yearsOfExperience,
        areasOfInterest,
        workingGroups || "",
        howDidYouHear,
      ]
    );

    return NextResponse.json({
      success: true,
      message: "Application stored successfully",
      id: result.insertId,
    });
  } catch (error: any) {
    console.error("Error saving membership:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

