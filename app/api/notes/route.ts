import client from '@/app/PrismaConfig/PrismaConfig';
import { NextRequest, NextResponse } from 'next/server'
//url: http://localhost:3000/api/notes

// post method
export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        const { title, content } = body
        const newNote = await client.notes.create({
            data: {
                title, content
            }
        })
        return NextResponse.json(newNote, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Create Error', error }, { status: 500 })
    }
}

//get method 
export const GET = async () => {
    try {
        const getNotes = await client.notes.findMany()
        return NextResponse.json(getNotes, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Get Error', error }, { status: 500 })
    }
}