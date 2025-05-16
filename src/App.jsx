import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/Portfolio'
import Contact from './pages/Contact'
import Preuve01 from './pages/preuve_01'
import Preuve02 from './pages/preuve_02'
import Preuve03 from './pages/preuve_03'
import Preuve04 from './pages/preuve_04'
import Preuve05 from './pages/preuve_05'
import Preuve06 from './pages/preuve_06'
import Preuve07 from './pages/preuve_07'
import Preuve08 from './pages/preuve_08'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/preuve_01" element={<Preuve01 />} />
        <Route path="/preuve_02" element={<Preuve02 />} />
        <Route path="/preuve_03" element={<Preuve03 />} />
        <Route path="/preuve_04" element={<Preuve04 />} />
        <Route path="/preuve_05" element={<Preuve05 />} />
        <Route path="/preuve_06" element={<Preuve06 />} />
        <Route path="/preuve_07" element={<Preuve07 />} />
        <Route path="/preuve_08" element={<Preuve08 />} />
      </Routes>
    </div>
  )
}

export default App
