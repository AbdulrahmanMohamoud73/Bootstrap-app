import logo from '../assets/LogoMakr-89e2Tm-removebg-preview-99x127.png'
import { Link } from 'react-router-dom'

function Navbar (){
    return (
        <>
         <div className='flex items-center top-0 justify-between sm:justify-around w-full bg-slate-50 min-h-fit'>
          <Link to="/"><img src={logo} className='logo px-12 pt-4 h-[7rem]'></img></Link>
          <ul className='flex items-center sm:hidden mx-10'>
            <Link to='/About'>
            <li className='mx-4 text-xl text-black hover:text-[#f56a14] font-Inter'>About</li>
            </Link>
            <Link to='/Contact'>
            <li className='mx-4 text-xl text-black hover:text-[#f56a14] font-Inter'>Contact</li>
            </Link>
          </ul>
        </div>
        </>
    )


}

export default Navbar
