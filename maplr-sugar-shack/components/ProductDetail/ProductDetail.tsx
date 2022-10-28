import { useCallback, useContext } from "react";
import Link from "next/link";
import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Button,
  Icon,
} from "@chakra-ui/react";

import CartContext from "../../contexts/cart";
import { FiShoppingCart } from "react-icons/fi";
import type { ProductDetail } from "../../services/products/types";

type Props = {
  product: ProductDetail;
};

export default function ProductAddToCart({ product }: Props) {
  const { addProduct } = useContext(CartContext);
  const handleAddToCart = useCallback(() => {
    addProduct(product, 1);
  }, [addProduct, product]);

  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image
          src={`data:image/png;base64,${product.image}`}
          alt={`Picture of ${product.name}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
            >
              <Link href={`/products/${product.id}`}>{product.name}</Link>
            </Box>
            <Button variant="ghost" onClick={handleAddToCart}>
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
            </Button>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                $
              </Box>
              {product.price}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
