import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
function App() {
  

  return (
    <>
      
        <Routes>
        <Route path="/Navbar" element={<Navbar/>} />
        <Route path="/" element={<Landing/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        </Routes>
        {/* <div className='grid items-center w-screen grid-cols-2 grid-rows-2 h-5/6 bg-stone-50 justify-items-center'>
          <div className='w-1/3 rounded-lg h-4/5 bg-slate-200'></div>
          <div className='w-1/3 rounded-lg h-4/5 bg-slate-200'></div>
          <div className='w-1/3 rounded-lg h-4/5 bg-slate-200'></div>
          <div className='w-1/3 rounded-lg h-4/5 bg-slate-200'></div>
        </div> */}
    </>
  )
}

export default App
