import { useAgentStore } from "@/stores/agent-store";
import { Box, Flex, Text, Textarea } from "@chakra-ui/react";
import Image from "next/image";
import React, { useRef, useState } from "react";

function ChatTextArea({
  endListRef,
}: {
  endListRef: React.RefObject<HTMLDivElement | null>;
}) {
  const addMessage = useAgentStore((state) => state.addMessage);
  const addMessageAsync = useAgentStore((state) => state.addMessageAsync);
  const selectedAgent = useAgentStore((state) => state.getSelectedAgent());
  const selectedChat = useAgentStore((state) => state.getSelectedChat());

  const [enteredValue, setEnteredValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const scrollToBottom = () => {
    if (!endListRef) return;
    endListRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const addMessageHandler = async () => {
    if (
      !selectedAgent ||
      enteredValue === "" ||
      !selectedChat ||
      selectedChat.isCreating
    )
      return;
    addMessage(selectedAgent.id, selectedChat.id, {
      content: enteredValue,
      createdAt: new Date(),
      iconSrs: "./icons/avatar.svg",
      id: `MSG-${new Date().getMilliseconds()}-${Math.random()}`,
      type: "user",
      played: true,
    });
    setEnteredValue("");

    // Scroll to bottom after adding user message
    setTimeout(() => {
      if (textAreaRef.current) {
        textAreaRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 0);

    await addMessageAsync(selectedAgent.id, selectedChat.id, {
      content: "This is a demo response.",
      createdAt: new Date(),
      iconSrs: selectedAgent.iconSrc,
      id: `MSG-${new Date().getMilliseconds()}`,
      type: "bot",
      played: false,
    });

    scrollToBottom();
  };

  if (!selectedChat) {
    return <p>No Chat Selected</p>;
  }

  return (
    <Box>
      {selectedChat.isCreating ? (
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
              {selectedChat.indicatorMessage ?? "Creating..."}
            </Text>
          </Flex>
          <Flex gap={"10px"} alignItems={"center"}>
            <Image
              src={"/icons/resume.svg"}
              width={13}
              height={13}
              alt="icon"
            />
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
      ) : null}

      <Box
        w={{ base: "full", lg: "full" }}
        px={3}
        py={2}
        borderRadius="md"
        boxShadow="sm"
      >
        <Textarea
          minH="38px"
          maxH="51px"
          ref={textAreaRef}
          resize="none"
          bg="transparent"
          border={0}
          outline={0}
          value={enteredValue}
          onChange={(e) => {
            setEnteredValue(e.target.value);
          }}
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
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              addMessageHandler();
            }
          }}
        />
        <Flex alignItems={"center"} justifyContent={"space-between"} mt={"4px"}>
          <Image src={"/icons/attach.svg"} width={13} height={13} alt="icon" />
          <Flex alignItems={"center"} gap={"15px"}>
            <Text color={"whiteAlpha.500"} fontSize={"12px"}>
              Have a Feedback?
            </Text>
            <Image
              style={{
                cursor: enteredValue ? "pointer" : "not-allowed",
              }}
              onClick={addMessageHandler}
              src={"/icons/send.svg"}
              width={23}
              height={23}
              alt="icon"
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default ChatTextArea;
