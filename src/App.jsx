import { useState } from 'react'
import reactLogo from './idone_assets/react.svg'
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
import DemoFormSection from './components/DemoFormSection'
import Footer from './components/Footer'

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
     <Hrleaders/>
     <FAQSection/>
     <DemoFormSection/>
     <Footer/>
     {/* <Cards /> */}
    </>
  )
}

export default App
