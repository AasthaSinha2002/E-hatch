import React from "react";
import { Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { FaConnectdevelop } from "react-icons/fa";

const PersonalHome: React.FC = () => {
  return (
    <Flex
      direction="column"
      bg="white"
      borderRadius={4}
      cursor="pointer"
      border="1px solid"
      borderColor="gray.300"
      position="sticky"
    >
      <Flex
        align="flex-end"
        color="white"
        p="6px 10px"
        bg="white.500"
        height="34px"
        borderRadius="4px 4px 0px 0px"
        fontWeight={600}
        
        backgroundSize="cover"
      ></Flex>
      <Flex direction="column" p="12px">
        <Flex align="center" mb={2}>
          <Icon as={FaConnectdevelop} fontSize={50} color="brand.100" mr={2} />
          <Text fontWeight={600}>Community</Text>
        </Flex>
        <Stack spacing={3}>
          <Text fontSize="9pt">
            Join your journey of startup.
          </Text>
          <Button height="30px">Create Post</Button>
          <Button variant="outline" height="30px">
            Create Community
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};
export default PersonalHome;
