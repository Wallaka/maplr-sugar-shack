import { useState, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import type { ReactNode } from "react";

import CartContext from "../../contexts/cart";
import orderApi from "../../services/order/service";
import type { CartProductDetail } from "../../contexts/cart";
import type { ProductDetail } from "../../services/products/types";
import type { Order } from "../../services/order/types";

type Props = {
  children: ReactNode;
};

export default function CartProvider({ children }: Props) {
  const toast = useToast();
  const [cart, setCart] = useState<CartProductDetail[]>([]);
  const fetchOrder = (order: Order) => orderApi().order(order);
  const { mutate: mutateOrder } = useMutation(fetchOrder, {
    onSuccess: () => {
      return toast({
        title: "Commande réussie",
        description: "Votre commande a bien été pris en compte !",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
    onError: () => {
      return toast({
        title: "Commande échouée",
        description: "Votre commande a échouée !",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  const handleOrder = useCallback(() => {
    const order = cart.map((product) => ({
      productId: product.id,
      qty: product.quantity.toString(),
    }));
    mutateOrder(order);
  }, [cart, mutateOrder]);

  const addProduct = useCallback(
    (product: ProductDetail, quantity: number) => {
      const alreadyInCart = cart.some((_product) => _product.id === product.id);
      if (!alreadyInCart) {
        setCart(cart.concat({ ...product, quantity: quantity }));
      }
    },
    [cart]
  );

  const changeProduct = useCallback(
    (product: ProductDetail, quantity: number) => {
      setCart(
        cart.map((cartProduct) => {
          if (product.id === cartProduct.id) {
            return { ...cartProduct, quantity };
          }
          return cartProduct;
        })
      );
    },
    [cart]
  );

  const removeProduct = useCallback(
    (id: string) => {
      setCart(cart.filter((product) => product.id !== id));
    },
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        changeProduct,
        order: handleOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
