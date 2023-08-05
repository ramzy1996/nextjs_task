"use client"
import React from 'react';

const page = () => {
    const pdfUrl = '/Ramzy_Ahmed.pdf#view=FitH&page=1&toolbar=0'

    return (
        <div className='h-[80vh] px-5'>
            <iframe
                className='object-fill'
                src={pdfUrl}
                width="100%"
                height="100%"
                frameBorder="0"
            />
        </div>
    )
}

export default page