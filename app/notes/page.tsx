"use client"
import { useEffect, useState } from 'react'
import { INotes } from '../Interfaces/INotes';
import dynamic from 'next/dynamic';
import { get, post } from '../utility/apiClient';
import Modal from '../components/Modal/Modal';

const NoteCardLoading = dynamic(() => import('../components/NoteCard/NoteCardLoading'))
const NoteCard = dynamic(() => import('../components/NoteCard/NoteCard'))
const initialValues: INotes = {
    content: '',
    title: '',
    id: ''
}
const NoteApp = () => {
    const [notes, setNotes] = useState<INotes[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [errorTitleClass, setErrorTitleClass] = useState<boolean>(false)
    const [errorContentClass, setErrorContentClass] = useState<boolean>(false)
    const [inputValues, setInputValues] = useState<INotes>(initialValues)

    useEffect(() => {
        TitleValidation()
        setErrorTitleClass(false)
    }, [inputValues.title])

    useEffect(() => {
        ContentValidation()
        setErrorContentClass(false)
    }, [inputValues.content])

    const TitleValidation = (): boolean => {
        if (inputValues.title?.length !== 0) {
            setErrorTitleClass(false)
        } else {
            setErrorTitleClass(true)
        }
        return errorTitleClass
    }
    const ContentValidation = (): boolean => {
        if (inputValues.content?.length !== 0) {
            setErrorContentClass(false)
        } else {
            setErrorContentClass(true)
        }
        return errorContentClass
    }
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
        if (TitleValidation() && ContentValidation()) {
            if (inputValues.id === '') {
                post('/notes', inputValues)
                    .then((res) => {
                        getData()
                    })
                    .finally(() => {
                        resetForm()
                        setModalOpen(false)
                    })
            } else {
                console.log(inputValues.id)
                console.log(inputValues.title)
                console.log('updated', inputValues)
            }
        } else {
            TitleValidation()
            ContentValidation()
        }
    }
    const resetForm = () => {
        inputValues.title = ''
        inputValues.id = ''
        inputValues.content = ''
        setErrorTitleClass(false)
        setErrorContentClass(false)
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
                    <Modal handleSubmit={handleSubmit} setModalOpen={setModalOpen} setInputValues={setInputValues} inputValues={inputValues} errorContentClass={errorContentClass} errorTitleClass={errorTitleClass} resetForm={resetForm} TitleValidation={TitleValidation} ContentValidation={ContentValidation} />
                ) : null
            }
        </>
    )
}

export default NoteApp
