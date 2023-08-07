'use client'
import { get, getById } from '@/app/utility/apiClient'
import { INotes } from '@/app/Interfaces/INotes'
import { notFound, useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import dynamic from 'next/dynamic'
import Loading from '@/app/components/Loading/Loading'
import MessageBox from '@/app/components/MessageBox/MessageBox'
import { IMsgBoxData } from '@/app/Interfaces/IMsgBoxData'

const SingleNote = dynamic(() => import('@/app/components/SingleNote/SingleNote'))
const NotFound = dynamic(() => import('@/app/components/NotFound/NotFound'))

const hostname = typeof window !== 'undefined' && window.location.origin;


const page = () => {
    const [noteData, setNoteData] = useState<INotes>({})
    const [error, setError] = useState<boolean>(false)
    // const [errorMsg, setErrorMsg] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)
    const [modalData, setModalData] = useState<IMsgBoxData>({})

    const { id }: any = useParams()
    const getData = async () => {
        // setLoading(true)
        // await getById('/notes', id)
        //     .then((res: any) => {
        //         if (res.status === 200) {
        //             console.log(res)
        //             setNoteData(res.data)
        //         } else {
        //             alert('Error')
        //         }

        //     }).catch((err) => {
        //         console.log(err)
        //     })

        try {
            // const res: any = await getById('/notes', id);
            // const res: any = await fetch(`${hostname}/api/notes/${id}`);
            // const data = await res.json()
            // // console.log(data.error)
            // if (res.status === 200) {
            //     setNoteData(data)
            // } else {
            //     console.log(data.message)
            // }

            await getById('/notes', id)
                .then((res) => {
                    var response: any = res
                    setLoading(false)
                    setNoteData(response.data)
                    // if (response.data.statusCode === 200) {
                    // }
                }).catch((err) => {
                    console.log(err)
                    setError(true)
                    setLoading(false)
                    // setErrorMsg(err.response?.data.message)
                    // let data:IMsgBoxData={

                    // }
                    setModalData({
                        isShow: true,
                        classname: 'warning',
                        message: err.response?.data.message,
                        title: 'Fetch Error',
                        callbackFunction: null,
                        btnName: ''
                    })
                    // if (err.response.status === 400 || err.response.status === 404) {
                    //     setNotFoundPage(true)
                    // } else {
                    //     setNotFoundPage(false)
                    //     console.log(err.response.status)
                    //     console.log(err.response?.data.message)
                    // }
                })
            // .finally(() => {
            //     setNoteData({})
            //     setError(false)
            //     setLoading(false)
            // })
            // await axios.get(`${hostname}/api/notes/${id}`).then(res => {
            //     console.log(res)
            // }).catch(err => {
            //     console.log(err.response?.data.message)
            //     notFound()
            // })
        } catch (error: any) {
            // if (error.response) {
            //     console.error(error.response.data.error); // Set the error message from the API response
            // } else {
            //     console.error('Fetch Error:', error.message);
            // }
            console.log(error)
        }

    }
    console.log(modalData)
    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            {
                loading ? (
                    <Loading />
                ) : (
                    <SingleNote noteData={noteData} />
                )
            }
            {
                error && (
                    <MessageBox {...modalData} />
                )
            }
        </>
    )
}

export default page