import logo from '../assets/LogoMakr-89e2Tm-removebg-preview-99x127.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar ({currentPage}){

  const [Visiblity, setVisiblity] = useState(false)

  const hamburger = () => {
    setVisiblity(!Visiblity) 
    console.log(Visiblity)
  }

    return (
        <>
         <nav className={`flex items-center top-0  ${currentPage == 'home' ? 'md:justify-between justify-around' : 'justify-between'} w-full bg-white min-h-fit`}>
          <Link to="/"><img src={logo} className={`logo px-12 pt-3 h-[7em]`}></img></Link>
          <ul className={`flex items-center ${currentPage == 'home' ? 'hidden' : ''} md:hidden mx-10`}>
            <Link to='/'>
            <li className={`mx-4 text-xl text-black hover:text-[#f56a14] font-Inter`}>Home</li>
            </Link>
            <Link to='/About'>
            <li className={`mx-4 text-xl text-black hover:text-[#f56a14] font-Inter`}>About</li>
            </Link>
            <Link to='/Contact'>
            <li className={`mx-4 text-xl text-black hover:text-[#f56a14] font-Inter`}>Contact</li>
            </Link>
          </ul>
          <button onClick={hamburger} className='md:block hidden mx-10 font-bold text-3xl'>☰</button>
        </nav>
        {/* Hamburger Navigaton */}
            <ul className={`w-full h-96 flex flex-col align-middle ${Visiblity === true && currentPage !== 'home' ?  '' : 'hidden'}`}>
            
              <li className={`mx-auto h-1/3 w-1/4 leading-[90px]  text-center text-xl text-black hover:text-[#f56a14] font-Inter`}><Link to='/'>Home</Link></li>
             
              <li className={`mx-auto w-1/4 leading-[90px]  text-center h-1/3 text-xl text-black hover:text-[#f56a14] font-Inter`}><Link to='/About'>About</Link></li>
            
              <li className={`mx-auto w-1/4 leading-[90px] text-center h-1/3 text-xl text-black hover:text-[#f56a14] font-Inter`}><Link  to='/Contact'>Contact</Link></li>
        
            </ul>
        </>
    )


}

export default Navbar
