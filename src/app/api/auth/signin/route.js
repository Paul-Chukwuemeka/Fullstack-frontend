import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  const body = await req.json();
  try {
    const res = await axios.post("http://localhost:5000/user/login", body);
    const data = res.data
    const response = NextResponse.json({message: data.message})
    response.cookies.set("user-auth", data.token,{
        sameSite: "strict",
        httpOnly:true,
        secure:true,
        maxAge:"36000"
    });
    return response;
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
