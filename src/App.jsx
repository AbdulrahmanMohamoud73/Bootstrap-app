import './App.css'
import logo from './assets/LogoMakr-89e2Tm-removebg-preview-99x127.PNG'
function App() {
  

  return (
    <>
      <div className='w-screen bg-black h-1/6 flex justify-between items-center'>
        <img src={logo} className='h-3/4 mx-10'></img>
        <ul className='flex items-center mx-10'>
          <li className='text-white mx-4'>About</li>
          <li className='text-white mx-4'>Our Services</li>
          <li className='text-white mx-4'>Contact</li>
        </ul>
      </div>
    </>
  )
}

export default App
