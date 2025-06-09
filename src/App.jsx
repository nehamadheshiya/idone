import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AttendanceOptions from './components/AttendanceOptions'
import Cards from './components/Cards'
import PartnerLogos from './components/PartnerLogos'
import HRFeatures from './components/HRFeatures'
import IndustriesGrid from './components/IndustryCard'
import CustomIndustrySection from './components/CustomIndustrySection'
import Navbar from './components/Navbar'
import WhyChooseUs from './components/WhyChooseUs'
import BusinessImpactStats from './components/BusinessImpactStats'
import MediaSection from './components/MediaSection'
import FAQSection from './components/FAQSection'
import Hrleaders from './components/Hrleaders'

function App() {

  return (
    <>
     
     <Navbar/>
     <PartnerLogos/>
     <AttendanceOptions/>
     <HRFeatures/>
     <IndustriesGrid/>
     <CustomIndustrySection/>
     <WhyChooseUs/>
     <BusinessImpactStats/>
     <MediaSection/>
     <FAQSection/>
     {/* <Cards /> */}
     {/* <Hrleaders/> */}
    </>
  )
}

export default App
