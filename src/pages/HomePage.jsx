import React from 'react'
import Footer from "../components/general/Footer"
import Topnav from "../components/general/Topnav"
import HomeHero from "../components/homepage/HomeHero"
import OurExperiences from '../components/homepage/OurExperiences'
import WhyUs from '../components/homepage/WhyUs'

function HomePage() {
  return (
    <div>
      <Topnav/>
      <HomeHero/>
      <OurExperiences/>
      <WhyUs/>
      <Footer/> 
    </div>
  )
}

export default HomePage