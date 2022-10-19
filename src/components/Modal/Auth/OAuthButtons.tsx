import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";

type OAuthButtonsProps = {};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  const [signInWithGoogle, _, loading, error] = useSignInWithGoogle(auth);

  return (
    <Flex direction="column" mb={9} width="14%">
      <Button
        variant="oauth"
        mb={8}
        onClick={() => signInWithGoogle()}
        isLoading={loading}
      >
        <Image src="/images/googlelogo.png" height="20px" mr={9}  />
        Continue with Google
      </Button>
      <Button variant="oauth">Some Other Provider</Button>
      
      {error && (
        <Text textAlign="center" fontSize="10pt" color="red" mt={9}>
          {error}
        </Text>
      )}
    </Flex>
  );
};
export default OAuthButtons;
