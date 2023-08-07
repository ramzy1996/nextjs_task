'use client'

import { useRouter } from 'next/navigation'

const NotFound = () => {
    const router = useRouter()
    return (
        <section className="h-[80vh] mx-5">
            <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                <div className="wf-ull lg:w-1/2">
                    <p className="text-sm font-medium text-blue-400">404 error</p>
                    <h1 className="mt-3 text-2xl font-semibold text-white md:text-3xl">Page not found</h1>
                    <p className="mt-4 text-gray-400">Sorry, the page you are looking for doesn't exist.Here are some helpful links:</p>
                    <div className="flex items-center mt-6 gap-x-3">
                        <button onClick={() => router.push('/')} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm transition-colors duration-200 border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-800 bg-gray-900 text-gray-200 border-gray-700">
                            <img src="/icons/back.svg" alt="" width={30} />
                            <span>Go back</span>
                        </button>
                    </div>
                </div>
                <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                    <img src="/icons/illustration.svg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default NotFound