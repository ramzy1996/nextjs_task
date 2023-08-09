import client from '@/app/PrismaConfig/PrismaConfig';
import { NextRequest } from 'next/server'
import { ErrorResponse, SuccessResponse } from '../Response';
import { NextApiRequest } from 'next';
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
export const GET = async (req: NextRequest) => {
    const query = req.nextUrl.searchParams.get('page')
    const page = query ? parseInt(query) : 1;
    const limit = 10;
    const offset = (page - 1) * limit;
    try {
        const total = await client.notes.count();
        const pageCount = Math.ceil(total / limit);
        const getNotes = await client.notes.findMany({
            skip: offset,
            take: limit,
        })
        return SuccessResponse({ getNotes, pageCount }, 200)
    } catch (error) {
        return ErrorResponse('Get Error', 500)
    }
}