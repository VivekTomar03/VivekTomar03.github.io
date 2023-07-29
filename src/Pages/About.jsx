import React from "react";
import "./About.css"
import profile from "../Data/editprofile.png";


import vivek from "../Data/Vivek_Singh_Tomar_Resume.pdf";
import { Box, Image, Text, Button,  Container } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import Typewriter from "typewriter-effect";
const About = () => {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/18yyp2mB5klaFdCTpm9RQQkV5UDMNfxci/view?usp=sharing"
    );
  };

  return (
    <Box
    
      id="about"
      className="about section"
      paddingTop="100"
      paddingLeft={{ md: "100" }}
      paddingRight={{ md: "100" }}
    >
      <Text className="neon" fontSize="4xl" as="b">
        About Me
      </Text>
      <Box
        display={{ base: "block", md: "flex" }}
        justifyContent="space-around"
        marginTop={"20"}
        alignItems="center"
        width="100%"
      >
        <Box display="flex" justifyContent={"center"}>
          <Box
            borderRadius={"50%"}
            overflow="hidden"
            width="fit-content"
          
            data-aos="zoom-out-right"  
            _hover={{ transform: "scale(1.2)" }}
          >
            <Image
            
              src={profile}
              alt="Profile Pic"
              width={"300px"}
              className="home-img"
            />
          </Box>
        </Box>
        <Box
          width={{ base: "100%", md: "650px", lg: "700" }}
          marginTop={{ base: "30", md: "0" }}
          height="fit-content"
          data-aos="zoom-out-left"
        >
          <Text color={"tomato"} fontSize="2xl" as="b" id="user-detail-name">
            <Typewriter
              options={{
                strings: ["HELLO 👋" ,"I am Vivek Singh Tomar"],
                autoStart: true,
                loop: true,
              }}
            />
          </Text>
          <Container
           centerConten
            fontSize="lg"
            id="user-detail-intro"
            className="project-tech-stack"
          >
           
            An aspiring fullstack MERN Developer. I love to make projects with
            HTML, CSS, React JS, Redux, NodeJS, ExpressJS and MongoDB which are
            helpful for masses and serve as a great helpful entity.
           
          </Container>
          <Button
            mt={5}
            bg={"#01497C"}
            color={"white"}
            _hover={{ color: "white" }}
            // as="a"
            rightIcon={<DownloadIcon />}
            // href={vivek}
            download={vivek}
            className="nav-link resume"  // for test i have to use this 
            id="resume-button-2"
            onClick={handleDownload}
            // className="button-85"
          >
            {" "}
            <a    download="Vivek_Singh_Tomar_Resume.pdf" href={vivek} target={"blank"} id="resume-link-2">
              Resume 
            </a>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
