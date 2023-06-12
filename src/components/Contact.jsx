import mail from '../assets/Mail sent-rafiki.svg'

const Contact = () => {
  return (
    <>
    <section className="bg-gray-100 w-full overflow-hiddenen flex flex-col justify-center h-max-5/6">
      <div className='p-0 m-0'>
        <h1 className="font-Inter mx-5 text-center text-[#63adf2ff] text-8xl">Contact Us</h1>
        <p className="text-center font-Inter text-lg m-5">You can contact us by e-mail through admin@dahirit.com</p>
      </div>
      <img className='h-96 md:h-80' src={mail}></img>
    </section>
    </>
  )
}

export default Contact