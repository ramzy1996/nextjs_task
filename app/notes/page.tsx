"use client"
import { useEffect, useState } from 'react'
import { INotes } from '../Interfaces/INotes';
import dynamic from 'next/dynamic';
import { get, post } from '../utility/apiClient';
import Modal from '../components/Modal/Modal';

const NoteCardLoading = dynamic(() => import('../components/NoteCard/NoteCardLoading'))
const NoteCard = dynamic(() => import('../components/NoteCard/NoteCard'))

const NoteApp = () => {
    const [notes, setNotes] = useState<INotes[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [inputValues, setInputValues] = useState<INotes>({})

    const getData = async () => {
        // setLoading(true)
        await get('/notes')
            .then((res: any) => {
                setNotes(res.data)
                setLoading(false)
            }).catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getData()
    }, [])
    const handleSubmit = (e: any) => {
        e.preventDefault();
        post('/notes', inputValues)
            .then((res) => {
                getData()
            })
            .finally(() => {
                setInputValues({})
                setModalOpen(false)
            })
    }

    return (
        <>
            <div className="container pb-8 flex justify-between">
                <h1 className="text-5xl max-sm:text-3xl text-center font-bold text-teal-500">
                    Your Notes
                </h1>
                <button onClick={() => setModalOpen(true)} data-hs-overlay="#NoteModal" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded focus:outline-none focus:shadow-outline px-4 ease-linear transition-all duration-150">
                    Add Note
                </button>
            </div>

            <div className='flex flex-wrap gap-6 justify-center'>
                {
                    !loading ?
                        notes?.map((note: INotes, i: any) => {
                            return (
                                <NoteCard key={note.id} note={note} />
                            )
                        })
                        :
                        Array(3).fill(null).map((ele: any, i: any) => {
                            return (
                                <NoteCardLoading key={i} />
                            )
                        })
                }
            </div>
            {
                modalOpen ? (
                    <Modal handleSubmit={handleSubmit} setModalOpen={setModalOpen} setInputValues={setInputValues} inputValues={inputValues} />
                ) : null
            }
        </>
    )
}

export default NoteApp
