import React from 'react';

const Pagination = ({ page, setPage, totalPages }) => (
  <div className="flex justify-center mt-6 gap-2 flex-wrap px-2">
  {[...Array(totalPages)].map((_, i) => (
    <button
      key={i}
      onClick={() => setPage(i + 1)}
      className={`px-3 py-1 rounded text-sm sm:text-base  cursor-pointer ${
        page === i + 1 ? 'bg-green-500 text-white' : 'bg-gray-200'
      }`}
    >
      Page {i + 1}
    </button>
  ))}
</div>

);


export default Pagination;