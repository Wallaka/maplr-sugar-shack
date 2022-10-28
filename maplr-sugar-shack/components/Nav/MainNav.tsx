import { useContext } from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaCanadianMapleLeaf } from "react-icons/fa";

import CartServiceLink from "../Cart/CartServiceLink";
import CartContext from "../../contexts/cart";

export default function MainNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cart } = useContext(CartContext);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={4} alignItems={"center"}>
            <Icon as={FaCanadianMapleLeaf} color="red.500" />
            <Box fontWeight="semibold">Maplr Sugar Shack</Box>
            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}
            >
              <Link href="/">Catalogue</Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <CartServiceLink amount={cart.length} />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link href="/">Catalogue</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
