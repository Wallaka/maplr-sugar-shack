import axios from "axios";

import { normalizeProduct, normalizeProducts } from "./utils";
import type { ProductDetailResponse, ProductDetail } from "./types";

interface ProductsApi {
  getAll: () => Promise<ProductDetail[]>;
  getOne: (id: string) => Promise<ProductDetail>;
}

/**
 * It groups all functions allowing fetching products related endpoints.
 */
export default function productsApi(): ProductsApi {
  return {
    async getAll() {
      const response = await axios.get<ProductDetailResponse[]>(
        "/maplr-sugar-bush/products"
      );
      return normalizeProducts(response.data);
    },
    async getOne(id: string) {
      const response = await axios.get<ProductDetailResponse>(
        `/maplr-sugar-bush/products/${id}`
      );
      return normalizeProduct(response.data);
    },
  };
}
