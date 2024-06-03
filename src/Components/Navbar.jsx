import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Text,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { HamburgerIcon, CloseIcon, DownloadIcon } from "@chakra-ui/icons";
import vivek from "../Data/Vivek_Singh_Tomar_Resume.pdf";

import "./Navbar.css";
const Links = ["About", "Skills", "Projects", "Contact"];

const NavLink = ({ children }) => (
  <Link
    spy={true}
    as={ScrollLink}
    smooth={true}
    duration={500}
    px={2}
    py={1}
    rounded={"md"}
    color={"white"}
    _hover={{
      textDecoration: "none",
      color: "#01497C",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    to={`${children.toLowerCase()}`}
    className={`nav-link ${children.toLowerCase()}`}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position={"sticky"} top="0px" zIndex={"9999"} id="nav-menu">
      <Box bg={useColorModeValue("#01497C", "gray.100")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {/* <HStack spacing={8} alignItems={'center'} border={'1px solid'}> */}
          <Box _hover={{ cursor: "pointer", transform: "scale(1.2)" }}>
            {" "}
            <Text
              onClick={() => window.scrollTo({ top: 80, behavior: "smooth" })}
              color="white"
              as="b"
              fontSize={"xl"}
              fontStyle="italic"
              className="nav-link home"
            >
              {" "}
              {"< VST />"}{" "}
            </Text>{" "}
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
           
            <Link
              spy={true}
              as={ScrollLink}
              smooth={true}
              duration={500}
              px={2}
              py={1}
              rounded={"md"}
              color={"white"}
              _hover={{
                textDecoration: "none",
                color: "#01497C",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              to="about"
              className="nav-link about"
            >
              About
            </Link>
            <Link
              spy={true}
              as={ScrollLink}
              smooth={true}
              duration={500}
              px={2}
              py={1}
              rounded={"md"}
              color={"white"}
              _hover={{
                textDecoration: "none",
                color: "#01497C",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              to="skills"
              className="nav-link skills"
            >
              Skills
            </Link>

            <Link
              spy={true}
              as={ScrollLink}
              smooth={true}
              duration={500}
              px={2}
              py={1}
              rounded={"md"}
              color={"white"}
              _hover={{
                textDecoration: "none",
                color: "#01497C",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              to="projects"
              className="nav-link projects"
            >
              Projects
            </Link>
            <Link
              spy={true}
              as={ScrollLink}
              smooth={true}
              duration={500}
              px={2}
              py={1}
              rounded={"md"}
              color={"white"}
              _hover={{
                textDecoration: "none",
                color: "#01497C",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              to="contact"
              className="nav-link contact"
            >
              Contact
            </Link>
          </HStack>
          {/* </HStack> */}
          <Flex alignItems={"center"}>
            <Button
              // as="a"
              fontWeight={"bold"}
              rightIcon={<DownloadIcon />}
              // href={vivek}
              download={vivek}
              className="nav-link resume"
              id="resume-button-1"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/11EtYbNr4U93xYuxwI2VPvYyidMa9j9gJ/view?usp=drive_link"
                )
              }
            >
              {" "}
              <a download="Vivek_Singh_Tomar_Resume.pdf" href={vivek} target={"blank"} id="resume-link-1">
                Resume
              </a>
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
