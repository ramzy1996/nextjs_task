import { ISingleNote } from '@/app/Interfaces/ISingleNote'
import { formatDate } from '@/app/utility/FormatDate'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const SingleNote = (props: any) => {
    const router = useRouter()
    const { noteData }: ISingleNote = props
    // console.log(noteData)
    return (
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                <article className="mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    <button onClick={() => router.back()} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none  focus:ring-blue-800 mb-5">
                        <BsArrowLeft className="text-lg me-3" />
                        Go back
                    </button>
                    <header className="mb-4 lg:mb-6 not-format">
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                            {noteData.title}
                        </h1>
                    </header>
                    <p className="lead text-[20px] text-justify">
                        {noteData.content}
                    </p>
                    <p className="w-full text-sm flex justify-end">
                        Created At: &nbsp; {formatDate(noteData.createdAt)}
                    </p>
                    <p className="w-full text-sm flex justify-end">
                        Last Updated At: &nbsp; {formatDate(noteData.updatedAt)}
                    </p>
                    <br />

                    {
                        Object.keys(noteData).length !== 0 ? (
                            <figure>
                                <img src="/NoteImg.jpg" />
                            </figure>
                        ) : (
                            <figure>
                                <img src="/oops.png" />
                            </figure>
                        )
                    }
                </article>
            </div>
        </main>
    )
}

export default SingleNote