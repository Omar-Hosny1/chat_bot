import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./sidebar";
import Chat from "./chat";

function MainSection() {
  return (
    <Flex w={"full"} h={"calc(100vh - 68px)"} >
      <Sidebar />
      <Chat />
    </Flex>
  );
}

export default MainSection;
