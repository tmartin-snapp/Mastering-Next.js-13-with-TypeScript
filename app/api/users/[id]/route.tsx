import { NextRequest, NextResponse } from "next/server";
import schema from "../../../users/schema";
import { prisma } from "@/prisma/client";

interface Props {
  params: Promise<Params>;
}

interface Params {
  id: string;
}

export async function GET(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const parsedId = parseInt(id);

  const user = await prisma.user.findUnique({
    where: { id: parsedId },
  });

  if (!user)
    return NextResponse.json(
      { error: "The user with the id value specified does not exist" },
      { status: 404 }
    );
  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: Props) {
  //Validate the request body
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.message, { status: 400 }); //If invalid, return 400

  const { id } = await params;
  const parsedId = parseInt(id);

  const user = await prisma.user.findUnique({
    where: { id: parsedId },
  });

  if (!user)
    return NextResponse.json(
      { error: "The user with the id value specified does not exist" },
      { status: 404 }
    );

  const updatedUser = await prisma.user.update({
    where: { id: parsedId },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser); //Update the user	//Return the updated user
}

/*export function DELETE(request: NextRequest, { params }: Props) {
  const { id } = React.use(params);
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({});
}
*/
