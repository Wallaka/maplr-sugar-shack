import axios from "axios";

import type { Order } from "./types";

interface OrderApi {
  order: (cart: Order) => Promise<{}>;
}

/**
 * It groups all functions allowing fetching cart related endpoints.
 */
export default function orderApi(): OrderApi {
  return {
    async order(cart: Order) {
      const response = await axios.post<{}>("/maplr-sugar-bush/order", cart);
      return response.data;
    },
  };
}
