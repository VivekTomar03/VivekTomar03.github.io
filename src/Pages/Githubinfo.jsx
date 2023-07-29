
import GithubCalendar from '../Components/GithubCalendar';
import "./Gitinfo.css"
import { Box, Container, Text, Image } from "@chakra-ui/react";

const Githubinfo = () => {
  return (
    <Container
      id="state"
      className="git-Calender"
      maxWidth={{ base: "100%", md: "80%" }}
      mt={10}
    >
      <Text  p={2} as="b" fontSize={"2xl"} className="git1">
        GitHub Information
      </Text>
      <Box mt={"45px"} className="git2" >
        <GithubCalendar
          className="react-activity-calendar"
          username={"VivekTomar03"}
        />
      </Box>
      <Box mt={50} align="center">
        <Text mt={30} p={2} as="b" fontSize={"2xl"} className="skillDes">
          <span  style={{margin:"5px"}} className="name1">My github Statistics</span>
        </Text>
        <Box mt={"45px"} id="stats">
          <Image
             data-aos="flip-left"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="1500"
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=VivekTomar03&theme=tokyonight"
            alt="github-streak-stats"
            theme="dark"
          />
          <br></br>
          <Image
           data-aos="flip-right"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="2000"
           boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=VivekTomar03&theme=tokyonight&hide_border=false&include_all_commits=true&count_public=true&count_private=true"
            alt="github-stats-card"
          />
          <br></br>
          <Image
           data-aos="flip-left"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="2500"
           boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=VivekTomar03&theme=tokyonight&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
            alt="github-top-langs"
          />
        </Box>
      </Box>
    </Container>
  );
};
export default Githubinfo;