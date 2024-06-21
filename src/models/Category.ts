export interface CategoryCreate {
  name: string;
  parentCategory: string;
}

export interface Category {
  _id: string;
  name: {
    es: string;
    en: string;
  };
  parentCategory: ParentCategory | null;
}

interface ParentCategory {
  _id: string;
  name: {
    es: string;
    en: string;
  };
  parentCategory: string | null;
}
