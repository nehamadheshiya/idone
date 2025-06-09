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
     {/* <Cards /> */}
     <Hrleaders/>
    </>
  )
}

export default App
