import { useCallback } from "react";
import {
  CloseButton,
  Flex,
  Link,
  Select,
  SelectProps,
  useColorModeValue,
} from "@chakra-ui/react";
import type { ChangeEvent } from "react";

import PriceTag from "./PriceTag";
import CartProductMeta from "./CartProductMeta";
import type { ProductDetail } from "../../services/products/types";
import type { CartProductDetail } from "../../contexts/cart";

type CartItemProps = {
  product: CartProductDetail;
  handleChangeQuantity: (product: ProductDetail, quantity: number) => void;
  handleRemoveProduct: (id: string) => void;
  onChangeQuantity?: (quantity: number) => void;
};

const QuantitySelect = (props: SelectProps) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue("blue.500", "blue.200")}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  );
};

export default function CartItem({
  product,
  handleChangeQuantity,
  handleRemoveProduct,
}: CartItemProps) {
  const currency = "$";
  const { name, description, image, quantity, price } = product;

  const onChangeQuantity = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      handleChangeQuantity(product, +event.currentTarget.value);
    },
    [handleChangeQuantity, product]
  );

  const onRemoveProduct = useCallback(() => {
    handleRemoveProduct(product.id);
  }, [handleRemoveProduct, product.id]);

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta name={name} description={description} image={image} />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{ base: "none", md: "flex" }}
      >
        <QuantitySelect value={quantity} onChange={onChangeQuantity} />
        <PriceTag price={price} quantity={quantity} currency={currency} />
        <CloseButton
          aria-label={`Delete ${name} from cart`}
          onClick={onRemoveProduct}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <Link fontSize="sm" textDecor="underline" onClick={onRemoveProduct}>
          Supprimer
        </Link>
        <QuantitySelect value={quantity} onChange={onChangeQuantity} />
        <PriceTag price={price} quantity={quantity} currency={currency} />
      </Flex>
    </Flex>
  );
}
