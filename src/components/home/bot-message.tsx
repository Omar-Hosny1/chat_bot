import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function BotMessage() {
  return (
    <Flex alignItems={"center"} justifyContent={"end"} w={"full"} p={"20px"}>
      <Box>
        <Flex w={"full"} gap={"10px"} alignItems={"start"}>
          <Box
            maxW={"500px"}
            w={"fit-content"}
            padding={"15px"}
            bg={"#103E76"}
            rounded={"10px"}
          >
            <Text color={"white"}>
              I need a simple web app to help track nurse shift handovers at our
              hospital. Right now, we rely on paper or WhatsApp to pass updates
              between shifts, and sometimes coverage is missed. I want a tool
              where nurses can log handover notes at the end of their shift, and
              the system should automatically flag if the next shift isn’t
              properly covered. The app should include: A schedule view to see
              who’s on each shift. A form nurses can fill out to submit their
              handover. Alerts if there’s a gap between shifts or a missing
              handover. Login system so only staff can use it. Admin view so we
              can assign shifts and view past handovers. Please make it simple
              to use, mobile-friendly, and something we can start using quickly
              with our team.
            </Text>
            <Text fontSize={"10px"} mt={"10px"} color={"whiteAlpha.500"}>
              12:12 AM
            </Text>
          </Box>
          <Image
            src={"/icons/chat-avatar.svg"}
            width={30}
            height={30}
            alt="icon"
          />
        </Flex>
      </Box>
    </Flex>
  );
}

export default BotMessage;
