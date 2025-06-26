"use client";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ServiceTab from "./service-tab";
import Image from "next/image";
import LeftHandSideIndicatorMessage from "./lhs-indicator-message";
import { useServiceStore } from "@/stores/service-store";
import { motion } from "framer-motion";
import Service from "./service";

const MotionFlex = motion(Flex);
const MotionText = motion(Text);

function RightSection() {
  const openedServices = useServiceStore((state) => state.services).filter(
    (service) => service.opened
  );

  return (
    <Flex flexDir="column" h="full">
      <Flex bg="#0c0e12" overflowX="auto" whiteSpace="nowrap">
        {openedServices.map((service) => (
          <ServiceTab {...service} key={service.id} />
        ))}

        <Box
          p="5px"
          transition="300ms"
          _hover={{
            bg: "whiteAlpha.300",
            rounded: "4px",
          }}
        >
          <Image src="/icons/add.svg" width={13} height={13} alt="add" />
        </Box>
      </Flex>

      {openedServices.length === 0 ? (
        <MotionFlex
          alignItems="center"
          justifyContent="center"
          flex={1}
          gap="12px"
          flexDir="column"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MotionText
            fontWeight="100"
            color="white"
            fontSize="15px"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            Your Preview Will Be Shown Here
          </MotionText>

          <MotionText
            color="white"
            fontSize="12px"
            fontWeight="700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            Start Building
          </MotionText>
        </MotionFlex>
      ) : null}
    </Flex>
  );
}

export default RightSection;
