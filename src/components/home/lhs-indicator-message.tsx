import { useServiceStore } from "@/stores/service-store";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function LeftHandSideIndicatorMessage() {
  const activeService = useServiceStore((state) => state.getActiveService());

  if (!activeService || !activeService.isCreating) return null;

  return (
    <Box p="10px" w="full">
      <MotionBox
        bg="#2B3243"
        p="10px"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Flex gap="10px" align="center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
              <Image
                src="/icons/loading.svg"
                width={10}
                height={10}
                alt="loading"
              />
            </motion.div>
            <Text color="white" fontSize="12px">
              {activeService.indicatorMessage}
            </Text>
          </Flex>
          <Flex alignItems="center" gap="20px">
            <Image src="/icons/away.svg" width={13} height={13} alt="away" />
            <Image src="/icons/pin.svg" width={10} height={10} alt="pin" />
          </Flex>
        </Flex>
      </MotionBox>
    </Box>
  );
}

export default LeftHandSideIndicatorMessage;
