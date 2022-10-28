import { Box } from "@chakra-ui/react";

import ProductCard from "./ProductCard";
import ProductGrid from "./ProductGrid";
import type { ProductDetail } from "../../services/products/types";

type Props = {
  products: ProductDetail[];
};

export default function ProductList({ products }: Props) {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Box>
  );
}
