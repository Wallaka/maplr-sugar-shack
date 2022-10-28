import {
  HStack,
  StackProps,
  Text,
  TextProps,
  useColorModeValue as mode,
} from "@chakra-ui/react";

interface PriceTagProps {
  currency: string;
  price: number;
  quantity: number;
  rootProps?: StackProps;
  priceProps?: TextProps;
}

interface PriceProps {
  children?: React.ReactNode;
  textProps?: TextProps;
}

const Price = ({ children, textProps }: PriceProps) => {
  const defaultColor = mode("gray.700", "gray.400");

  return (
    <Text
      as="span"
      fontWeight="medium"
      color={defaultColor}
      textDecoration="none"
      {...textProps}
    >
      {children}
    </Text>
  );
};

export default function PriceTag({
  price,
  currency,
  quantity,
  rootProps,
  priceProps,
}: PriceTagProps) {
  return (
    <HStack spacing="1" {...rootProps}>
      <Price textProps={priceProps}>{`${currency}${price * quantity}`}</Price>
    </HStack>
  );
}
