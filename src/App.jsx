import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/aboutme' element={<AboutMe />}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>

    </>
  )
}

export default App
