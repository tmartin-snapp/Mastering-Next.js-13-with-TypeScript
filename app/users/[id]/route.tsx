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
	{ params }: Props) {
		const { id } = React.use(params);
		if (id > 10)
			return NextResponse.json({ error: 'User not found'}, {status: 404})
		
		return NextResponse.json({ id: 1, name: 'Mosh'})

		//fetch
		// not found --> 404
		// else return data
	}
