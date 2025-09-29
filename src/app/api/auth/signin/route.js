import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
    const body = await req.json()
    try {
        const res = await axios.post("http://localhost:5000/user/login",body)
        return NextResponse.json(res.data,{status:200})
    } catch (error) {
        return NextResponse.json({message: error},{status:400})
    }
}