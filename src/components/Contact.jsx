import mail from '../assets/Mail sent-rafiki.svg'
import Navbar from './Navbar'


const Contact = () => {
  return (
    <>
    
    <div className='h-screen w-screen bg-gray-50'>
    <Navbar />
      <div className="bg-gray-50 max-w-full flex h-4/5 md:pt-5 object-cover flex-col justify-center items-center">
        <div className='p-0 m-0'>
          <h1 className="font-Inter mx-5 text-center text-[#63adf2ff] sm:text-5xl text-6xl">Contact Us</h1>
          <p className="text-center font-Inter lg:text-base text-lg m-5">You can contact us by e-mail through abdulrahman.mohamoud@dahirit.com</p>
        </div>

        <div className=' max-h-full'>
          <img className='h-full w-full' src={mail}></img>
          </div>
      </div>
    </div>
    </>
  )
}

export default Contact