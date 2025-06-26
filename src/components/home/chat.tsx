"use client";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import LeftSection from "./left-section";
import RightSection from "./right-section";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

function Chat() {
  return (
    <Flex w={"full"} h={"full"} bg={"rgb(22 29 41)"}>
      <Allotment >
        <Allotment.Pane minSize={700}>
          <LeftSection />
        </Allotment.Pane>
        <Allotment.Pane minSize={700}>
          <RightSection />
        </Allotment.Pane>
      </Allotment>
    </Flex>
  );
}

export default Chat;
