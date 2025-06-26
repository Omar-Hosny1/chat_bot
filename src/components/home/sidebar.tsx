"use client";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { Tooltip } from "../ui/tooltip";
import { useAgentStore } from "@/stores/agent-store";
import { useServiceStore } from "@/stores/service-store";

function Sidebar() {
  const agents = useAgentStore((state) => state.agents);
  const selectAgent = useAgentStore((state) => state.selectAgent);
  const services = useServiceStore((state) => state.services);
  const toggleOpened = useServiceStore((state) => state.toggleOpened);

  return (
    <Flex
      py={"10px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexDir={"column"}
      w={"45px"}
    >
      <Flex
        gap={"15px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDir={"column"}
      >
        <Tooltip content={"Home"} positioning={{ placement: "right" }}>
          <Image src="/icons/home.svg" alt="Home" width={15} height={15} />
        </Tooltip>
        <Tooltip content={"Folder"} positioning={{ placement: "right" }}>
          <Image src="/icons/folder.svg" alt="Folder" width={30} height={30} />
        </Tooltip>
      </Flex>
      <Flex
        gap={"20px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDir={"column"}
      >
        {agents.map((agent) => (
          <Tooltip
            key={agent.id}
            content={agent.name}
            positioning={{ placement: "right" }}
          >
            <Flex
              onClick={() => {
                selectAgent(agent.id);
              }}
              alignItems={"center"}
              gap={"5px"}
              cursor={"pointer"}
            >
              {agent.isSelected ? (
                <Box
                  w={"5px"}
                  h={"5px"}
                  rounded={"50%"}
                  bg={"whiteAlpha.500"}
                  transition="transform 0.2s cubic-bezier(0.4,0,0.2,1), opacity 0.2s"
                  transform="scale(1.4)"
                  opacity={1}
                />
              ) : (
                <Box
                  w={"5px"}
                  h={"5px"}
                  rounded={"50%"}
                  bg={"whiteAlpha.500"}
                  transition="transform 0.2s cubic-bezier(0.4,0,0.2,1), opacity 0.2s"
                  transform="scale(0.5)"
                  opacity={0}
                  pointerEvents="none"
                  position="absolute"
                />
              )}
              <Image
                src={agent.iconSrc}
                alt={agent.name}
                width={15}
                height={15}
              />
            </Flex>
          </Tooltip>
        ))}
        <Box w={"20px"} h={"1px"} bgColor={"whiteAlpha.200"} />
        {services.map((service) => (
          <Flex
            key={service.id}
            gap={"5px"}
            alignItems={"center"}
            onClick={() => {
              toggleOpened(service.id);
            }}
          >
            {service.opened ? (
              <Box
                w={"5px"}
                h={"5px"}
                rounded={"50%"}
                bg={"whiteAlpha.500"}
                transition="transform 0.2s cubic-bezier(0.4,0,0.2,1), opacity 0.2s"
                transform="scale(1.4)"
                opacity={1}
              />
            ) : (
              <Box
                w={"5px"}
                h={"5px"}
                rounded={"50%"}
                bg={"whiteAlpha.500"}
                transition="transform 0.2s cubic-bezier(0.4,0,0.2,1), opacity 0.2s"
                transform="scale(0.5)"
                opacity={0}
                pointerEvents="none"
                position="absolute"
              />
            )}
            <Tooltip
              content={service.name}
              positioning={{ placement: "right" }}
              key={service.id}
            >
              <Image
                src={service.iconSrc}
                alt={service.name}
                width={15}
                height={15}
              />
            </Tooltip>
          </Flex>
        ))}
      </Flex>
      <Box>
        <Tooltip content={"Help"} positioning={{ placement: "right" }}>
          <Image
            src="/icons/questions.svg"
            alt="My Icon"
            width={8}
            height={14}
          />
        </Tooltip>
      </Box>
    </Flex>
  );
}

export default Sidebar;
