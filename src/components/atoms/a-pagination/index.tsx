import React from "react";
import UisAngleLeft from "~icons/uis/angle-left.jsx";
import UisAngleRight from "~icons/uis/angle-right.jsx";
import styles from "./styles.module.scss";

interface Props {
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    if (totalPages && currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage === 1}
        onClick={() => {
          const page = currentPage > 1 ? currentPage - 1 : currentPage;
          setCurrentPage(page);
          onPageChange?.(page - 1);
        }}
      >
        <UisAngleLeft />
      </button>
      <div className={styles.pages}>
        {Array.from({ length: totalPages ?? 1 }).map((_, index) => (
          <button
            onClick={() => {
              setCurrentPage(index + 1);
              onPageChange?.(index);
            }}
            key={Math.random() * index}
            data-active={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        disabled={totalPages ? currentPage === totalPages : false}
        onClick={() => {
          const page =
            totalPages && currentPage < totalPages
              ? currentPage + 1
              : currentPage;
          setCurrentPage(page);
          onPageChange?.(page - 1);
        }}
      >
        <UisAngleRight />
      </button>
    </div>
  );
};

export default Pagination;
