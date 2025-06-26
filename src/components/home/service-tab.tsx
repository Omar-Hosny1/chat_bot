import { IService, useServiceStore } from "@/stores/service-store";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { IoMdClose } from "react-icons/io";

type ServiceTabProps = IService;

function ServiceTab({ id, name, iconSrc, isActive }: ServiceTabProps) {
  const toggleOpened = useServiceStore((state) => state.toggleOpened);
  const setIsActive = useServiceStore((state) => state.setIsActive);

  return (
    <Box display="inline-block">
      <Flex
        gap={"10px"}
        alignItems={"center"}
        bg={isActive ? "blue.700" : "#1B2433"}
        pe={"10px"}
        onClick={() => {
          setIsActive(id, true);
        }}
        ps={"5px"}
        boxShadow={isActive ? "0 0 0 2px #3182ce" : undefined}
        borderRadius={isActive ? "md" : undefined}
        cursor="pointer"
      >
        <Image src={iconSrc} width={14} height={14} alt="icon" />
        <Text color={"whiteAlpha.500"} fontSize={"12px"}>
          {name}
        </Text>
        <Box w={"20px"} />
        <Box
          p={"5px"}
          transition={"300ms"}
          _hover={{
            bg: "whiteAlpha.300",
            rounded: "4px",
          }}
        >
          <Box
            color={"whiteAlpha.600"}
            onClick={(e) => {
              e.stopPropagation();
              toggleOpened(id);
            }}
          >
            <IoMdClose />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default ServiceTab;
