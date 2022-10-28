import { Container } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import productApi from "../services/products/service";

import ProductList from "../components/Product/ProductList";

/**
 * Listing all products
 */
export default function HomePage() {
  const fetchAllProduct = () => productApi().getAll();
  const { isLoading, error, data } = useQuery(
    ["product-list"],
    fetchAllProduct,
    // We don't want any caching for this demo, and we don't to refetch when swapping our window/tab focus
    { cacheTime: 3, refetchOnWindowFocus: false }
  );

  if (isLoading || !data) return "Chargement...";

  if (error) return "Une erreur est survenue !";

  return (
    <Container maxW={"7xl"}>
      <ProductList products={data} />
    </Container>
  );
}
