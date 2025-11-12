export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import schema from "@/app/users/schema";
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
      console.warn("Validation failed:", validation.error);
      return NextResponse.json({ error: validation.error.message }, { status: 400 });
    }

    const user = await prisma.user.create({
      data: {
        name: validation.data.name,
        email: validation.data.email,
      },
    });

    console.log("Created user:", user);
    return NextResponse.json(user, { status: 201 });
  } catch (err: any) {
    console.error("POST /api/users error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
