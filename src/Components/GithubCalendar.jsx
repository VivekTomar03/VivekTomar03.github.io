import React from 'react';
import {Box, Heading} from '@chakra-ui/react';
import GitHubCalendar from "react-github-calendar";
import Typewriter from "typewriter-effect";
const GithubCalendar = () => {
  return (
    <div>
       <Box
       data-aos="fade-down"
       data-aos-easing="linear"
       data-aos-duration="1500"
        margin={"20px auto"}
        justifyContent={"center"}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        padding={"20px"}
        width={{ base: "90%", sm: "80%" }}
        borderRadius={"20px"}
        gap="20px"
      >
        <Heading m={5} style={{ color: "#01497C", textAlign: "center" }}>
          
          <Typewriter
              options={{
                strings: ["GitHub Calendar  🗓 "],
                autoStart: true,
                loop: true,
              }}
            />
        </Heading>
        <GitHubCalendar username="VivekTomar03" fontSize={16} color={"#01497C"} theme={"#01497C"} />
      </Box>
    </div>
  )
}

export default GithubCalendar