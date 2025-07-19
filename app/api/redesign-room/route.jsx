import { NextResponse } from "next/server";

export async function POST(req) {
    const {imageUrl, roomType, designType, additionalReq} = await req.json();
    // Convert Image to AI image

    // Convert Output Url to BASE64 Image

    // Save BASE64 to Firebase

    // Save All to Database
    return NextResponse.json({result:'Hello'})
}