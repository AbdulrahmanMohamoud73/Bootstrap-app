import { Link } from 'react-router-dom'
import heroimg from '../assets/Office work-rafiki.svg'
import Navbar from './Navbar';

{/*#f54014*/}


const Landing = () => {
    return (
        <>
        <div className='bg-white w-full h-screen overflow-auto'>
            <Navbar currentPage={'home'} />
             <div className=' w-full flex justify-center bg-white pt-2 h-3/5'>
                <div className='grid grid-cols-2 gap-x-16 mt-8 lg:p-0 pl-10 lg:flex lg:flex-col lg:text-center grid-rows-2 object-contain items-center'>
                    <div className='row-span-2'>
                        <h1 className='font-bold font-Inter md:text-5xl md:mx-5 text-7xl mb-3'> We Do Networks </h1>
                        <h2 className='text-3xl md:text-2xl lg:mx-10 font-Inter'>We provide comprehensive consultation services to help businesses <span className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#f5d547ff]'>optimize</span> their network infrastructure.</h2>
                        <div className="flex justify-start lg:justify-center space-x-4">
                            <Link to='/About'>
                                <button type='button' className='h-14 w-36 rounded-full border-4 border-[#2a1e5cff] my-7 font-Inter text-lg font-medium list-none'> Learn more </button>
                            </Link>
                            <Link to='/Contact'>
                                <button type='button' className='h-14 w-36 rounded-full bg-[#f0ae3ce5] my-7 font-Inter text-lg font-medium list-none'> Contact Us</button>
                            </Link>
                        </div>
                    </div>
                        <img src={heroimg} className=' row-span-2 lg:h-4/5 w-[95%]'></img>
                </div>
            </div>
        </div> 
        </>
       
    );
};

export default Landing;