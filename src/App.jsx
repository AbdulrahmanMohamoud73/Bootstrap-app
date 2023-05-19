import './App.css'
import logo from './assets/LogoMakr-89e2Tm-removebg-preview-99x127.png'
import heroimg from './assets/Office work-rafiki.svg'
function App() {
  

  return (
    <>
      <div className='w-screen h-screen'>
        <div className='flex items-center justify-between w-screen bg-slate-100 h-1/6'>
          <img src={logo} className='mx-10 h-3/4'></img>
          <ul className='flex items-center mx-10'>
            <li className='mx-4 text-xl font-medium text-black font-Inter'>About</li>
            <li className='mx-4 text-xl font-medium text-black font-Inter'>Our Services</li>
            <li className='mx-4 text-xl font-medium text-black font-Inter'>Contact</li>
          </ul>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 items-center w-screen gap-x-16 pl-16 bg-gray-100 h-5/6'>
            <div className='row-span-2'>
              <h1 className='font-bold font-Inter text-8xl my-10'> We Do Networks </h1>
              <h2 className='text-3xl font-Inter'>We provide comprehensive consultation services to help businesses <span className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400'>optimize</span> their network infrastructure.</h2>
            <button className='h-14 w-36 rounded-full border-4 border-zinc-700 my-7'><p className='font-Inter text-lg font-medium'>Learn more</p></button>
            </div>
            <img src={heroimg} className='h-full row-span-2'></img>
        </div>
        {/* <div className='grid items-center w-screen grid-cols-2 grid-rows-2 h-5/6 bg-stone-50 justify-items-center'>
          <div className='w-1/3 rounded-lg h-4/5 bg-slate-200'></div>
          <div className='w-1/3 rounded-lg h-4/5 bg-slate-200'></div>
          <div className='w-1/3 rounded-lg h-4/5 bg-slate-200'></div>
          <div className='w-1/3 rounded-lg h-4/5 bg-slate-200'></div>
        </div> */}
      </div>
    </>
  )
}

export default App
