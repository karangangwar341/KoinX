import React from 'react'
import Chart from './LeftSide/Chart'
import Header2 from './LeftSide/Header2'
import Sentiment from './LeftSide/Sentiment'
import AboutBitcoin from './LeftSide/AboutBitcoin'
import Team from './LeftSide/Team'
import Tokenomics from './LeftSide/Tokenomics'

const Left = () => {
  return (
    <div className=' pl-14 '>
      <Chart/>
      <Header2/>
      <Sentiment/>
      <AboutBitcoin/>
      <Tokenomics/>
      <Team/>
    </div>
  )
}

export default Left
