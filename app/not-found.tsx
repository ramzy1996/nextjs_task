import dynamic from "next/dynamic"

const NotFoundPage = dynamic(() => import('@/app/components/NotFound/NotFound'))
export default function NotFound() {

    return (
        <NotFoundPage />
    )
}