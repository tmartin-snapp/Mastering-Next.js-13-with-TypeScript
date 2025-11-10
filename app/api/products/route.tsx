import { NextRequest, NextResponse } from "next/server";
import productS from "./productScheme";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Milk", price: 2.5 },
    { id: 2, name: "Eggs", price: 3.5 },
  ]);
}

export async function POST(request: NextRequest) {
  const bodyRequest = await request.json();
  const validation = productS.safeParse(bodyRequest);
  if (!validation.success)
    return NextResponse.json(validation.error.message, {status: 400})
  return NextResponse.json({ id: 10, name: bodyRequest.name, price: bodyRequest.price}, {status: 201})
}

export async function PUT(request: NextRequest) {
  const bodyRequest = await request.json();
  const validation = productS.safeParse(bodyRequest);
  if (!validation.success)
    return NextResponse.json(validation.error.message, {status: 400})
  return NextResponse.json({ id: 10, name: bodyRequest.name, price: bodyRequest.price}, {status: 201})
}
