"use client";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function Header() {
  const isTablet = useBreakpointValue({ base: true, lg: false });

  // if (isTablet) {
  //   return (
  //     <Flex
  //       direction="column"
  //       alignItems={"flex-start"}
  //       justifyContent={"space-between"}
  //       height={"100vh"}
  //       w={"250px"}
  //       p={"20px"}
  //       borderRight={"0.5px solid"}
  //       bg={"red"}
  //       borderColor={"whiteAlpha.100"}
  //     >
  //       <Box>
  //         <Flex alignItems={"center"} mb={"40px"}>
  //           <Image src="/icons/logo.svg" alt="My Icon" width={20} height={17} />
  //           <Text
  //             fontWeight={700}
  //             fontSize={"18px"}
  //             lineHeight={"23px"}
  //             letterSpacing={"0px"}
  //             color={"white"}
  //             ml={"10px"}
  //           >
  //             Deploy AI
  //           </Text>
  //         </Flex>

  //         <InputGroup
  //           // display={{ base: "none", lg: "initial" }}
  //           startElement={
  //             <Image
  //               src="/icons/search.svg"
  //               alt="My Icon"
  //               width={20}
  //               height={20}
  //             />
  //           }
  //         >
  //           <Input
  //             color={"grey"}
  //             placeholder="Search"
  //             bg={"rgb(27 37 43)"}
  //             w={"461px"}
  //             h="40px"
  //           />
  //         </InputGroup>
  //       </Box>

  //       <Flex direction="column" gap={"15px"} alignItems="flex-start" w="full">
  //         <Flex
  //           alignItems="center"
  //           w="full"
  //           p={"10px"}
  //           rounded={"7px"}
  //           bg={"rgb(27 37 43)"}
  //           justifyContent="flex-start"
  //         >
  //           <Image src="/icons/add.svg" alt="Add" width={20} height={17} />
  //           <Text ml="10px">Create New</Text>
  //         </Flex>
  //         <Flex
  //           alignItems="center"
  //           w="full"
  //           p={"10px"}
  //           rounded={"7px"}
  //           bg={"rgb(27 37 43)"}
  //           justifyContent="flex-start"
  //         >
  //           <Image src="/icons/help.svg" alt="Help" width={20} height={17} />
  //           <Text ml="10px">Help</Text>
  //         </Flex>
  //         <Flex
  //           alignItems="center"
  //           w="full"
  //           p={"10px"}
  //           rounded={"7px"}
  //           bg={"rgb(27 37 43)"}
  //           justifyContent="flex-start"
  //         >
  //           <Image
  //             src="/icons/settings.svg"
  //             alt="Settings"
  //             width={20}
  //             height={17}
  //           />
  //           <Text ml="10px">Settings</Text>
  //         </Flex>
  //       </Flex>

  //       <Flex alignItems="center" mt="auto" mb="20px">
  //         <Image src="/icons/avatar.svg" alt="Avatar" width={35} height={35} />
  //         <Text ml="10px">User</Text>
  //       </Flex>
  //     </Flex>
  //   );
  // }
  return (
    <Box h={"68px"}>
      <Flex
        alignItems={{ base: "start", lg: "center" }}
        bg={"#0B1418"}
        gap={"15px"}
        justifyContent={{ base: "start", lg: "space-between" }}
        height={{ base: "100vh", lg: "68px" }}
        w={{ base: "225px", lg: "full" }}
        px={{ base: "10px", lg: "45px" }}
        py={{ base: "20px", lg: "unset" }}
        pos={{ base: "absolute", lg: "unset" }}
        zIndex={"50"}
        flexDir={{ base: "column", lg: "row" }}
        borderBottom={"0.5px solid"}
        borderColor={"whiteAlpha.100"}
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
        </Flex>
        <Flex
          gap={"15px"}
          alignItems="center"
          flexDir={{ base: "column", lg: "row" }}
          h={{ base: "full", lg : "unset" }}
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
              <Text display={{ lg: "none" }} color={"whiteAlpha.800"} ml="10px">
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
              <Text display={{ lg: "none" }} color={"whiteAlpha.800"} ml="10px">
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
              <Text display={{ lg: "none" }} color={"whiteAlpha.800"} ml="10px">
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
          <Flex flex={1} />
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
  );
}

export default Header;
