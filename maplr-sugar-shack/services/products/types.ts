type ProductType = "AMBER" | "CLEAR" | "DARK";

/**
 * Returned by the API
 */
export interface ProductDetailResponse {
  description: string;
  id: string;
  image: string;
  name: string;
  price: string;
  stock: string;
  type: ProductType;
}

export interface ProductDetail {
  description: string;
  id: string;
  image: string;
  name: string;
  price: number;
  stock: number;
  type: ProductType;
}
