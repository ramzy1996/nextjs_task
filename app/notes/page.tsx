"use client"
import { useEffect, useState } from 'react'
import { INotes } from '../Interfaces/INotes';
import dynamic from 'next/dynamic';
import { get, post } from '../utility/apiClient';
import Modal from '../components/Modal/Modal';
import Pagination from '../components/Pagination/Pagination';
import { useSearchParams, useRouter } from 'next/navigation';
import { IMsgBoxData } from '../Interfaces/IMsgBoxData';
import MessageBox from '../components/MessageBox/MessageBox';

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
    const [pageCount, setPageCount] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(1);
    // display messsage box
    const [openMessageBox, setOpenMessageBox] = useState<boolean>(false)
    const [modalData, setModalData] = useState<IMsgBoxData>({})

    const router = useRouter();
    const search = useSearchParams();
    const pageVal: string | null = search.get('page')
    const page: number = pageVal ? parseInt(pageVal) : 1
    useEffect(() => {
        TitleValidation()
        setErrorTitleClass(false)
    }, [inputValues.title])

    useEffect(() => {
        ContentValidation()
        setErrorContentClass(false)
    }, [inputValues.content])

    const TitleValidation = (): boolean => {
        let showError = true
        if (inputValues.title?.length === 0 || inputValues.title === '') {
            setErrorTitleClass(true)
            showError = true
        } else {
            setErrorTitleClass(false)
            showError = false
        }
        return showError
    }
    const ContentValidation = (): boolean => {
        let showError = true
        if (inputValues.content?.length === 0 || inputValues.content === '') {
            setErrorContentClass(true)
            showError = true
        } else {
            setErrorContentClass(false)
            showError = false
        }
        return showError
    }
    const getData = async () => {
        setLoading(true)
        await get(`/notes?page=${page}`)
            .then((res: any) => {
                console.log(res)
                setNotes(res.data.getNotes)
                setPageCount(res.data.pageCount)
                setLoading(false)
            }).catch((err) => {
                setLoading(false)
                setOpenMessageBox(true)
                setModalData({
                    classname: 'error',
                    message: err.response?.data.message,
                    isConfirmation: false,
                    title: 'Fetch Error',
                    btnName: '',
                    closeCallbackFunction: resetForm
                })
            })
    }
    useEffect(() => {
        getData()
    }, [])

    //pagination click
    const handlePageClick = (clcik: any) => {
        let selected = clcik.selected + 1;
        setCurrentPage(selected);
        router.push(`?page=${selected}`);

        document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
    };

    //setpage
    useEffect(() => {
        if (page) {
            setCurrentPage(page);
            getData()
        }
    }, [page]);

    const handleSubmit = (e: any) => {
        // console.log(TitleValidation(), ContentValidation())
        e.preventDefault();
        if (!TitleValidation() && !ContentValidation()) {
            console.log("valid", inputValues)
            if (inputValues.id === '') {
                post('/notes', inputValues)
                    .then((res) => {
                        setOpenMessageBox(true)
                        setModalData({
                            classname: 'success',
                            message: "Note successfully addedd",
                            title: 'Create Note',
                            isConfirmation: false,
                            btnName: '',
                            closeCallbackFunction: resetForm
                        })
                        getData()
                    })
                    .catch((err: any) => {
                        setOpenMessageBox(true)
                        setModalData({
                            classname: 'error',
                            message: err.response?.data.message,
                            title: 'Creation Error',
                            isConfirmation: false,
                            btnName: '',
                            closeCallbackFunction: resetForm
                        })
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
            return
        }
    }
    const resetForm = () => {
        inputValues.title = ''
        inputValues.id = ''
        inputValues.content = ''
        setErrorTitleClass(false)
        setErrorContentClass(false)
        setOpenMessageBox(false)
    }
    console.log(modalData)

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
                        notes.length !== 0 ? (
                            notes?.map((note: INotes, i: any) => {
                                return (
                                    <NoteCard key={note.id} note={note} getData={getData} />
                                )
                            })
                        ) : (
                            <div className='flex flex-wrap justify-center'>
                                <div>
                                    No available notes at this moment please add your notes using above Add Note button.
                                </div>
                                <div> Thank you.</div>
                            </div>
                        )
                        :
                        Array(5).fill(null).map((ele: any, i: any) => {
                            return (
                                <NoteCardLoading key={i} />
                            )
                        })
                }
            </div>
            <div className='flex flex-wrap gap-6 justify-center'>
                <Pagination
                    pageCount={pageCount}
                    handlePageClick={handlePageClick}
                    currentPage={currentPage}
                />
            </div>
            {
                modalOpen ? (
                    <Modal handleSubmit={handleSubmit} setModalOpen={setModalOpen} setInputValues={setInputValues} inputValues={inputValues} errorContentClass={errorContentClass} errorTitleClass={errorTitleClass} resetForm={resetForm} TitleValidation={TitleValidation} ContentValidation={ContentValidation} />
                ) : null
            }
            {/* show error modal popup */}

            {
                openMessageBox && (
                    <MessageBox {...modalData} />
                )
            }
        </>
    )
}

export default NoteApp
