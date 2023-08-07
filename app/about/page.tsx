import dynamic from "next/dynamic"
const DisplayPDF = dynamic(() => import('../components/DisplayPDF/DisplayPDF'))

const page = () => {
    const pdfUrl = '/Ramzy_Ahmed.pdf#view=FitH&page=1&toolbar=0'

    return (
        <DisplayPDF pdfUrl={pdfUrl} />
    )
}

export default page