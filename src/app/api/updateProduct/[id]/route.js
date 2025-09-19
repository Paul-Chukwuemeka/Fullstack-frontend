import axios from "axios";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const productId = await params.id;
  const body = await request.json();

  if (!body) {
    return NextResponse.json({ message: "Body Required" }, { status: 400 });
  }

  try {
    const response = await axios.put(
      `http://localhost:5000/products/${productId}`,
      body
    );
    return NextResponse.json({ message: response.data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
