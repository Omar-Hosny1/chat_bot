import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function BotMessage() {
  return (
    <Flex alignItems={"center"} justifyContent={"start"} w={"full"}>
      <Flex w={"full"} gap={"10px"} alignItems={"start"} p={"20px"}>
        <Image src={"/icons/agent-one.svg"} width={15} height={15} alt="icon" />
        <Box
          maxW={{ base: "300px", lg: "500px" }}
          w={"fit-content"}
          rounded={"10px"}
          pos={"relative"}
          bottom={"5px"}
        >
          <Text color={"white"} fontSize={{ base: "12px", lg: "unset" }}>
            This is a demo response.
          </Text>
          <Text fontSize={"10px"} mt={"4px"} color={"whiteAlpha.500"}>
            12:12 AM
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default BotMessage;
