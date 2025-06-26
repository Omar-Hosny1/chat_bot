import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { Tooltip } from "../ui/tooltip";

function Sidebar() {
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
        <Tooltip content={"Agent One"} positioning={{ placement: "right" }}>
          <Image
            src="/icons/agent-one.svg"
            alt="Agent One"
            width={15}
            height={15}
          />
        </Tooltip>
        <Tooltip content={"Agent Two"} positioning={{ placement: "right" }}>
          <Image
            src="/icons/agent-two.svg"
            alt="Agent Two"
            width={15}
            height={15}
          />
        </Tooltip>
        <Box w={"20px"} h={"1px"} bgColor={"whiteAlpha.200"}></Box>
        <Tooltip content={"Play"} positioning={{ placement: "right" }}>
          <Image src="/icons/play.svg" alt="Play" width={15} height={15} />
        </Tooltip>
        <Tooltip content={"Shell"} positioning={{ placement: "right" }}>
          <Image src="/icons/shell.svg" alt="Shell" width={15} height={15} />
        </Tooltip>
        <Tooltip content={"Monitor"} positioning={{ placement: "right" }}>
          <Image
            src="/icons/monitor.svg"
            alt="Monitor"
            width={15}
            height={15}
          />
        </Tooltip>
        <Tooltip content={"Internet"} positioning={{ placement: "right" }}>
          <Image
            src="/icons/internet.svg"
            alt="Internet"
            width={15}
            height={15}
          />
        </Tooltip>
        <Tooltip content={"Apps"} positioning={{ placement: "right" }}>
          <Image src="/icons/apps.svg" alt="Apps" width={15} height={15} />
        </Tooltip>
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
