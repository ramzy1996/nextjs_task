import client from '@/app/PrismaConfig/PrismaConfig';
import { NextRequest } from 'next/server'
import { ErrorResponse, SuccessResponse } from '../Response';
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
        return SuccessResponse(newNote, 200)
    } catch (error) {
        return ErrorResponse('Create Error', 500)
    }
}

//get method 
export const GET = async () => {
    try {
        const getNotes = await client.notes.findMany()
        return SuccessResponse(getNotes, 200)
    } catch (error) {
        return ErrorResponse('Get Error', 500)
    }
}