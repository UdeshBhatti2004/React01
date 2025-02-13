import React from 'react'
import Header from './Components/Header'
import HeaderTwo from './Components/HeaderTwo'
import Middle from './Components/Middle'
import MiddleTwo from './Components/MiddleTwo'
import Last from './Components/Last'
import LastTwo from './Components/LastTwo'
import LocomotiveScroll from 'locomotive-scroll';




function App() {
       
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Header/>
      <HeaderTwo/>
      <Middle/>
      <MiddleTwo/>
      <Last/>
      <LastTwo/>
    </>
  )
}

export default App