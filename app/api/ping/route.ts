import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // Simulate a ping response
    return NextResponse.json({ message: "pong" }, { status: 200 })
  } catch (error) {
    console.error("Ping error:", error)
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}
