"use client";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ServiceTab from "./service-tab";
import Image from "next/image";
import LeftHandSideIndicatorMessage from "./lhs-indicator-message";
import { useServiceStore } from "@/stores/service-store";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);
const MotionText = motion(Text);
function Service() {
  const selectedService = useServiceStore((state) => state.getActiveService());
  if (!selectedService) {
    return;
  }
  return (
    <>
      <Flex
        flex={1}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <MotionText
          fontWeight="100"
          color="white"
          fontSize="20px"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {selectedService.title}
        </MotionText>

        <MotionText
          color="white"
          fontSize="12px"
          mt={"10px"}
          fontWeight="700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          {selectedService.description}
        </MotionText>
      </Flex>
      <LeftHandSideIndicatorMessage />
    </>
  );
}

export default Service;
