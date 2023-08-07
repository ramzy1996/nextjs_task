const DisplayPDF = ({ pdfUrl }: any) => {
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

export default DisplayPDF