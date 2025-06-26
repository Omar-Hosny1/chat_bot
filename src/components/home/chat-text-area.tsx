import { Box, Flex, Text, Textarea } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function ChatTextArea() {
  return (
    <Box>
      <Flex
        alignItems={"center"}
        ms={"20px"}
        bg={"#3A2989"}
        w={"2/3"}
        p={"5px"}
        roundedTopLeft={"3px"}
        roundedTopRight={"3px"}
        justifyContent={"space-between"}
      >
        <Flex gap={{ base: "5px", lg: "10px" }} alignItems={"center"}>
          <Image
            src={"/icons/agent-one.svg"}
            width={20}
            height={20}
            alt="icon"
          />
          <Text color={"white"} fontSize={{ base: "11px", lg: "unset" }}>
            The AI agent is devising a plan....
          </Text>
        </Flex>
        <Flex gap={"10px"} alignItems={"center"}>
          <Image src={"/icons/resume.svg"} width={13} height={13} alt="icon" />
          <Text
            pos={"relative"}
            top={"2px"}
            color={"#9E94C6"}
            fontSize={"12px"}
          >
            Pause
          </Text>
        </Flex>
      </Flex>

      <Box
        w={{ base: "full", lg: "full" }}
        // bg="rgb(44 50 67)"
        px={3}
        py={2}
        borderRadius="md"
        boxShadow="sm"
      >
        <Textarea
          minH="38px"
          maxH="51px"
          resize="none"
          bg="transparent"
          border={0}
          outline={0}
          fontSize="md"
          color="white"
          placeholder="Message Agent"
          _focus={{
            outline: 0,
            boxShadow: "none",
          }}
          _placeholder={{
            color: "gray.400",
          }}
          overflowY="auto"
        />
        <Flex alignItems={"center"} justifyContent={"space-between"} mt={"4px"}>
          <Image src={"/icons/attach.svg"} width={13} height={13} alt="icon" />
          <Flex alignItems={"center"} gap={"15px"}>
            <Text color={"whiteAlpha.500"} fontSize={"12px"}>
              Have a Feedback?
            </Text>
            <Image src={"/icons/send.svg"} width={23} height={23} alt="icon" />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default ChatTextArea;
