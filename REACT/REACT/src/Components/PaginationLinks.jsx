import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

// import axiosClient from '../axios';




export default function PaginationLinks({meta, onPageClick}) {

  function onClick(ev, link){
    ev.preventDefault();
    if(!link.url){
      return;
    }
    onPageClick(link)
  }

  return (
    <>
    <br />
    <div className="flex items-center justify-between border-t border-gray-200  px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          onClick={ev => onClick(ev, meta.links[0])}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          onClick={ev => onClick(ev, meta.links[meta.links.length - 1])}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-white">
            Showing <span className="font-medium text-white">{meta.from}</span> to <span className="font-medium text-white">{meta.to}</span> of
             <span className="font-medium text-white"> {meta.total}</span> results
          </p>
        </div>
        <div>
          <nav className="isolate d-flex flex-row -space-x-px rounded-md shadow-sm   bg-white " aria-label="Pagination">
           
            {meta.links && meta.links.map((link, ind) => (
              <a
              href="#"
              onClick={ev => onClick(ev, link)}
              aria-current="page"
              className={
                "relative z-10 inline-flex items-center border bg-indigo-50 px-4 py-2 text-sm font-medium focus:z-20 "
                +(ind === 0 ? 'rounded-l-md after:' : '')
                +(ind === meta.links.length -1 ? 'rounded-r-md after:' : '')
                +(link.active ? 'border-indigo-500 bg-indigo-500 text-white'  : '')
             }
             dangerouslySetInnerHTML={{__html: link.label}}
              >
            </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
    </>
  )
}