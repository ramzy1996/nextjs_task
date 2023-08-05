"use client"
import React from 'react';
import { Document, Page } from 'react-pdf';

const page = () => {
    const pdfUrl = '/Ramzy_Ahmed.pdf#toolbar=0&view=FitH'

    return (
        <div className='h-[80vh] px-3'>
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