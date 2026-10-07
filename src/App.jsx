import { Suspense, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Countries from './components/Countries/Countries'

const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
.then(res=> res.json())

function App() {
  

  return (
    <>
     
        
          <Suspense fallback={<p>Nadir Loading</p>}>
            <Countries countriesPromise={countriesPromise}></Countries>
          </Suspense>
         
        
       
    </>
  )
}

export default App
