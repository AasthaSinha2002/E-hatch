import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";
// import { Input } from "./input";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#FF3C00",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "purple.50",
      },
    }),
  },
  components: {
    Button,
    
  },
});