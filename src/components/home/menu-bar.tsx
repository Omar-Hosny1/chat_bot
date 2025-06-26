import { useAgentStore } from "@/stores/agent-store";
import { Flex, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function MenuBar() {
  const selectedAgent = useAgentStore((state) => state.getSelectedAgent());
  const addChat = useAgentStore((state) => state.addChat);

  return (
    <Flex
      height={"20px"}
      mt={"10px"}
      mx={"10px"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      {selectedAgent ? (
        <HStack gap={"10px"}>
          <Image src={"/icons/burger.svg"} width={13} height={13} alt="icon" />
          <HStack
            gap={"10px"}
            p={"5px"}
            cursor={"pointer"}
            rounded={"5px"}
            _hover={{
              bg: "whiteAlpha.200",
            }}
            onClick={() => {
              addChat(selectedAgent.id);
            }}
          >
            <Image src={"/icons/add.svg"} width={13} height={13} alt="icon" />
            <Text color={"whiteAlpha.500"} fontSize={"12px"}>
              New Chat
            </Text>
          </HStack>
        </HStack>
      ) : null}
      <HStack
        px={"10px"}
        gap={"30px"}
        transition={"300ms"}
        cursor={"pointer"}
        _hover={{
          bg: "whiteAlpha.300",
          rounded: "4px",
        }}
      >
        <Text color={"whiteAlpha.500"} fontSize={"12px"}>
          demo.app
        </Text>
        <Image
          src={"/icons/arrow-down.svg"}
          width={10}
          height={10}
          alt="icon"
        />
      </HStack>
      <Image src={"/icons/boost.svg"} width={13} height={13} alt="icon" />
    </Flex>
  );
}

export default MenuBar;
