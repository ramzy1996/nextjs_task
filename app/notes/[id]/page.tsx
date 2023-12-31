'use client'
import { getById } from '@/app/utility/apiClient'
import { INotes } from '@/app/Interfaces/INotes'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Loading from '@/app/components/Loading/Loading'
import MessageBox from '@/app/components/MessageBox/MessageBox'
import { IMsgBoxData } from '@/app/Interfaces/IMsgBoxData'
import { useRouter } from 'next/navigation'

const SingleNote = dynamic(() => import('@/app/components/SingleNote/SingleNote'))

const page = () => {
    const router = useRouter()
    const [noteData, setNoteData] = useState<INotes>({})
    const [loading, setLoading] = useState<boolean>(true)
    //modal data
    const [openMessageBox, setOpenMessageBox] = useState<boolean>(false)
    const [modalData, setModalData] = useState<IMsgBoxData>({})

    const { id }: any = useParams()
    const getData = async () => {
        await getById('/notes', id)
            .then((res) => {
                var response: any = res
                setLoading(false)
                setNoteData(response.data)
            }).catch((err) => {
                // console.log(err)
                setLoading(false)
                setOpenMessageBox(true)
                setModalData({
                    classname: 'error',
                    message: err.response?.data.message,
                    title: 'Fetch Error',
                    isConfirmation: false,
                    closeCallbackFunction: () => { setOpenMessageBox(false); router.push('/') },
                    btnName: ''
                })
            })
    }

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

            {openMessageBox && <MessageBox {...modalData} />}
        </>
    )
}

export default page