import "./CategoryPaginator.scss";

const CategoryPaginator = (): JSX.Element => {
  return (
    <div className="category-paginator">
      <button className="category-paginator__prev">Anterior</button>
      <button className="category-paginator__page category-paginator__page--active">1</button>
      <button className="category-paginator__page"> 2</button>
      <button className="category-paginator__page"> 3</button>
      <button className="category-paginator__next">Siguiente</button>
    </div>
  );
};

export default CategoryPaginator;
