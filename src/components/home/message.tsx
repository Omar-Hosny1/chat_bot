import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { useAgentStore } from "@/stores/agent-store";

interface ChatMessageProps {
  id: string;
  chatId: string;
  agentId: string;
  type: "user" | "bot";
  message: string;
  time: string;
  iconSrc: string;
  ref?: React.Ref<HTMLDivElement> | undefined;
  played: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  type,
  message,
  time,
  iconSrc,
  ref,
  agentId,
  chatId,
  id,
  played,
}) => {
  const isUser = type === "user";
  const { setMessagePlayed } = useAgentStore((state) => state);

  const [text] = useTypewriter({
    words: [message],
    loop: 1,
    onLoopDone() {
      if (!played) {
        setMessagePlayed({ agentId, chatId, messageId: id, value: true });
      }
    },
  });

  return (
    <Flex
      ref={ref}
      alignItems="center"
      justifyContent={isUser ? "end" : "start"}
      w="full"
      p="20px"
    >
      <Flex
        w="full"
        gap="10px"
        alignItems="start"
        direction={isUser ? "row-reverse" : "row"}
      >
        <Image
          src={iconSrc}
          width={isUser ? 30 : 15}
          height={isUser ? 30 : 15}
          alt="icon"
        />
        <Box
          maxW={{ base: "300px", lg: "500px" }}
          w="fit-content"
          padding={isUser ? "10px" : "0"}
          bg={isUser ? "#103E76" : "transparent"}
          rounded="10px"
          pos={isUser ? "static" : "relative"}
          bottom={isUser ? "0" : "5px"}
        >
          {isUser ? (
            <Text
              color="white"
              lineHeight={"25px"}
              fontSize={{ base: "12px", lg: "unset" }}
            >
              {message}
            </Text>
          ) : (
            <Text
              color="white"
              lineHeight={"25px"}
              fontSize={{ base: "12px", lg: "unset" }}
            >
              {played ? message : text}
            </Text>
          )}
          <Text
            fontSize="10px"
            mt={isUser ? "10px" : "4px"}
            color="whiteAlpha.500"
          >
            {time}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ChatMessage;
