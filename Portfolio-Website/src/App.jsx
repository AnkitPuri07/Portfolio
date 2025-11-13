import { useState } from 'react'
import Navbar from '../src/Components/Navbar/Navbar'
import Footer from '../src/Components/Foooter/Footer'
import Home from '../src/Components/Home/Home'
import About from '../src/Components/About/About'
import Skills from '../src/Components/Skills/Skills'
import Projects from '../src/Components/Projects/Projects'
import Contact from '../src/Components/Contact/Contact'
import Education from '../src/Components/Education/Education'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div className= 'bg-gradient-to-r from-gray-950 to-violet-950'>

     <Navbar></Navbar>
     <Home></Home>
     <About/>
     <Skills/>
     <Education></Education>
     <Projects/>
     <Contact/>
     <Footer></Footer>
   </div>
    
   </>
  )
}

export default App
