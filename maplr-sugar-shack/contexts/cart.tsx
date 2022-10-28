import { createContext } from "react";

import type { ProductDetail } from "../services/products/types";

export type CartProductDetail = ProductDetail & {
  quantity: number;
};

type Cart = {
  addProduct: (product: ProductDetail, quantity: number) => void;
  cart: CartProductDetail[];
  changeProduct: (product: ProductDetail, quantity: number) => void;
  order: () => void;
  removeProduct: (id: string) => void;
};

const initialState: Cart = {
  addProduct: () => {},
  cart: [],
  changeProduct: () => {},
  order: () => {},
  removeProduct: () => {},
};

const CartContext = createContext<Cart>(initialState);

export default CartContext;
