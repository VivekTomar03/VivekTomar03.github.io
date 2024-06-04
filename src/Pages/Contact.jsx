import React, { useRef, useState } from "react";
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
  Stack,
} from "@chakra-ui/react";
import { BsLinkedin, BsGithub, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css"
import { Form } from "react-router-dom";
const Contact = () => {
  const form = useRef();
  const toast = useToast();
  const [formData, setFormData] = useState({
    to_name: '',
    from_name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_s8yvrsi",
        "template_v6x9ypi",
       formData,
        "E761B7dU8HM7hlRiy"
      )
      .then(
        (result) => {
          console.log(result.text);
        setFormData(
          {
            to_name: '',
            from_name: '',
            phone: '',
            message: ''
          }
        )
        console.log(formData)
          toast({
            title: "Message sent.",
            description: "Your message has been sent successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        },
        (error) => {
          console.log(error.text);
          toast({
            title: "Message not sent.",
            description: "Something went wrong",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      );
  };
 

  return (
    <Box pb={6} id="contact">
      <Text  className="neon" mb={10} fontSize={{ base: "2xl", md: "4xl" }}>
        Get In Touch
      </Text>
      <Stack  className="stack-container" w="90%"  m={"auto"} direction={{ base: "column-reverse", md: "row" }} spacing={6}>
  
        <Box flex={"1"} marginTop={{ base: "3", md: "6" }} >
        <Card
            icon={<MdEmail size="30px" />}
            text="tomarvivek90viv@gmail.com"
            link="mailto:tomarvivek90viv@gmail.com"
          />
          <Card
            icon={<BsFillTelephoneFill size="25px" />}
            text="+91 7415786664"
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
          />


          <Card
            icon={<BsLinkedin size="30px" />}
            link="https://www.linkedin.com/in/vivek7410/"
          />

          
          <Card
            icon={<BsGithub size="30px" />}
            link="https://github.com/VivekTomar03"
          />
        </Box>  
        <Box marginTop={{ base: "3", md: "6" }} flex={"1"}>
          <form  className="form" onSubmit={sendEmail}>
          <VStack spacing={4}>
              <Text className="title">Welcome,<br/><span>Fill Form To Contact Me</span></Text>
              <FormControl isRequired>
                <Input 
                  
                  name="to_name"
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Your Name" 
                  className="input"
                />
              </FormControl>
              <FormControl isRequired>
                <Input 
                  type="email" 
                  name="from_name"
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="Your Email" 
                  className="input"
                />
              </FormControl>
              <FormControl>
                <Input 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="Your Phone Number" 
                  className="input"
                />
              </FormControl>
              <FormControl isRequired>
                <Textarea 
                 name="message"
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Your Message" 
                  className="input"
                />
              </FormControl>
              <Button type="submit" colorScheme="blue" width="full" className="button-confirm">
                Send Mail
              </Button>
            </VStack>
          </form>
        </Box>
      </Stack>
      <Text mt={10} fontWeight={"bold"} fontSize={{ base: "lg", md: "xl" }} color="#01497C" >
        Thank You
      </Text>
    </Box>
  );
  
}

export default Contact;
const Card = ({ icon, text, link, onClick }) => (
  <Box
    // as="button"
    onClick={onClick ? onClick : () => window.open(link, "_blank")}
    p={4}
    mb={4}
    borderWidth={2}
    borderRadius="lg"
    borderColor="#01497C"
    boxShadow="lg"
    transition="transform 0.3s ease, box-shadow 0.3s ease"
    _hover={{
      transform: "translateY(-4px)",
      boxShadow: "xl",
      cursor: "pointer",
    }}
    textAlign="center"
    color="#01497C"
  >
    <Stack  direction={{ base: "column", md: "row" }} justifyContent="center" alignItems="center">
      {icon}
      {text && (
        <Text textOverflow={"clip"} as="b" fontSize={{ base: "sm", md: "lg" }}>
          {" "}
          : {text}
        </Text>
      )}
    </Stack>
  </Box>
);
