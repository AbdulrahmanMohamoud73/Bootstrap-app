import logo from '../assets/LogoMakr-89e2Tm-removebg-preview-99x127.png'
import { Link } from 'react-router-dom'

function Navbar ({currentPage}){
    return (
        <>
         <div className='flex items-center top-0 justify-between sm:justify-around w-full bg-slate-50 min-h-fit'>
          <Link to="/"><img src={logo} className='logo px-12 sm:p-3 pt-3 h-[7em]'></img></Link>
          <ul className={`flex items-center ${currentPage == 'home' ? 'hidden' : ''} mx-10`}>
            <Link to='/'>
            <li className={`mx-4 text-xl text-black hover:text-[#f56a14] font-Inter ${currentPage == 'home' ? 'hidden' : ''}`}>Home</li>
            </Link>
            <Link to='/About'>
            <li className={`mx-4 text-xl text-black hover:text-[#f56a14] font-Inter ${currentPage == 'about' ? 'hidden' : ''}`}>About</li>
            </Link>
            <Link to='/Contact'>
            <li className={`mx-4 text-xl text-black hover:text-[#f56a14] font-Inter ${currentPage == 'contact' ? 'hidden' : ''}`}>Contact</li>
            </Link>
          </ul>
        </div>
        </>
    )


}

export default Navbar
