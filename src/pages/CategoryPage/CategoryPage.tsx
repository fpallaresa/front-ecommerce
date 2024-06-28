import { useEffect, useState } from "react";
import "../CategoryPage/CategoryPage.scss";
import { useParams } from "react-router-dom";
import CategoryPageGrid from "./CategoryPageGrid/CategoryPageGrid";
import BreadcrumbsCategory from "./BreadcrumbsCategory/BreadcrumbsCategory";
import CategoryPaginator from "./CategoryPaginator/CategoryPaginator";
import { Product } from "../../models/Product";

const CategoryPage = (): JSX.Element => {
  const { categoryName } = useParams<{ categoryName: string; }>();
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const API_URL_CATEGORY = `${process.env.REACT_APP_API_URL as string}/categorie`;
  const [categoryData, setCategoryData] = useState<any>(null);
  const [categoryProductData, setCategoryProductData] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(12);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalProducts, setTotalProducts] = useState<string | null>(null);

  useEffect(() => {
    fetchCategoryId();
  }, [categoryName, categoryId]);

  useEffect(() => {
    if (categoryId) {
      fetchCategoryProduct(categoryId, currentPage, itemsPerPage);
    }
  }, [categoryName, categoryId, currentPage]);

  const fetchCategoryId = (): void => {
    fetch(API_URL_CATEGORY, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        if (response.status !== 200) {
          alert("Ha ocurrido un error en la petición a la API");
          return;
        }
        return await response.json();
      })
      .then((data) => {
        const normalizedCategoryName = categoryName?.toLowerCase();
        const categoryFinded = data.find((categoria: { name: { es: string | undefined; }; }) => categoria.name.es?.toLowerCase() === normalizedCategoryName);

        if (categoryFinded) {
          setCategoryData(categoryFinded);
          setCategoryId(categoryFinded._id);
        } else {
          console.error(`No se encontró la categoría con nombre ${categoryName as string}`);
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Ha ocurrido un error en la petición");
      });
  };

  const fetchCategoryProduct = (id: string, page: number, limit: number): void => {
    const API_URL_PRODUCTS = `${process.env.REACT_APP_API_URL as string}/product/category/${id}?limit=${limit}&page=${page}`;

    fetch(API_URL_PRODUCTS, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch category data");
        }
        return await response.json();
      })
      .then((data) => {
        setCategoryProductData(data.data);
        setTotalPages(data.totalPages);
        setTotalProducts(data.totalItems);
      })
      .catch((error) => {
        console.error("Error al obtener datos de la categoría:", error);
        alert("Ha ocurrido un error en la petición");
      });
  };

  return (
    <div className="category-page">
      <BreadcrumbsCategory categoryData={categoryData}></BreadcrumbsCategory>
      <CategoryPageGrid categoryProductData={categoryProductData} totalProducts={totalProducts}></CategoryPageGrid>
      <CategoryPaginator currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}></CategoryPaginator>
    </div>
  );
};

export default CategoryPage;
