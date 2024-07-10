import "./CategoryPaginator.scss";

interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const CategoryPaginator = ({ currentPage, totalPages, onPageChange }: PaginatorProps): JSX.Element => {
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Añade un desplazamiento suave
    });
  };
  const handlePrevious = (): void => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      scrollToTop();
    }
  };

  const handleNext = (): void => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      scrollToTop();
    }
  };

  const handlePageClick = (page: number): void => {
    onPageChange(page);
    scrollToTop();
  };

  const renderPageNumbers = (): JSX.Element[] => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button key={i} className={`category-paginator__page ${currentPage === i ? "category-paginator__page--active" : ""}`} onClick={() => { handlePageClick(i) }}>
          {i}
        </button>
      );
      scrollToTop();
    }
    return pages;
  };

  return (
    <div className="category-paginator">
      <button className="category-paginator__prev" onClick={handlePrevious} disabled={currentPage === 1}>
        Anterior
      </button>
      {renderPageNumbers()}
      <button className="category-paginator__next" onClick={handleNext} disabled={currentPage === totalPages}>
        Siguiente
      </button>
    </div>
  );
};

export default CategoryPaginator;
