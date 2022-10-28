import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

import type { CartProductDetail } from "../../contexts/cart";

type CartOrderSummaryProps = {
  cart: CartProductDetail[];
  handleOrder: () => void;
};

/**
 * Calculate the total price from all the current cart's item
 */
function calculateSummary(cart: CartProductDetail[]) {
  return cart
    .map((product) => product.price * product.quantity)
    .reduce((partialSum, a) => partialSum + a, 0);
}

export default function CartOrderSummary({
  cart,
  handleOrder,
}: CartOrderSummaryProps) {
  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Résumé de la commande</Heading>

      <Stack spacing="6">
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {`$${calculateSummary(cart)}`}
          </Text>
        </Flex>
      </Stack>
      <Button
        colorScheme="blue"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
        onClick={handleOrder}
      >
        Commander
      </Button>
    </Stack>
  );
}
