import { useState } from "react";
import Pagination from "../Pagination";
import FoodCard from "./FoodCard";

const FoodTab = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = items.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        {currentItems.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};

export default FoodTab;
