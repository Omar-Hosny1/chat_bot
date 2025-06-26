import { useAgentStore } from "@/stores/agent-store";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { IoMdClose } from "react-icons/io";

interface AgentTabProps {
  chatName: string;
  chatId: string;
  agentId: string;
  iconSrc: string;
  endListRef: React.RefObject<HTMLDivElement | null>;
}

function AgentTab({ chatId, chatName, iconSrc, agentId, endListRef }: AgentTabProps) {
  const removeChat = useAgentStore((state) => state.removeChat);
  const selectChat = useAgentStore((state) => state.selectChat);
  const selectedChat = useAgentStore((state) => state.getSelectedChat());
  const scrollToBottom = () => {
    if (!endListRef) return;
    endListRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  return (
    <Box display="inline-block">
      <Flex
        gap={"10px"}
        alignItems={"center"}
        bg={selectedChat?.id === chatId ? "blue.700" : "#1B2433"}
        pe={"10px"}
        onClick={() => {
          selectChat(agentId, chatId);
          scrollToBottom();
        }}
        ps={"5px"}
        boxShadow={
          selectedChat?.id === chatId ? "0 0 0 2px #3182ce" : undefined
        }
        borderRadius={selectedChat?.id === chatId ? "md" : undefined}
        cursor="pointer"
      >
        <Image src={iconSrc} width={14} height={14} alt="icon" />
        <Text color={"whiteAlpha.500"} fontSize={"12px"}>
          {chatName}
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
          <Box
            color={"whiteAlpha.600"}
            onClick={() => removeChat(agentId, chatId)}
          >
            <IoMdClose />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default AgentTab;
