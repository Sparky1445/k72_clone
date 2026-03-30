import React from 'react'
import { Routes, Route , Link} from 'react-router-dom'
import Home from './pages/home.jsx'
import Agence from './pages/agence.jsx'
import Projects from './pages/projects.jsx'
import Logo from './utils/Logo.jsx'
import CloseButton from './utils/CloseButton.jsx'

const App = () => {
  return (
    <div className='absolute'>
    <Logo />
    <CloseButton />
      {/* <Link className='text-2xl mr-5 text-blue-600' to="/projects">Projects</Link> */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App