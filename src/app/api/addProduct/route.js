import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  const body = await request.json();
    if (!body) {
      return NextResponse.json({ message: "Body Required" }, { status: 400 });
    }
    try {
      const response = await axios.post("http://localhost:5000/products/addProduct", body);
      return NextResponse.json({ message: "Data Sent"},{status:200});
    } catch (error) {
      return NextResponse.json({ message: error }, { status: 500 });
    }
}
