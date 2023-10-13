import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import data from "../data.js"
import Jorney from "../components/Jorney"


function App() {
  let ar = data.map(ele => 
    {
      return (  <Jorney 
        {...ele}
      />)
    
    }
    
    )


  return (
    <>
      {ar}
      <h1>hello</h1>
    </>
  )
}

export default App
