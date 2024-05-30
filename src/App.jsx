
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Home1 from './Pages/Home/Home1'
import Home2 from './Pages/Home/Home2'
import About from './Pages/About/About'
import About1 from './Pages/About/About1'
import About2 from './Pages/About/About2'

function App() {


  return (
    <>
      {/* Nav */}

      <BrowserRouter>
        <nav>
          <Link to={'/home'}>Home</Link>
          <Link to={'/about'}>About</Link>
        </nav>
        <Routes>
          <Route path="home" element={<Home />}>
            <Route
              path="home1"
              element={<Home1 />}
            />
            <Route
              path="home2"
              element={<Home2 />}
            />
          </Route>
          <Route path='about' element={<About />}>
            <Route path='About1' element={<About1></About1>}></Route>
            <Route path='About2' element={<About2></About2>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
