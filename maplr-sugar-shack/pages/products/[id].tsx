import { useRouter } from "next/router";
import { Container } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import productApi from "../../services/products/service";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

/**
 * Product detail page
 */
export default function ProductDetailPage() {
  const { query } = useRouter();

  const fetchProductDetails = () => productApi().getOne(query.id as string);
  const { isLoading, error, data, isFetching } = useQuery(
    // We need to trigger the request when we have all the info that we need
    ["product-detail", query.id],
    fetchProductDetails,
    // We don't want any caching for this demo, and we don't to refetch when swapping our window/tab focus
    { cacheTime: 3, refetchOnWindowFocus: false }
  );

  if (isLoading || !data) return "Chargement...";

  if (error) return "Une erreur est survenue !";

  return (
    <Container maxW={"7xl"}>
      <ProductDetail product={data} />
    </Container>
  );
}
