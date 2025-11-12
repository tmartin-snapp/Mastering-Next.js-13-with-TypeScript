import { NextRequest, NextResponse } from "next/server";
import productS from "./productScheme";
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const bodyRequest = await request.json();
  const validation = productS.safeParse(bodyRequest);
  if (!validation.success)
    return NextResponse.json(validation.error.message, { status: 400 });

  const newProduct = await prisma.product.create({
    data: {
      name: bodyRequest.name,
      price: bodyRequest.price,
    },
  });

  return NextResponse.json(newProduct, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const bodyRequest = await request.json();
  const validation = productS.safeParse(bodyRequest);
  if (!validation.success)
    return NextResponse.json(validation.error.message, { status: 400 });
  return NextResponse.json(
    { id: 10, name: bodyRequest.name, price: bodyRequest.price },
    { status: 201 }
  );
}
