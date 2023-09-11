import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import PersonalPage from './PersonalPage';

function App() {
 
  return (
   <div className='App items-center text-center '>
   <header className='bg-gray-800 p-4'>
  <h1 className='text-3xl text-white'>My Personal Page</h1>
   </header>
   <main className='items-center text-center '>
    <PersonalPage/>
   </main>
   </div>
  )
}

export default App
