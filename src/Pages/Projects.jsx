import React from "react";
import { Box, Text } from "@chakra-ui/react";
import project1 from "../Data/project1.png"
import project2 from "../Data/project2.png"
import project3 from "../Data/project3.png"
import project4 from "../Data/project4.png"
import ProjectCards from "./ProjectCards";
import "./Project.css"
const  Projects = () => {
  const projectData = [
    {
      id: 1,
      imageSrc: project1,
      title: "Desk Time Clone",
      description:
        "The Desktime.com website is Time tracking app for Businesses & Freelancers. A desktop and mobile time tracking app with powerful features for productivity measurement, attendance tracking, and effective workflow management.",
      features: ["Home Page", "Login & Sign Up Page", "Account Information"],
      techStacks: ["HTML", "CSS", "JS"],
      github: "https://github.com/VivekTomar03/Code-Project",
      live: "https://inquisitive-palmier-bd9e1f.netlify.app/",
    },
    {
      id: 2,
      imageSrc: project2,
      title: "Lifestyle Store Clone",
      description:
        "Lifestyle Store is an E-Commerce website which speciaizes in selling clothes and styling products. ",
      features: ["Home Page", "Login & Sign Up Page", "Product Page" , "Cart Page", "Payment Gateway", "Admin Side"],
      techStacks: ["HTML", "CSS", "JS"],
      github: "https://github.com/VivekTomar03/urbane-look-6820",
      live: "https://stylezillajs201.netlify.app/",
    },
    {
      id: 3,
      imageSrc: "https://i.pinimg.com/736x/fc/4a/14/fc4a14b464e1ce38f073dbe5c724d033.jpg",
      title: "Movie Verse",
      description:
        "Movie Verse online booking for movies and live events, accompanied by a helpful chatbot for any assistance you need. ",
      features: ["Home Page", "Login & Sign Up Page", "Movie, Event Page" , "Sorting and Filtring", "Admin Side"],
      techStacks: ["Python", "Flask", "Angular", "MongoDB"],
      github: "https://github.com/VivekTomar03/MOVIE-VERSE-",
      live: "https://movieverse-pi.vercel.app/",
    },
    {
      id: 4,
      imageSrc: project3,
      title: "Dollar General Clone",
      description:
        "Dollar General is an America’s Online Store website which speciaizes in selling Daily Essential  Product. ",
      features: ["Home Page", "Login & Sign Up Page", "Product Page" , "Sorting and Filtring" , "Cart Page", "Admin Side"],
      techStacks: ["REACT JS", "CHAKRA UI", "CSS", "Json-Server"],
      github: "https://github.com/VivekTomar03/lovely-thing-6254",
      live: "https://rupees-general.vercel.app/",
    },
    
    {
      id: 5,
      imageSrc: project4,
      title: "Souled Store Clone",
      description:
        "Souled Store is an e-commerce website dealing with fashion and beauty products.",
      features: ["Home Page", "Login & Sign Up Page", "Men's, Women's & Kid's Page","Cart Page", "Add to cart functionality", "Admin Side"],
      techStacks: ["REACT JS", "CHAKRA UI", "CSS", "Json-Server"],
      github: "https://github.com/VivekTomar03/unbecoming-sofa-7946",
      live: "https://souled-apprials.vercel.app/",
    },
    {
      id: 6,
      imageSrc: "https://github.com/VivekTomar03/CaratLane--Clone/raw/main/Frontend/infinity-stone/src/ImageData/home.png",
      title: "CaratLane Clone",
      description:
        "CaratLane is an Indian physical and online jewelry retailer, headquartered in Chennai, India Where you can purchase Rings , Earrings ect.",
      features: ["Home Page", "Login & Sign Up Page", "Rings, Earings Page","Cart Page", "Add to cart functionality", "Admin Side"],
      techStacks: ["REACT", "Redux", "CHAKRA-UI", "MongoDB", "Node-js"],
      github: "https://github.com/VivekTomar03/CaratLane--Clone",
      live: "https://inifinestoneclone.vercel.app/",
    }
  ];

  return (
    <Box id="projects" paddingTop={"100"}>
      <Box>
        <Text className="neon" fontSize="4xl" as="b">
          My Projects
        </Text>
        {projectData.reverse().map((elem) => (
          <ProjectCards key={elem.id} {...elem}/>
    
        ))}
      </Box>
    </Box>
  );
};
export default Projects
