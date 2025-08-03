const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [...Array(totalPages).keys()].map((i) => i + 1);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="mr-4 disabled:opacity-50"
      >
        {/* Prev arrow */}
        <svg width="9" height="16" viewBox="0 0 12 18">
          <path d="M11 1L2 9.24242L11 17" stroke="#111820" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      <div className="flex gap-2 text-sm md:text-base">
        {pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => onPageChange(num)}
            className={`w-9 h-9 md:w-12 md:h-12 rounded-md ${
              num === currentPage
                ? "bg-indigo-500 text-white"
                : "bg-white border border-gray-300 hover:bg-gray-100"
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="ml-4 disabled:opacity-50"
      >
        {/* Next arrow */}
        <svg width="9" height="16" viewBox="0 0 12 18">
          <path d="M1 1L10 9.24242L1 17" stroke="#111820" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
