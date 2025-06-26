import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import MenuBar from "./menu-bar";
import ChatTextArea from "./chat-text-area";
import { useAgentStore } from "@/stores/agent-store";
import { FaRobot } from "react-icons/fa";
import ChatMessage from "./message";
import AgentTab from "./agent-tab";
import { motion } from "framer-motion";
import { useServiceStore } from "@/stores/service-store";
import ServiceTab from "./service-tab";
import Service from "./service";
const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const MotionText = motion(Text);

function LeftSection() {
  const selectedAgent = useAgentStore((state) => state.getSelectedAgent());
  const selectedChat = useAgentStore((state) => state.getSelectedChat());
  const addChat = useAgentStore((state) => state.addChat);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const openedServices = useServiceStore((state) => state.services).filter(
    (service) => service.opened
  );
  const selectedService = useServiceStore((state) => state.getActiveService());
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });

  const scrollToBottom = () => {
    if (!messagesEndRef) return;
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedChat]);

  if (!selectedAgent) {
    return (
      <MotionFlex
        h="100vh"
        align="center"
        justify="center"
        bg="rgb(22 29 41)"
        flexDir="column"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <MotionBox
          color="whiteAlpha.400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <FaRobot size="30px" />
        </MotionBox>

        <MotionText
          mt={4}
          fontSize="xl"
          color="whiteAlpha.800"
          fontWeight="bold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          No Agent Selected
        </MotionText>

        <MotionText
          mt={2}
          color="whiteAlpha.600"
          fontSize="md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          Please select an agent to start chatting in the left side corner.
        </MotionText>
      </MotionFlex>
    );
  }

  return (
    <Flex h={"full"} flexDir={"column"}>
      <Flex bg={"#0c0e12"} overflowX="auto" whiteSpace="nowrap">
        {selectedAgent?.chats.map((chat) => (
          <AgentTab
            endListRef={messagesEndRef}
            chatId={chat.id}
            agentId={selectedAgent.id}
            chatName={selectedAgent.name}
            iconSrc={selectedAgent.iconSrc}
            key={chat.id}
          />
        ))}
        {isSmallScreen
          ? openedServices.map((service) => (
              <ServiceTab {...service} key={service.id} />
            ))
          : null}
        {selectedAgent ? (
          <Box
            onClick={() => addChat(selectedAgent.id)}
            p={"5px"}
            transition={"300ms"}
            _hover={{
              bg: "whiteAlpha.300",
              rounded: "4px",
            }}
          >
            <Image src={"/icons/add.svg"} width={13} height={13} alt="icon" />
          </Box>
        ) : null}
      </Flex>
      <MenuBar />

      <Flex overflowY={"scroll"} flex={"1"} flexDir={"column"} p={"10px"}>
        {selectedChat ? (
          selectedChat.messages.length > 0 ? (
            selectedChat.messages.map((message) => (
              <ChatMessage
                played={!!message.played}
                key={message.id}
                iconSrc={message.iconSrs}
                message={message.content}
                id={message.id}
                agentId={selectedAgent.id}
                chatId={selectedChat.id}
                time={new Date(message.createdAt).toLocaleString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                type={message.type}
              />
            ))
          ) : (
            <Flex
              h="100vh"
              align="center"
              justify="center"
              bg={"rgb(22 29 41)"}
              flexDir="column"
            >
              <Box color={"whiteAlpha.400"}>
                <FaRobot size={"30px"} />
              </Box>
              <Text
                mt={4}
                fontSize="xl"
                color="whiteAlpha.800"
                fontWeight="bold"
              >
                No Messages Yet
              </Text>
              <Text mt={2} color="whiteAlpha.600" fontSize="md">
                Start the conversation by sending a message.
              </Text>
            </Flex>
          )
        ) : (
          <Flex
            h="100vh"
            align="center"
            justify="center"
            bg={"rgb(22 29 41)"}
            flexDir="column"
          >
            <Box color={"whiteAlpha.400"}>
              <FaRobot size={"30px"} />
            </Box>
            <Text mt={4} fontSize="xl" color="whiteAlpha.800" fontWeight="bold">
              No Chat Selected
            </Text>
            <Text mt={2} color="whiteAlpha.600" fontSize="md">
              Please select or create a chat to start messaging.
            </Text>
          </Flex>
        )}
        <Box padding={"10px"} ref={messagesEndRef} />
      </Flex>

      {selectedChat ? <ChatTextArea endListRef={messagesEndRef} /> : null}
      {isSmallScreen ? (
        <Flex
          overflowY={"scroll"}
          flex={"1"}
          flexDir={"column"}
          p={"10px"}
          border={"1px solid white"}
        >
          {openedServices.length === 0 || !selectedService ? (
            <MotionFlex
              alignItems="center"
              justifyContent="center"
              flex={1}
              gap="12px"
              flexDir="column"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <MotionText
                fontWeight="100"
                color="white"
                fontSize="15px"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                Your Preview Will Be Shown Here
              </MotionText>

              <MotionText
                color="white"
                fontSize="12px"
                fontWeight="700"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                Start Building
              </MotionText>
            </MotionFlex>
          ) : null}
          <Service />
        </Flex>
      ) : null}
    </Flex>
  );
}

export default LeftSection;
