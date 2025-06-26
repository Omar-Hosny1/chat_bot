import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function Tab() {
  return (
    <Flex
      gap={"10px"}
      alignItems={"center"}
      bg={"#1B2433"}
      pe={"10px"}
      ps={"5px"}
    >
      <Image src={"/icons/agent-one.svg"} width={14} height={14} alt="icon" />
      <Text color={"whiteAlpha.500"} fontSize={"12px"}>
        Agent
      </Text>
      <Box w={"20px"} />
      <Box
        p={"5px"}
        transition={"300ms"}
        _hover={{
          bg: "whiteAlpha.300",
          rounded: "4px",
        }}
      >
        <Image src={"/icons/close.svg"} width={10} height={10} alt="icon" />
      </Box>
    </Flex>
  );
}

export default Tab;
