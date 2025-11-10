import { NextRequest, NextResponse } from "next/server";
import schema from "@/app/users/schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Mosh"},
    { id: 2, name: "John"}
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.message, {status: 400})
  //Validate
  // If invalid, return 400
  // Else, return 
  return NextResponse.json({id: 1, name: body.name}, {status: 201}) //Create
}