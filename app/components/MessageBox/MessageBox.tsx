import React, { useEffect, useState } from 'react'
import { PiShieldWarningFill } from 'react-icons/pi'
import { BiMessageCheck } from 'react-icons/bi'
import { RiAlarmWarningFill } from 'react-icons/ri'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { IMsgBoxData } from '@/app/Interfaces/IMsgBoxData'
import { useRouter } from 'next/navigation'

const MessageBox = ({ isShow = false, classname = '', callbackFunction = null, message = '', title = '', btnName = '' }: IMsgBoxData) => {
    const [openModal, setOpenModal] = useState(isShow)
    const [bgColor, setBgColor] = useState('') //icon bg color
    const [btnColor, setBtnColor] = useState('') //button  color
    const router = useRouter()


    useEffect(() => {
        const color_bg = classname == 'error' ? 'bg-red-200' : classname == 'success' ? 'bg-green-200' : classname == 'warning' ? 'bg-orange-200' : classname == 'info' ? 'bg-blue-200' : ''
        const color_btn = classname == 'error' ? 'bg-red-600 ring-red-600 ' : classname == 'success' ? 'bg-green-600 ring-green-600 ' : classname == 'warning' ? 'bg-orange-600 ring-orange-600 ' : classname == 'info' ? 'bg-blue-600 ring-blue-600 ' : ''
        setBgColor(color_bg)
        setBtnColor(color_btn)
    }, [])
    const BtnClose = () => {
        router.push('/') //close btn redirect
        setOpenModal(false);
    }

    return (
        <>
            {
                openModal && (
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div
                            className="backdrop-blur-sm fixed inset-0 w-full h-full "
                        // onClick={() => setOpenModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="sm:flex">
                                    <div className={`flex items-center justify-center flex-none w-12 h-12 rounded-full ${bgColor}`}>
                                        {
                                            classname == 'error' ? (
                                                <PiShieldWarningFill className={`w-6 h-6 text-red-600`} />
                                            ) : classname == 'success' ? (
                                                <BiMessageCheck className={`w-6 h-6 text-green-600`} />
                                            ) : classname == 'warning' ? (
                                                <RiAlarmWarningFill className={`w-6 h-6 text-orange-600`} />
                                            ) : classname == 'info' ? (
                                                <BsFillInfoCircleFill className={`w-6 h-6 text-blue-600`} />
                                            ) : null
                                        }
                                    </div>
                                    <div className="mt-2 text-center sm:ml-4 sm:text-left w-full">
                                        <h4 className="text-lg font-medium text-gray-800">
                                            {title}
                                        </h4>
                                        <p className="mt-2 text-[15px] min-h-[50px] min-w-full leading-relaxed text-gray-500">
                                            {message}
                                        </p>
                                        {
                                            callbackFunction !== null ? (
                                                <div className="items-center gap-2 mt-3 sm:flex">
                                                    <button
                                                        className={`w-full mt-2 p-2.5 flex-1 text-white  rounded-md outline-none ring-offset-2 focus:ring-2 ${btnColor}`}
                                                        onClick={callbackFunction}
                                                    >
                                                        {btnName}
                                                    </button>
                                                    <button
                                                        className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                                        onClick={() => setOpenModal(false)}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="items-center justify-end gap-2 mt-3 sm:flex">
                                                    <button
                                                        className={`w-auto px-10 mt-2 p-2.5 flex-2 text-white rounded-md outline-none border ring-offset-2 focus:ring-2 ${btnColor}`}
                                                        onClick={BtnClose}
                                                    >
                                                        Close
                                                    </button>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default MessageBox