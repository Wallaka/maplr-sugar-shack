import type { ProductDetailResponse } from "./types";

/**
 * Return a normalized version of the product from the API
 */
export function normalizeProduct(product: ProductDetailResponse) {
  return {
    ...product,
    price: parseFloat(product.price),
    stock: parseInt(product.stock),
  };
}

/**
 * Return a normalized version of the products from the API
 */
export function normalizeProducts(products: ProductDetailResponse[]) {
  return products.map((product) => normalizeProduct(product));
}
