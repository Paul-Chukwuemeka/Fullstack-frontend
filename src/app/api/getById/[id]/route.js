import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const productId = await params.id;
  try {
    const response = await axios.get(
      `http://localhost:5000/products/${productId}`
    );
    return NextResponse.json({ message: response.data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
