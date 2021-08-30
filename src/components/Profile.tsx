import * as React from "react"
import { Avatar, Box, Flex, Spacer } from "@chakra-ui/react"
import { BasicDetails } from "./BasicDetails"
import { UserDetailsForm } from "./UserDetailsForm"

export const Profile = () => {
    return (
    <Flex >
      <Box w="30%" bg="white" textColor="black">
        <Avatar />
        <h3>John Doe</h3>
        <h3>Software Engineer</h3>
      <BasicDetails />
      {/* <About></About>
      <Skills></Skills>
      <Social></Social> */}
      </Box>
      {/* <Spacer /> */}
      <Box w="70%" bg="white" textColor="black">
        <UserDetailsForm />
      </Box>
    </Flex>
  )
} 