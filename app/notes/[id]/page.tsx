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

const page = () => {
    const [noteData, setNoteData] = useState<INotes>({})
    const [error, setError] = useState<boolean>(false)
    // const [errorMsg, setErrorMsg] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)
    const [modalData, setModalData] = useState<IMsgBoxData>({})

    const { id }: any = useParams()
    const getData = async () => {
        await getById('/notes', id)
            .then((res) => {
                var response: any = res
                setLoading(false)
                setNoteData(response.data)
            }).catch((err) => {
                console.log(err)
                setError(true)
                setLoading(false)
                setModalData({
                    isShow: true,
                    classname: 'error',
                    message: err.response?.data.message,
                    title: 'Fetch Error',
                    callbackFunction: null,
                    btnName: ''
                })
            })
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