import axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

import MainNav from "../components/Nav/MainNav";
import CartProvider from "../components/Cart/CartProvider";

import "../styles/globals.css";

// Create a react-query client
const queryClient = new QueryClient();

// Define axios apiBaseUrl according to our env variable
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* chakra ui provider */}
      <ChakraProvider>
        {/* cart provider which handle all the add/remove product logic */}
        <CartProvider>
          {/* MainNavigation top of the page */}
          <MainNav />
          <Component {...pageProps} />
        </CartProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
