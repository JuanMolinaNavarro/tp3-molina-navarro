import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import { useThemeStore } from './store/useThemeStore';
import { useEffect } from 'react';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";


function App() {

  const { darkMode, toggleDarkMode } = useThemeStore();

  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-light' : 'bg-light text-dark';
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);

  return (

    <div className={darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} style={{ minHeight: '100vh' }}>
      <div className="container py-4">
        <button className="btn btn-secondary" onClick={toggleDarkMode}>
          {darkMode ? <MdOutlineLightMode />
            : <MdOutlineDarkMode />
          }
        </button>
      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/aboutme' element={<AboutMe />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>


  )
}

export default App
