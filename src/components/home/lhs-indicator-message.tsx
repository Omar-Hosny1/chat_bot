import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function LeftHandSideIndicatorMessage() {
  return (
    <Box p={"10px"} w={"full"}>
      <Box bg={"#2B3243"} p={"10px"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Flex gap={"10px"}>
            <Image
              src={"/icons/loading.svg"}
              width={10}
              height={10}
              alt="icon"
            />
            <Text color={"white"} fontSize={"12px"}>
              The agent is ready to build.
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap={"20px"}>
            <Image src={"/icons/away.svg"} width={13} height={13} alt="icon" />
            <Image src={"/icons/pin.svg"} width={10} height={10} alt="icon" />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default LeftHandSideIndicatorMessage;
