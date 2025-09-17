import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axios.get("http://localhost:5000/products");
    return NextResponse.json({ data: response.data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "test" }, { status: 500 });
  }
}


