import troubleshoot from '../assets/Computer troubleshooting-amico.svg'
import ciscoimg from "../assets/cisco_img.png"
import paloalto from "../assets/palo alto.png"
import checkpoint from "../assets/Check Point.png"

function About () {
    return (
        <>
        <section className="h-4/5 m-0 p-0 w-full bg-gradient-to-b from-gray-100 to-gray-200">
            <div className="grid grid-cols-2 items-center gap-28 pb-5 px-28">
                <div>
                    <h1 className='font-Inter text-center font-bold mb-10 text-6xl text-[#f54014ff]'>Our range of solutions</h1>
                    <p className="text-[#2a1e5cff] font-medium text-2xl text-center">
                       Whether you require network design, troubleshooting, performance optimization,
                       or security assessments, our consultations offer expert guidance and recommendations to enhance your network&apos;s performance, scalability, and resilience.
                    </p>
                </div>
                <img className='object-cover' src={troubleshoot}></img>
            </div>
        </section>
        <section className="pt-32 h-4/5 w-full bg-gray-200">
            <h1 className='font-Inter mb-24 font-bold text-center text-[#2a1e5cff] text-6xl'>Certifications we provide training for</h1>
            <div className='flex justify-around'>
                <div className='w-96 h-96 flex items-center justify-center rounded-full bg-gradient-to-b from-[#63adf2ff] to-transparent'><img className="w-3/5" src={ciscoimg}></img></div>
                <div className='w-96 h-96 flex items-center justify-center rounded-full bg-gradient-to-b from-[#63adf2ff] to-transparent'><img className='w-4/5' src={paloalto}></img></div>
                <div className='w-96 h-96 flex items-center justify-center rounded-full bg-gradient-to-b from-[#63adf2ff] to-transparent'><img className='w-3/5' src={checkpoint}></img></div>
            </div>
            <div className=''></div>
        </section>
        <section className="h-4/5 p-0 m-0 w-full bg-gradient-to-b from-gray-200 to-gray-100">
        </section>
       
        </>
    )

}

export default About