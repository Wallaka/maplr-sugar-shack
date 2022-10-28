import Link from "next/link";

type Props = {
  amount: number;
};

export default function CartService({ amount }: Props) {
  const renderLabel = () => {
    return `Panier (${amount})`;
  };

  return <Link href="/cart">{renderLabel()}</Link>;
}
