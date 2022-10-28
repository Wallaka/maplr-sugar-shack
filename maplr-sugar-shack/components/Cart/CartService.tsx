import Link from "next/link";
import { Icon } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";

type Props = {
  amount: number;
};

export default function CartService({ amount }: Props) {
  const renderLabel = () => {
    return `Panier (${amount})`;
  };

  return <Link href="/cart">{renderLabel()}</Link>;
}
