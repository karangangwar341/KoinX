import React from 'react'
import Header from './MainCenter/Header'
import Left from './MainCenter/Left'
import Right from './MainCenter/Right'

const Main = () => {
  return (
    <div className='w-full m-1 '>
     <Header/>
     <div className='flex gap-2'>
      <div className="w-2/3">
      <Left />
      </div>
      <div  className="w-1/3">
      <Right/>
      </div>
      
     </div>
    </div>
  )
}

export default Main
