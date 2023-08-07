import { BsArrowRight } from 'react-icons/bs'
import { PiTrashBold } from 'react-icons/pi'
import { FiEdit } from 'react-icons/fi'
import { INoteCard } from '@/app/Interfaces/INoteCard'
import DisplayLimitedText from './DisplayLimitedText'
import Link from 'next/link'
const NoteCard = ({ note }: INoteCard) => {

    const formatDate = (dateString: string | undefined): string => {
        if (!dateString) {
            return "Invalid Date";
        }
        const inputDate = new Date(dateString);
        const options: any = { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit' };
        return inputDate.toLocaleDateString('en-US', options);
    }
    return (
        <div className="lg:w-[30vw] md:w-[40vw] sm:w-[60vw] max-sm:w-full min-h-[35vh] flex flex-col relative p-6 hover:bg-gray-700 border rounded-lg shadow bg-gray-800 border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                {note.title}
            </h5>
            <p className="mb-3 font-normal text-gray-400">
                <DisplayLimitedText text={note.content} maxlen={100} />
            </p>
            <p className="mb-3 font-mono text-[13px] text-gray-200 flex justify-end">
                {formatDate(note.createdAt)}
            </p>
            <div className='flex mb-5 absolute bottom-0'>
                <Link href={`notes/${note.id}` || '/'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none  focus:ring-blue-800">
                    Read more
                    <BsArrowRight className="text-lg ms-3" />
                </Link>
                <button className="ms-3 inline-flex items-center px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
                    <PiTrashBold className="text-2xl" />
                </button>
                <button className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md ms-3">
                    <FiEdit className="text-2xl" />
                </button>
            </div>
        </div>
    )
}

export default NoteCard