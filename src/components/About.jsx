import troubleshoot from '../assets/Computer troubleshooting-amico.svg'
import ciscoimg from "../assets/cisco_img.png"
import paloalto from "../assets/palo alto.png"
import checkpoint from "../assets/Check Point.png"
import learn from "../assets/Webinar-bro.svg"

function About () {
    return (
        <>
        <section className="h-fit m-0 pb-0 w-full bg-gradient-to-b from-gray-100 to-gray-200">
            <div className="grid lg:grid-cols-2 items-center gap-28 lg:pb-5 px-28">
                <div>
                    <h1 className='font-Inter text-center font-semibold mb-10 text-7xl text-[#f56a14]'>Our range of solutions</h1>
                    <p className="text-[#2a1e5cff]  font-Inter text-xl text-center">
                       Whether you require network design, troubleshooting, performance optimization,
                       or security assessments, our consultations offer expert guidance and recommendations to enhance your network&apos;s performance, scalability, and resilience.
                    </p>
                </div>
                <img className='object-cover hidden lg:inline' src={troubleshoot}></img>
            </div>
        </section>
        <section className="py-24 h-fit w-full bg-gray-200">
            <h1 className='font-Inter mb-24 mt-10 font-bold text-center text-[#f56a14] text-6xl'>Our Specialised training</h1>
            <div className='flex justify-around'>
                <div className='lg:w-80 w-1/4 h-48 lg:h-96 flex items-center justify-center rounded-lg bg-[#ADD2F5]'><img className="w-3/5" src={ciscoimg}></img></div>
                <div className='lg:w-80 w-1/4 h-48 lg:h-96 flex items-center justify-center rounded-lg bg-[#ADD2F5]'><img className='w-4/5' src={paloalto}></img></div>
                <div className='lg:w-80 w-1/4 h-48 lg:h-96 flex items-center justify-center rounded-lg bg-[#ADD2F5]'><img className='w-3/5' src={checkpoint}></img></div>
            </div>
        </section>
        <div className='bg-gradient-to-b from-gray-200 to bg-gray-100 min-h-screen text-center'>
        <div>
            <p className='font-Inter lg:pt-32 mx-10 text-center text-semibold text-xl'> We offer customized programs designed to equip individuals and teams with the expertise required to excel in the field of networking</p>
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
                </div>
                <img className="md:hidden lg:h-3/4" src={learn}></img>
            </div>
            </div>
        </>
    )

}

export default About