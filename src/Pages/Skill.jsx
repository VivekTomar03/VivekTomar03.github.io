import React, { useEffect, useState } from "react";
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
import dsa from "../Data/dsa.png";
import npm from "../Data/npm.svg";
import mui from "../Data/mui.png";
import vscode from "../Data/vscode.png";
import sandbox from "../Data/sand.png";





import "./Skill.css";
import {
  Box,
  Container,
  Text,
  Grid,
  Image,
  GridItem,
  Button,
  Flex,
  Stack,
} from "@chakra-ui/react";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allSkills = [
    { src: html5, alt: "html", name: "HTML", category: "frontend" },
    { src: css3, alt: "css3", name: "CSS", category: "frontend" },
    {
      src: javascript,
      alt: "javascript",
      name: "JavaScript",
      category: "frontend",
    },
    { src: reactjs, alt: "reactjs", name: "React JS", category: "frontend" },
    { src: redux, alt: "redux", name: "Redux", category: "frontend" },
    { src: redux, alt: "redux", name: "Redux Tool Kit", category: "frontend" },
    { src: redux, alt: "redux", name: "RTK Query", category: "frontend" },
    {
      src: typescript,
      alt: "typescript",
      name: "TypeScript",
      category: "frontend",
    },
    { src: nodejs, alt: "nodejs", name: "Node JS", category: "backend" },
    {
      src: expressjs,
      alt: "expressjs",
      name: "Express JS",
      category: "backend",
    },
    { src: mongodb, alt: "mongodb", name: "MongoDB", category: "backend" },
    { src: dsa, alt: "dsa", name: "DSA", category: "backend" },
    { src: npm, alt: "npm", name: "NPM", category: "backend" },
    { src: chakraui, alt: "chakraui", name: "Chakra UI", category: "tools" },
    { src: mui, alt: "mui", name: "Material UI", category: "tools" },
    { src: github, alt: "git", name: "Git", category: "tools" },
    { src: vscode, alt: "vs code", name: "VS Code", category: "tools" },
    { src: sandbox, alt: "Codesand", name: "Codesandbox", category: "tools" },

  ];
  const filteredSkills =
    selectedCategory === "all"
      ? allSkills
      : allSkills.filter((skill) => skill.category === selectedCategory);
  useEffect(() => {}, [selectedCategory]);

  return (
    <Box id="skills" paddingTop="100px">
      <Container maxWidth={{ base: "100%", md: "80%" }}>
        <Box>
          <Text className="neon" fontSize="4xl" as="b">
            My Skills
          </Text>
        </Box>
        <Flex
          mt={10}
          justifyContent={"center"}
        >
          <Stack
           direction={{ base: 'column', sm: 'row' }}
           spacing={{ base: '2', sm: '4' }}
           width={{ base: '100%', md: 'auto' }}
           justify="center"
          >
            <>
              <Button
                class="c-button c-button--gooey"
                onClick={() => setSelectedCategory("all")}
              >
                {" "}
                All
                <div class="c-button__blobs">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                style={{ display: "block", height: 0, width: 0 }}
              >
                <defs>
                  <filter id="goo">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="10"
                      result="blur"
                    ></feGaussianBlur>
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                      result="goo"
                    ></feColorMatrix>
                    <feBlend in="SourceGraphic" in2="goo"></feBlend>
                  </filter>
                </defs>
              </svg>
            </>

            <>
              <Button
                class="c-button c-button--gooey"
                onClick={() => setSelectedCategory("frontend")}
              >
                Frontend
                <div class="c-button__blobs">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                style={{ display: "block", height: 0, width: 0 }}
              >
                <defs>
                  <filter id="goo">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="10"
                      result="blur"
                    ></feGaussianBlur>
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                      result="goo"
                    ></feColorMatrix>
                    <feBlend in="SourceGraphic" in2="goo"></feBlend>
                  </filter>
                </defs>
              </svg>
            </>
            <>
              <Button
                class="c-button c-button--gooey"
                onClick={() => setSelectedCategory("backend")}
              >
                Backend
                <div class="c-button__blobs">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                style={{ display: "block", height: 0, width: 0 }}
              >
                <defs>
                  <filter id="goo">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="10"
                      result="blur"
                    ></feGaussianBlur>
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                      result="goo"
                    ></feColorMatrix>
                    <feBlend in="SourceGraphic" in2="goo"></feBlend>
                  </filter>
                </defs>
              </svg>
            </>
            <>
              <Button
                class="c-button c-button--gooey"
                onClick={() => setSelectedCategory("tools")}
              >
                Tools
                <div class="c-button__blobs">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                style={{ display: "block", height: 0, width: 0 }}
              >
                <defs>
                  <filter id="goo">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="10"
                      result="blur"
                    ></feGaussianBlur>
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                      result="goo"
                    ></feColorMatrix>
                    <feBlend in="SourceGraphic" in2="goo"></feBlend>
                  </filter>
                </defs>
              </svg>
            </>
          </Stack>
        </Flex>
        <Grid
          marginTop={"20"}
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          gap="6"
          className="skills-card"
        >
          {filteredSkills.map((skill, index) => (
            <GridItem
              key={index}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              w="150px"
              justifyContent={"center"}
            >
              <Image
                _hover={{ transform: "scale(1.2)" }}
                className="skills-card-img"
                src={skill.src}
                alt={skill.alt}
                w={"100px"}
                h={"100px"}
                m={"auto"}
              />
              <Text as="b" className="skills-card-name">
                {skill.name}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
