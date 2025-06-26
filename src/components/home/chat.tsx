"use client";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import LeftSection from "./left-section";
import RightSection from "./right-section";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

function Chat() {
  const showRightHandSideSection = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex w={"full"} h={"full"} bg={"rgb(22 29 41)"}>
      <Allotment>
        <Allotment.Pane minSize={showRightHandSideSection ? 700 : 300}>
          <LeftSection />
        </Allotment.Pane>
        <Allotment.Pane minSize={300} visible={showRightHandSideSection}>
          <RightSection />
        </Allotment.Pane>
      </Allotment>
    </Flex>
  );
}

export default Chat;
