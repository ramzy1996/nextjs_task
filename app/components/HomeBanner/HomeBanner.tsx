"use-client"
import Link from 'next/link'
import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { GiShakingHands } from 'react-icons/gi'

const HomeBanner = () => {
    return (
        <section
            className="flex flex-col sm:justify-between items-center sm:flex-row md:mt-2 px-5 "
        >
            <div className="w-full md:w-1/3 text-left">
                <h1
                    className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-primary-light uppercase"
                >
                    <p className='flex max-sm:justify-center text-center sm:text-left leading-normal'> Hello &nbsp; <GiShakingHands className="text-yellow-500" />, </p>
                    I'm  Ramzy Ahmed
                </h1>
                <p
                    className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-200"
                >
                    A Full-Stack Developer
                </p>
                <div
                    className="flex justify-center sm:block"
                >
                    <Link
                        href="/about"
                        className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white"
                        aria-label="View Resume"
                    >
                        <AiOutlineEye className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 text-gray-900"></AiOutlineEye>
                        <span className="text-sm sm:text-lg text-gray-900">
                            View Resume
                        </span>
                    </Link>
                </div>
            </div>
            <div
                className="w-full sm:w-2/3 text-right float-right mt-4 sm:mt-0"
            >
                <img
                    src="/developer.svg"
                    alt="Developer"
                />
            </div>
        </section>
    )
}

export default HomeBanner