import { useState } from 'react'
import Navbar from '../src/Components/Navbar/Navbar'
import Footer from '../src/Components/Foooter/Footer'
import Home from '../src/Components/Home/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
     <Navbar></Navbar>
     <Home></Home>
     <Footer></Footer>
   </>
  )
}

export default App
