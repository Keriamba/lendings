import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './contains/Home'
import './App.css'
import SignUp from './contains/SignUp'
import Slider from "./components/ui-components/slider/Slider"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/dev' element={<Slider/>} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
