import React from "react";
import {
  Box,
  Container,
  HStack,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Toast,
} from "@chakra-ui/react";
import { BsLinkedin, BsGithub, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
  const toast = useToast();
  return (
    <Box pb={6} id="contact">
    <Text as="b" fontSize="4xl">
      Get In Touch
    </Text>
    <Container>
      <Box marginTop={"3"}>
        <HStack
          _hover={{ cursor: "pointer" }}
          margin={"auto"}
          justifyContent={"center"}
          color="#01497C"
          id="contact-phone"
          marginTop={"3"}
        >
          <MdEmail
            onClick={() =>
              window.open("mailto: tomarvivek90viv@gmail.com", "_blank")
            }
            size="30px"
          />
          <Text as="b" fontSize={"lg"} id="contact-email">
            {" "}
            : tomarvivek90viv@gmail.com
          </Text>
        </HStack>
        <HStack
          _hover={{ cursor: "pointer" }}
          margin={"auto"}
          justifyContent={"center"}
          color="#01497C"
          marginTop={"3"}
        >
          <BsFillTelephoneFill
            onClick={() => {
              navigator.clipboard.writeText("+91 7415786664");
              toast({
                title: "Number copied!",
                description: "+91 7415786664",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
            }}
            size="25px"
          />
          <Text as="b" fontSize={"lg"} id="contact-phone">
            {" "}
            : +91 7415786664
          </Text>
        </HStack>
        <HStack
          marginTop={"3"}
          justifyContent={"center"}
          _hover={{ cursor: "pointer" }}
          color="#01497C"
        >
          <BsLinkedin
            id="contact-linkedin"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/vivek7410/",
                "_blank"
              )
            }
            size="30px"
          />
          <BsGithub
            id="contact-github"
            onClick={() =>
              window.open("https://github.com/VivekTomar03", "_blank")
            }
            size="30px"
          />
        </HStack>
      </Box>
    </Container>
    <Text as="b" fontSize={"xl"} color="#01497C" marginTop={"3"}>
      Thank You
    </Text>
  </Box>
  )
}

export default Contact
