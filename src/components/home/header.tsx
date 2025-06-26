"use client";
import { Box, Flex, Input, InputGroup, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";

function Header() {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <>
      {showHeader ? (
        <Box
          w={"full"}
          h={"full"}
          pos={"absolute"}
          bg={"black"}
          opacity={"0.7"}
          zIndex={"20"}
          display={{ lg: "none" }}
          onClick={() => setShowHeader(false)}
        />
      ) : null}
      <Box h={"68px"}>
        {showHeader ? null : (
          <Flex
            display={{ lg: "none" }}
            alignItems={"center"}
            justifyContent={"space-between"}
            p={"15px"}
          >
            <Flex alignItems={"center"}>
              <Image
                src="/icons/burger.svg"
                alt="My Icon"
                width={20}
                height={20}
                onClick={() => setShowHeader(true)}
              />
              <Box w={"10px"} />
              <Image
                src="/icons/logo.svg"
                alt="My Icon"
                width={20}
                height={17}
              />
              <Text
                fontWeight={700}
                fontSize={"18px"}
                lineHeight={"23px"}
                letterSpacing={"0px"}
                color={"white"}
              >
                Deploy AI
              </Text>
            </Flex>
          </Flex>
        )}

        <Flex
          alignItems={{ base: "start", lg: "center" }}
          bg={"#0B1418"}
          gap={"15px"}
          justifyContent={"space-between"}
          height={{ base: "100vh", lg: "68px" }}
          w={{ base: "225px", lg: "full" }}
          px={{ base: "10px", lg: "45px" }}
          py={{ base: "20px", lg: "unset" }}
          pos={{ base: "absolute", lg: "unset" }}
          zIndex={"50"}
          flexDir={{ base: "column", lg: "row" }}
          borderBottom={"0.5px solid"}
          borderColor={"whiteAlpha.100"}
          display={{ base: showHeader ? "unset" : "none", lg: "flex" }}
        >
          <Flex alignItems={"center"}>
            <Image src="/icons/logo.svg" alt="My Icon" width={20} height={17} />
            <Text
              fontWeight={700}
              fontSize={"18px"}
              lineHeight={"23px"}
              letterSpacing={"0px"}
              color={"white"}
            >
              Deploy AI
            </Text>
            <Flex flex={1} />
            <Box display={{ lg: "none" }}>
              <Image
                src="/icons/close.svg"
                alt="My Icon"
                width={13}
                height={13}
                onClick={() => setShowHeader(false)}
              />
            </Box>
          </Flex>
          <Box h={"10px"} />
          <Flex
            gap={"15px"}
            alignItems="center"
            flexDir={{ base: "column", lg: "row" }}
            h={{ base: "full", lg: "unset" }}
          >
            <Box>
              <InputGroup
                startElement={
                  <Image
                    src="/icons/search.svg"
                    alt="My Icon"
                    width={20}
                    height={20}
                  />
                }
              >
                <Input
                  color={"grey"}
                  placeholder="Search"
                  bg={"rgb(27 37 43)"}
                  w={{ base: "full", lg: "461px" }}
                  h="40px"
                />
              </InputGroup>
            </Box>
            <Box
              w={{ base: "full", lg: "40px" }}
              h="40px"
              p={"10px"}
              rounded={"7px"}
              bg={"rgb(27 37 43)"}
            >
              <Flex>
                <Image
                  src="/icons/add.svg"
                  alt="My Icon"
                  width={20}
                  height={17}
                />
                <Text
                  display={{ lg: "none" }}
                  color={"whiteAlpha.800"}
                  ml="10px"
                >
                  Create New
                </Text>
              </Flex>
            </Box>
            <Box
              w={{ base: "full", lg: "40px" }}
              h="40px"
              p={"10px"}
              rounded={"7px"}
              bg={"rgb(27 37 43)"}
            >
              <Flex>
                <Image
                  src="/icons/help.svg"
                  alt="My Icon"
                  width={20}
                  height={17}
                />
                <Text
                  display={{ lg: "none" }}
                  color={"whiteAlpha.800"}
                  ml="10px"
                >
                  Help
                </Text>
              </Flex>
            </Box>

            <Box
              h="40px"
              w={{ base: "full", lg: "40px" }}
              p={"10px"}
              rounded={"7px"}
              bg={"rgb(27 37 43)"}
            >
              <Flex>
                <Image
                  src="/icons/settings.svg"
                  alt="My Icon"
                  width={20}
                  height={17}
                />
                <Text
                  display={{ lg: "none" }}
                  color={"whiteAlpha.800"}
                  ml="10px"
                >
                  Settings
                </Text>
              </Flex>
            </Box>
            <Box display={{ base: "none", lg: "unset" }}>
              <Image
                src="/icons/avatar.svg"
                alt="My Icon"
                width={35}
                height={35}
              />
            </Box>
            <Flex
              h="40px"
              w={{ base: "full", lg: "40px" }}
              p={"10px"}
              alignItems={"center"}
              rounded={"7px"}
              display={{ base: "flex", lg: "none" }}
              bg={"rgb(27 37 43)"}
            >
              <Image
                src="/icons/avatar.svg"
                alt="My Icon"
                width={30}
                height={30}
              />
              <Text color={"whiteAlpha.800"} ml="10px">
                John Marston
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Header;
