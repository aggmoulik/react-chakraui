import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  extendTheme,
  theme
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { Profile } from "./components/Profile"

const OverrideTheme =  extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    }
  }
  // components: {
  //   Input: {
  //     baseStyle: {
  //       outline: 2,
  //     },
  //     sizes: {},
  //     variants: {
  //       "with-shadow": {
  //         bg: "red.400",
  //         boxShadow: "0 0 2px 2px #efdfde",
  //       },
  //       // 4. We can override existing variants
  //       solid: (props) => ({
  //         bg: props.colorMode === "dark" ? "red.300" : "red.500",
  //       }),
  //     },
  //   }
  // }
})

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" minH="100%" p={5}>
      {/* <Grid minH="100vh" p={3}> */}
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        {/* <VStack spacing={8}> */}
          {/* <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text> */}
          <Profile />
        {/* </VStac\k> */}
      {/* </Grid> */}
    </Box>
  </ChakraProvider>
)
