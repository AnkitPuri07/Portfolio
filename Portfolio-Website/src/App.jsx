import { useState } from 'react'
import Navbar from '../src/Components/Navbar/Navbar'
import Footer from '../src/Components/Foooter/Footer'
import Home from '../src/Components/Home/Home'
import About from '../src/Components/About/About'
import Skills from '../src/Components/Skills/Skills'
import Projects from '../src/Components/Projects/Projects'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
     <Navbar></Navbar>
     <Home></Home>
     <About/>
     <Skills/>
     <Projects/>
     <Footer></Footer>
   </>
  )
}

export default App
