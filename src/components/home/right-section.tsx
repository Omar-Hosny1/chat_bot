import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Tab from "./tab";
import Image from "next/image";
import LeftHandSideIndicatorMessage from "./lhs-indicator-message";

function RightSection() {
  return (
    <Flex flexDir={"column"} h={"full"}>
      <Flex bg={"#0c0e12"}>
        <Tab />
        <Tab />
        <Tab />
        <Box
          p={"5px"}
          transition={"300ms"}
          _hover={{
            bg: "whiteAlpha.300",
            rounded: "4px",
          }}
        >
          <Image src={"/icons/add.svg"} width={13} height={13} alt="icon" />
        </Box>
      </Flex>

      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        flex={1}
        gap={"12px"}
        flexDir={"column"}
      >
        <Text fontWeight={"100"} color={"white"} fontSize={"15px"}>
          Your Preview Will Be Shown Here
        </Text>
        <Text color={"white"} fontSize={"12px"} fontWeight={"700"}>
          Start Building
        </Text>
      </Flex>
      <LeftHandSideIndicatorMessage />
    </Flex>
  );
}

export default RightSection;
