import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './Components/Navbar'
import Main from './Components/Main'

function App() {
  return (
    <div className='bg-blue-100/35 height-full gap-8'>
      <Navbar/>
      <Main/>
    </div>
  )
}

export default App
