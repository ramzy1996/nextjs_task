"use client"
import { useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard/NoteCard';
import { INotes } from '../Interfaces/INotes';
import Loading from '../components/Loading/Loading';

const NoteApp = () => {
    const [notes, setNotes] = useState<INotes[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const currentURL = typeof window !== 'undefined' && window.location.origin;

    const getData = () => {
        setLoading(true)
        fetch(`${currentURL}/api/notes`)
            .then(res => {
                return res.json()
            }).then(data => {
                setNotes(data)
                setLoading(false)
            }).catch(err => {
                console.log('Get Error', err)
            })
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="container pb-8 flex justify-between">
                <h1 className="text-5xl max-sm:text-3xl text-center font-bold text-teal-500">
                    Your Notes
                </h1>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded focus:outline-none focus:shadow-outline px-4">
                    Add Note
                </button>

            </div>

            <div className='flex flex-wrap gap-6 justify-center'>
                {
                    notes.map((note: INotes) => {
                        return (
                            <NoteCard key={note.id} note={note} />
                        )
                    })
                }
            </div>
            {
                loading && (
                    <Loading />
                )
            }
        </>
    )
}

export default NoteApp
