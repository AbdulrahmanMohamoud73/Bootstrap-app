import troubleshoot from '../assets/Computer troubleshooting-amico.svg'
import ciscoimg from "../assets/cisco_img.png"
import paloalto from "../assets/palo alto.png"
import checkpoint from "../assets/Check Point.png"
import learn from "../assets/Webinar-bro.svg"
import Navbar from './Navbar'

function About () {
    return (
        <>
        <Navbar currentPage={'about'} />
        <section className="h-fit m-0 pb-0 w-full bg-white">
            <div className="lg:flex lg:flex-col grid grid-cols-2 sm:gap-0  items-center gap-20 pb-7 px-16">
                <div>
                    <h1 className='font-Inter text-center font-semibold my-5 text-6xl text-black'>Our Services</h1>
                    <p className="text-black sm:text-lg font-Inter text-xl text-center">
                       Whether you require network design, troubleshooting, performance optimization,
                       or security assessments, our consultations offer expert guidance and recommendations to enhance your network&apos;s performance, scalability, and resilience.
                    </p>
                </div>
                <img className='object-cover lg:hidden' src={troubleshoot}></img>
            </div>
        </section>
        <section className="py-7 h-2/5 w-full bg-gray-200">
            <h1 className='font-Inter my-10 mx-3 font-bold text-center text-[#63adf2ff] text-5xl'>Our Specialised Training</h1>
            <div className='flex md:flex-col items-center justify-around'>
                <div className='card'><img className="w-1/2" src={ciscoimg}></img></div>
                <div className='card'><img className='w-3/5' src={paloalto}></img></div>
                <div className='card'><img className='w-1/2' src={checkpoint}></img></div>
            </div>
        </section>
        <div className='bg-gradient-to-b bg-slate-50 min-h-screen text-center'>
        <div>
            {/* <p className='font-Inter lg:pt-32 mx-10 text-center text-semibold text-xl'> We offer customized programs designed to equip individuals and teams with the expertise required to excel in the field of networking</p>
            </div>
            <div className='grid grid-cols-2 md:flex md:justify-center'>
                <div>
                        <h1 className='font-Inter text-3xl my-8'> Cisco Professional Path</h1>
                        <p className='font-Inter text-lg my-8'>CCNA; Entry-Level</p>
                        <p className='font-Inter text-lg my-8'>CCNP; Expert-Level</p>
                        <p className='font-Inter text-lg my-8'>CCIE; World-Class</p>
                    <h1 className='font-Inter text-3xl my-8'>Other Paths</h1>
                    <h1 className='font-Inter text-xl my-8'>CheckPoint CCSA</h1>
                    <h1 className='font-Inter text-xl my-8'>Palo Alto PCCSA</h1>
                </div> */}
                <img className="md:hidden lg:h-3/4" src={learn}></img>
            </div>
            </div>
        </>
    )

}

export default About