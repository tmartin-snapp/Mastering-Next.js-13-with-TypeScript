import { NextRequest, NextResponse } from "next/server";
import React from "react";
import schema from "../schema";

interface Props {
  params: Promise<Params>;
}

interface Params {
  id: number;
}

export function GET(
	request: NextRequest, 
	{ params }: Props) 
{
	const { id } = React.use(params);
	if (id > 10)
		return NextResponse.json({ error: 'User not found'}, {status: 404})
	
	return NextResponse.json({ id: 1, name: 'Mosh'})

	//fetch
	// not found --> 404
	// else return data
}

export async function PUT (
	request: NextRequest, 
	{ params }: Props
) {
	//Validate the request body
	const body = await request.json();
	const validation = schema.safeParse(body)
	if (!validation.success)
		return NextResponse.json(validation.error.message, {status: 400}) //If invalid, return 400
	const { id } = React.use(params);
	if ( id > 10 )  	//Fetch the user with the given id
		return NextResponse.json({error: 'The user with the id value specified does not exist'}, {status: 404}) //If doesn't exist, return 404
	return NextResponse.json({ id: id, name: body.name})//Update the user	//Return the updated user
}

export function DELETE (
	request: NextRequest,
	{ params }: Props 
) {
	const { id } = React.use(params);
	if (id > 10)
		return NextResponse.json({error: 'User not found'}, {status: 404})

	return NextResponse.json({})
}

