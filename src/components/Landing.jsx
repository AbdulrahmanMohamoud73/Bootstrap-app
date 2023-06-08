import { Link } from 'react-router-dom'
import heroimg from '../assets/Office work-rafiki.svg'

{/*#f54014*/}


function Landing (){

    return (
        <>
        <div className='grid grid-cols-2 md:flex md:flex-col md:text-center grid-rows-2 items-center w-screen gap-x-16 pl-16 bg-gray-100 sticky h-5/6'>
            <div className='row-span-2'>
              <h1 className='font-bold font-Inter md:mx-5 text-8xl my-10'> We Do Networks </h1>
              <h2 className='text-3xl md:mx-10 font-Inter'>We provide comprehensive consultation services to help businesses <span className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#f5d547ff]'>optimize</span> their network infrastructure.</h2>
              <Link to='/About'>
            <button type='button' className='h-14 w-36 rounded-full border-4 border-[#2a1e5cff] my-7 font-Inter text-lg font-medium list-none'>
                Learn more
            </button>
            <button type='button' className='h-14 w-36 m-5 rounded-full bg-[#f0ae3ce5] my-7 font-Inter text-lg font-medium list-none'> Contact Us</button>
            </Link>
            </div>
            <img src={heroimg} className='h-full md:hidden row-span-2'></img>
        </div>
        </>
    )

}


export default Landing