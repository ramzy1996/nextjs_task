import { ISingleNote } from '@/app/Interfaces/ISingleNote'
import React from 'react'

const SingleNote = (props: any) => {

    const { noteData }: ISingleNote = props
    console.log(noteData)
    return (
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    <header className="mb-4 lg:mb-6 not-format">
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                            {noteData.title}
                        </h1>
                    </header>
                    <p className="lead">
                        {noteData.content}
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