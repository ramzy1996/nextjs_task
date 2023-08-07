import React from 'react'
import { CgCloseR } from 'react-icons/cg'

const Modal = ({ handleSubmit, setModalOpen, setInputValues, inputValues }: any) => {

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setInputValues((prev: any) => ({ ...prev, [name]: value }))

    }
    return (
        <>
            <div
                className="backdrop-blur-sm justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-5"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl" >
                    <form className="border-0 rounded-lg shadow-lg relative flex flex-col w-[80vw] lg:w-[60vw]  outline-none focus:outline-none bg-cyan-900"
                        onSubmit={handleSubmit}
                    //  style={{ backgroundColor: '#0d2438' }}
                    >
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t text-white">
                            <h3 className="text-3xl font-semibold">
                                Add Your Note
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setModalOpen(false)}
                            >
                                <CgCloseR className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none" />
                            </button>
                        </div>
                        <div className="relative p-6 flex-auto">
                            <div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={inputValues.title || ''} onChange={handleChange} />
                                    <label htmlFor="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <textarea name="content" id="content" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={inputValues.content || ''} onChange={handleChange} />
                                    <label htmlFor="content" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Content</label>
                                </div>
                            </div>

                        </div>
                        <div className="flex items-center justify-end p-6 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setModalOpen(false)}
                            >
                                Close
                            </button>
                            <button
                                className="bg-blue-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Modal