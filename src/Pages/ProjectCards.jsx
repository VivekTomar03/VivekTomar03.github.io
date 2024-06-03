import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  HStack,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import "./Project.css";
function ProjectCards({
  id,
  imageSrc,
  title,
  description,
  features,
  techStacks,
  github,
  live,
}) {
  return (
    <Container
      maxWidth={{ base: "100%", md: "85%" }}
      marginTop={"-10"}
      className="project-card"
    >
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 20 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos="zoom-out-right"
          flex={1}
          spacing={{ base: 5, md: 5 }}
        >
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
          >
            <Text as={"span"} color={"#01497C"} className="project-title">
              <Typewriter
                options={{
                  strings: title,
                  autoStart: true,
                  loop: true,
                }}
              />
            </Text>
          </Heading>
          <Text color={"gray.700"} className="project-description">
            {description}
          </Text>
          <Box textAlign={"left"}>
            <Text as="b">Features : </Text>
            {features.map((elem) => {
              return <Text>• {elem} </Text>;
            })}
          </Box>
          <HStack>
            <Text fontSize={"13px"} as="b">
              Tech Stacks :{" "}
            </Text>
            {techStacks.map((elem) => {
              return (
                <Text fontSize={"13px"} as="b" className="project-tech-stack">
                 
                  {elem}
                </Text>
              );
            })}
          </HStack>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"sm"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"#004DFF"}
              bg={"#004DFF"}
              _hover={{ bg: "#004DFF" }}
              onClick={() => window.open(github, "_blank")}
              className="project-github-link"
            >
              Github
            </Button>
            <Button
              rounded={"full"}
              size={"sm"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"#332CF2"}
              bg={"#332CF2"}
              _hover={{ bg: "#332CF2" }}
              onClick={() => window.open(live, "_blank")}
              className="project-deployed-link"
            >
              Live
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos="zoom-out-left"
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
            // ml={"20px"}
          >
            <Image
              _hover={{ transform: "scale(1.2)" }}
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={imageSrc}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
export default ProjectCards;
