import React from 'react';

const Pagination = ({changePageNum}: any) => {
  return (
    <>
    <div className="flex justify-center mt-10 space-x-2">
  <a
    href="#"
    onClick={changePageNum(1)}
    className="ring ring-primary bg-primary/20 px-2 py-1 sm:px-4 sm:py-2 ml-1 mt-2 text-gray-600 border rounded-lg focus:outline-none"
  >
    1
  </a>
  <a
  onClick={changePageNum(2)}
    href="#"
    className="hover:bg-gray-100 px-2 py-1 sm:px-4 sm:py-2 ml-1 mt-2 text-gray-600 border rounded-lg focus:outline-none"
  >
    2
  </a>
  <a
  onClick={changePageNum(3)}
    href="#"
    className="hover:bg-gray-100 px-2 py-1 sm:px-4 sm:py-2 ml-1 mt-2 text-gray-600 border rounded-lg focus:outline-none"
  >
    3
  </a>
  <a
    href="#"
    className="px-2 py-1 sm:px-4 sm:py-2 mt-2 text-gray-600 border rounded-lg hover:bg-gray-100 focus:outline-none"
  >
    <svg
      className="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </a>
</div>

    </>
  );
}

export default Pagination;
