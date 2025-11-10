import { NextRequest, NextResponse } from "next/server";
import React from "react";

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
	{ params }: { params: { id: number}}) 
{
	//Validate the request body
	const body = await request.json();
	if (!body.name)
	//If invalid, return 400
		return NextResponse.json({ error: 'The name is not valid'}, {status: 400})
	//Fetch the user with the given id
	
	if (params.id > 10)
		return NextResponse.json({error: 'The user with the id value specified does not exist'}, {status: 404})

	return NextResponse.json({ id: params.id, name: body.name})
	//If doesn't exist, return 404

	//Update the user
	//Return the updated user
}

