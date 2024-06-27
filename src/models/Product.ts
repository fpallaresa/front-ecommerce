import { CategoryCreate } from "./Category";

export interface ProductCreate {
  name: string;
  parentCategory: string;
}

export interface Product {
  _id: string;
  title: Record<string, string>;
  description: Record<string, string>;
  price: Record<string, number>;
  sku: Record<string, { color: string; size: number; image: string; stock: number; }>;
  stock: number;
  category?: CategoryCreate;
  featured: boolean;
  imageLarge: string;
  imageSquare: string;
}

export interface CartItem {
  productId: string;
  productName: string;
  productPrice: number;
  stock: number;
  sku: string;
  quantity: number;
  image: string;
}
