import React from "react";
import { Box, Text } from "@chakra-ui/react";
import ProjectCards from "./ProjectCards";
import cart1 from "../Data/cart1.png";
import cart2 from "../Data/cart2.png";
import cart3 from "../Data/cart3.png";
import cart4 from "../Data/cart4.png";
import soul1 from "../Data/soul0.png"
import soul2 from "../Data/solu1.png"
import soul3 from "../Data/soul2.png"
import soul4 from "../Data/soul3.png"
import movie1 from "../Data/movie1.png"
import movie2 from "../Data/movie2.png"
import movie3 from "../Data/movi3.png"
import movie4 from "../Data/movie4.png"
import style1 from "../Data/style1.png"
import style2 from "../Data/style2.png"
import style3 from "../Data/style3.png"
import style4 from "../Data/style4.png"
import desk1 from "../Data/desk1.png"
import desk2 from "../Data/desk2.png"
import desk3 from "../Data/desk3.png"
import desk4 from "../Data/desk4.png"




import "./Project.css";
const Projects = () => {
  const projectData = [
    {
      id: 1,
      imageSrc: [desk1, desk2, desk3, desk4],
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
      imageSrc: [style1, style2, style3, style4],
      title: "Lifestyle Store Clone",
      description:
        "Lifestyle Store is an E-Commerce website which speciaizes in selling clothes and styling products. ",
      features: [
        "Home Page",
        "Login & Sign Up Page",
        "Product Page",
        "Cart Page",
        "Payment Gateway",
        "Admin Side",
      ],
      techStacks: ["HTML", "CSS", "JS"],
      github: "https://github.com/VivekTomar03/urbane-look-6820",
      live: "https://stylezillajs201.netlify.app/",
    },
    {
      id: 3,
      imageSrc: [movie1, movie2, movie3, movie4],
      title: "Movie Verse",
      description:
        "Movie Verse online booking for movies and live events, accompanied by a helpful chatbot for any assistance you need. ",
      features: [
        "Home Page",
        "Login & Sign Up Page",
        "Movie, Event Page",
        "Sorting and Filtring",
        "Admin Side",
      ],
      techStacks: ["Python", "Flask", "Angular", "MongoDB"],
      github: "https://github.com/VivekTomar03/MOVIE-VERSE-",
      live: "https://movieverse-pi.vercel.app/",
    },
    // {
    //   id: 4,
    //   imageSrc: [cart1, cart2, cart3, cart4],
    //   title: "Dollar General Clone",
    //   description:
    //     "Dollar General is an America’s Online Store website which speciaizes in selling Daily Essential  Product. ",
    //   features: [
    //     "Home Page",
    //     "Login & Sign Up Page",
    //     "Product Page",
    //     "Sorting and Filtring",
    //     "Cart Page",
    //     "Admin Side",
    //   ],
    //   techStacks: ["REACT JS", "CHAKRA UI", "CSS", "Json-Server"],
    //   github: "https://github.com/VivekTomar03/lovely-thing-6254",
    //   live: "https://rupees-general.vercel.app/",
    // },

    {
      id: 5,
      imageSrc: [soul1, soul2, soul3, soul4],
      title: "Souled Store Clone",
      description:
        "Souled Store is an e-commerce website dealing with fashion and beauty products.",
      features: [
        "Home Page",
        "Login & Sign Up Page",
        "Men's, Women's & Kid's Page",
        "Cart Page",
        "Add to cart functionality",
        "Admin Side",
      ],
      techStacks: ["REACT JS", "CHAKRA UI", "CSS", "Json-Server"],
      github: "https://github.com/VivekTomar03/unbecoming-sofa-7946",
      live: "https://souled-apprials.vercel.app/",
    },
    {
      id: 6,
      imageSrc: [cart1, cart2, cart3, cart4],
      title: "CaratLane Clone",
      description:
        "CaratLane is an Indian physical and online jewelry retailer, headquartered in Chennai, India Where you can purchase Rings , Earrings ect.",
      features: [
        "Home Page",
        "Login & Sign Up Page",
        "Rings, Earings Page",
        "Cart Page",
        "Add to cart functionality",
        "Admin Side",
      ],
      techStacks: ["REACT", "Redux", "CHAKRA-UI", "MongoDB", "Node-js"],
      github: "https://github.com/VivekTomar03/CaratLane--Clone",
      live: "https://inifinestoneclone.vercel.app/",
    },
  ];

  return (
    <Box id="projects" paddingTop={"100"}>
      <Box>
        <Text className="neon" fontSize="4xl" as="b">
          My Projects
        </Text>
        {projectData.reverse().map((elem) => (
          <ProjectCards key={elem.id} {...elem} />
        ))}
      </Box>
    </Box>
  );
};
export default Projects;
