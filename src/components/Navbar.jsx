import logo from '../assets/LogoMakr-89e2Tm-removebg-preview-99x127.png'
import { Link } from 'react-router-dom'

function Navbar (){
    return (
        <>
         <div className='flex items-center sticky top-0 justify-between w-full bg-gray-100 h-1/6'>
          <Link to="/"><img src={logo} className='mx-10 h-28'></img></Link>
          <ul className='flex items-center mx-10'>
            <Link to='/About'>
            <li className='mx-4 text-xl font-medium tet-black font-Inter'>About</li>
            </Link>
            <Link to='/Contact'>
            <li className='mx-4 text-xl font-medium text-black font-Inter'>Contact</li>
            </Link>
          </ul>
        </div>
        </>
    )


}

export default Navbar
