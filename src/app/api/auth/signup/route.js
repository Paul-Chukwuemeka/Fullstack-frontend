import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  const body = await req.json();
  
  try {
    const res = await axios.post("http://localhost:5000/user/signup", body);
    return NextResponse.json(res.data,{status:201})
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
