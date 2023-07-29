import React from "react";
import reactjs from "../Data/reactjs.png";
import chakraui from "../Data/chakraui.png";
import css3 from "../Data/css3.png";
import expressjs from "../Data/expressjs.png";
import github from "../Data/github.png";
import html5 from "../Data/html5.png";
import javascript from "../Data/javascript.png";
import mongodb from "../Data/mongodb.png";
import nodejs from "../Data/nodejs.png";
import redux from "../Data/redux.png";
import typescript from "../Data/typescript.png";
import "./Skill.css";
import { Box, Container, Text, Grid, Image, GridItem } from "@chakra-ui/react";

const Skills = () => {
  return (
    <Box id="skills" paddingTop="100">
      <Container maxWidth={{ base: "100%", md: "80%" }}>
        <Box>
          <Text className="neon" fontSize="4xl" as="b">
            My Skills
          </Text>
        </Box>
        <Grid
          marginTop={"20"}
          templateColumns={{
            base: "repeat(2,1fr)",
            sm: "repeat(3,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(5,1fr)",
          }}
          gap="6"
          className="skills-card"
        >
          <GridItem
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            w="150px"
            
          >
            <Image _hover={{ transform: "scale(1.2)" }} className="skills-card-img" src={html5} alt="html" />{" "}
            <Text as="b" className="skills-card-name">
              HTML
            </Text>
          </GridItem>

          <GridItem
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            w="150px"
           
          >
            <Image  _hover={{ transform: "scale(1.2)" }} className="skills-card-img" src={css3} alt="css3" />{" "}
            <Text as="b" className="skills-card-name">
              CSS
            </Text>
          </GridItem>

          <GridItem
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            w="150px"
           
          >
            <Image
             _hover={{ transform: "scale(1.2)" }}
              className="skills-card-img"
              src={javascript}
              alt="javascript"
            />{" "}
            <Text as="b" className="skills-card-name">
              JavaScript
            </Text>
          </GridItem>

          <GridItem
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            w="150px"
           
          >
            <Image  _hover={{ transform: "scale(1.2)" }} className="skills-card-img" src={reactjs} alt="reactjs" />{" "}
            <Text as="b" className="skills-card-name">
              React JS
            </Text>
          </GridItem>

          <GridItem
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            w="150px"
            
          >
            <Image _hover={{ transform: "scale(1.2)" }} className="skills-card-img" src={redux} alt="redux" />{" "}
            <Text as="b" className="skills-card-name">
              Redux
            </Text>
          </GridItem>

          <GridItem
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            w="150px"
          
          >
            <Image
               _hover={{ transform: "scale(1.2)" }}
              className="skills-card-img"
              src={typescript}
              alt="typescript"
            />{" "}
            <Text as="b" className="skills-card-name">
              Typescript
            </Text>
          </GridItem>

          <GridItem
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            w="150px"
           
          >
            <Image  _hover={{ transform: "scale(1.2)" }} className="skills-card-img" src={nodejs} alt="nodejs" />{" "}
            <Text as="b" className="skills-card-name">
              Node JS
            </Text>
          </GridItem>

          <GridItem
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            w="150px"
           
          >
            <Image
             _hover={{ transform: "scale(1.2)" }}
              className="skills-card-img"
              src={expressjs}
              alt="expressjs"
            />{" "}
            <Text as="b" className="skills-card-name">
              Express JS
            </Text>
          </GridItem>

          <GridItem
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            w="150px"
           
          >
            <Image  _hover={{ transform: "scale(1.2)" }} className="skills-card-img" src={mongodb} alt="mongodb" />{" "}
            <Text as="b" className="skills-card-name">
              Mongo DB
            </Text>
          </GridItem>

          <GridItem
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            w="150px"
            
          >
            <Image _hover={{ transform: "scale(1.2)" }} className="skills-card-img" src={chakraui} alt="chakraui" />{" "}
            <Text as="b" className="skills-card-name">
              Chakra UI
            </Text>
          </GridItem>

          <GridItem
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            w="150px"
            
          >
            <Image _hover={{ transform: "scale(1.2)" }} className="skills-card-img" src={github} alt="git" />{" "}
            <Text as="b" className="skills-card-name">
              Git
            </Text>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
