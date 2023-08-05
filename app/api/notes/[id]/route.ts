import client from '@/app/PrismaConfig/PrismaConfig';
import { NextRequest } from 'next/server'
import { ObjectId } from 'mongodb';
import { ErrorResponse, SuccessResponse } from '../../Response';
//url: http://localhost:3000/api/notes/00202

//get by id
export const GET = async (req: NextRequest, { params }: any) => {
    try {
        const { id } = params
        //validate objectId
        if (!ObjectId.isValid(id)) return ErrorResponse("Given ObjectId is not valid", 400)
        const getNoteById = await client.notes.findUnique({
            where: {
                id
            }
        })
        if (!getNoteById) return ErrorResponse("Note not found", 404)
        return SuccessResponse(getNoteById, 200)
    } catch (error) {
        return ErrorResponse("Get Error", 500)
    }
}

//patch method
export const PATCH = async (req: NextRequest, { params }: any) => {
    try {
        const body = await req.json();
        const { title, content } = body

        const { id } = params
        //validate objectId
        if (!ObjectId.isValid(id)) return ErrorResponse("Given ObjectId is not valid", 400)
        const updatedNote = await client.notes.update({
            where: {
                id
            },
            data: {
                title, content
            }
        })
        if (!updatedNote) return ErrorResponse("Note not found", 404)

        return SuccessResponse(updatedNote, 200)
    } catch (error) {
        return ErrorResponse("Update Error", 500)
    }
}

//delete method

export const DELETE = async (req: NextRequest, { params }: any) => {
    try {
        const { id } = params
        //validate objectId
        if (!ObjectId.isValid(id)) return ErrorResponse("Given ObjectId is not valid", 400)
        const getNoteByIdAndDelete = await client.notes.delete({
            where: {
                id
            }
        })
        if (!getNoteByIdAndDelete) return ErrorResponse("Note not found", 404)

        return SuccessResponse("Note deleted successfully", 200)
    } catch (error) {
        return ErrorResponse("Delete Error", 500)
    }
}

// validate objectid
