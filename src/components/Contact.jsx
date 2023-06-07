import mail from '../assets/Mail sent-rafiki.svg'

const Contact = () => {
  return (
    <>
    <section className="bg-gray-100 w-full flex flex-col justify-center h-5/6">
      <div className='p-0 m-0'>
        <h1 className="font-Inter text-center text-8xl">Contact Us</h1>
        <p className="text-center font-Inter text-lg m-5">You can contact us by e-mail through admin@dahirit.com</p>
      </div>
      <img className='h-96' src={mail}></img>
    </section>
    </>
  )
}

export default Contact