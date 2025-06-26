import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function MenuBar() {
  return (
    <Flex
      height={"20px"}
      mt={"10px"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <HStack gap={"10px"}>
        <Image src={"/icons/burger.svg"} width={13} height={13} alt="icon" />
        <HStack gap={"10px"}>
          <Image src={"/icons/add.svg"} width={13} height={13} alt="icon" />
          <Text color={"whiteAlpha.500"} fontSize={"12px"}>
            New Chat
          </Text>
        </HStack>
      </HStack>
      <HStack
        px={"10px"}
        gap={"30px"}
        transition={"300ms"}
        cursor={"pointer"}
        _hover={{
          bg: "whiteAlpha.300",
          rounded: "4px",
        }}
      >
        <Text color={"whiteAlpha.500"} fontSize={"12px"}>
          demo.app
        </Text>
        <Image
          src={"/icons/arrow-down.svg"}
          width={10}
          height={10}
          alt="icon"
        />
      </HStack>
      <Image src={"/icons/boost.svg"} width={13} height={13} alt="icon" />
    </Flex>
  );
}

export default MenuBar;
