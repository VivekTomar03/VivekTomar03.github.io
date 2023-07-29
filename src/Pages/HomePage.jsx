import React from 'react'
import { Box, Divider } from '@chakra-ui/react'
import About from './About'
import Skill from './Skill'
import Projects from './Projects'
import Contact from './Contact'
import Navbar from '../Components/Navbar'
import Githubinfo from './Githubinfo'
const HomePage = () => {
  return (
    <Box  id="home" bg={"#BAD7E9"} >
     <Navbar/>
      
      <About/>
      <Skill/>
      <Githubinfo/>
      <Projects/>
      <Divider/>
      <Contact/>
    </Box>
  )
}

export default HomePage
