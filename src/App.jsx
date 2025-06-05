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

function App() {

  return (
    <>
     <PartnerLogos/>
     <AttendanceOptions/>
     <HRFeatures/>
     <IndustriesGrid/>
     <CustomIndustrySection/>
     {/* <Cards /> */}
    </>
  )
}

export default App
