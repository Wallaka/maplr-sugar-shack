import { useCallback, useContext } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Image,
  Skeleton,
  Stack,
  StackProps,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import PriceTag from "../Cart/PriceTag";
import CartContext from "../../contexts/cart";
import type { ProductDetail } from "../../services/products/types";

interface Props {
  product: ProductDetail;
  rootProps?: StackProps;
}

export default function ProductCard({ product, rootProps }: Props) {
  const { name, image, price } = product;
  const { addProduct } = useContext(CartContext);
  const handleAddToCart = useCallback(() => {
    addProduct(product, 1);
  }, [addProduct, product]);

  return (
    <Stack spacing={useBreakpointValue({ base: "4", md: "5" })} {...rootProps}>
      <Box position="relative">
        <Image
          src={`data:image/png;base64,${image}`}
          alt={name}
          draggable="false"
          fallback={<Skeleton />}
          borderRadius={useBreakpointValue({ base: "md", md: "xl" })}
        />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Link href={`/products/${product.id}`}>
            <a>
              <Text
                fontWeight="medium"
                color={useColorModeValue("gray.700", "gray.400")}
              >
                {name}
              </Text>
            </a>
          </Link>
          <PriceTag price={price} currency="$" quantity={1} />
        </Stack>
      </Stack>
      <Stack align="center">
        <Button colorScheme="blue" width="full" onClick={handleAddToCart}>
          Ajouter au panier
        </Button>
      </Stack>
    </Stack>
  );
}
