interface ProductOrder {
  productId: string;
  qty: string;
}

export type Order = ProductOrder[];
