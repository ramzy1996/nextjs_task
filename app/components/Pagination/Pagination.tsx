import React from 'react'
import ReactPaginate from "react-paginate";
import { GrChapterNext, GrChapterPrevious } from "react-icons/gr";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";

const Pagination = ({
    pageCount,
    handlePageClick,
    currentPage,
}: any) => {
    return (
        <div className='inline-flex -space-x-px text-sm mt-8'>
            {/* <button
                onClick={() => handlePageClick({ selected: 0 })}
                disabled={currentPage === 1}
                className='flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
                Previous
            </button> */}
            <ReactPaginate
                previousLabel={<RxTrackPrevious className='' />}
                nextLabel={<RxTrackNext className='' />}
                breakLabel={"..."}
                breakClassName={"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"inline-flex -space-x-px text-sm"}
                activeClassName={""}
                activeLinkClassName={'flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'}
                pageClassName={""}
                pageLinkClassName={"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                previousClassName={"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"}
                nextClassName={"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"}
                previousLinkClassName={"flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                nextLinkClassName={"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                // breakLinkClassName={"page-link"}
                disabledClassName={"disabled"}
                forcePage={currentPage - 1}
            />
            {/* <button
                onClick={() => handlePageClick({ selected: currentPage })}
                disabled={currentPage === pageCount}
                className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
                Next
            </button> */}
        </div>
    )
}

export default Pagination