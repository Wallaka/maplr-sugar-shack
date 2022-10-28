import { useContext } from "react";
import {
  Box,
  Flex,
  Heading,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import CartItem from "./CartItem";
import CartOrderSummary from "./CartOrderSummary";
import CartContext from "../../contexts/cart";

export default function CartPageComponent() {
  const { cart, removeProduct, changeProduct, order } = useContext(CartContext);

  if (cart.length === 0) {
    return <p>Vous n&apos;avez aucun produit dans votre panier.</p>;
  }

  return (
    <Box
      maxW={{ base: "3xl", lg: "7xl" }}
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        align={{ lg: "flex-start" }}
        spacing={{ base: "8", md: "16" }}
      >
        <Stack spacing={{ base: "8", md: "10" }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold">
            Panier ({cart.length} produits)
          </Heading>

          <Stack spacing="6">
            {cart.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                handleChangeQuantity={changeProduct}
                handleRemoveProduct={removeProduct}
              />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary cart={cart} handleOrder={order} />
        </Flex>
      </Stack>
    </Box>
  );
}
