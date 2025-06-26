import { Box, Flex, Text, Textarea } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Tab from "./tab";
import MenuBar from "./menu-bar";
import ChatTextArea from "./chat-text-area";
import BotMessage from "./bot-message";
import UserMessage from "./user-messagea";

function LeftSection() {
  return (
    <Flex h={"full"} flexDir={"column"}>
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
      <MenuBar />
      <Flex overflowY={"scroll"} flex={"1"} flexDir={"column"} p={"10px"}>
        <UserMessage />
        <BotMessage />
        <UserMessage />
        <BotMessage />
        <UserMessage />
        <BotMessage />
        <UserMessage />
        <BotMessage />
        <UserMessage />
        <BotMessage />
      </Flex>
      <ChatTextArea />
    </Flex>
  );
}

export default LeftSection;
