import { NextResponse } from "next/server"

export const ErrorResponse = (message: string, status?: number) => {
    return NextResponse.json({ message: message }, { status: status })
}
export const SuccessResponse = (data: any, status?: number) => {
    return NextResponse.json(data, { status: status })
}