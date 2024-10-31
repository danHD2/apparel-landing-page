import './App.css'
import desktopImg from '../public/hero-desktop.jpg'
import mobileImg from '../public/hero-mobile.jpg'
import logo from '../public/logo.svg'
import arrow from '../public/icon-arrow.svg'
import errIcon from '../public/icon-error.svg'
import { useState } from 'react'

function App() {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("true");
      return false;
    } else {
      setError('');
      return true;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail()
  }

  return (
    <>
     <div className='w-full h-screen bg-pattern bg-cover bg-no-repeat bg-center flex justify-between font-JosefinSans'>
      <div className='flex items-center justify-center'>
        <div className='md:w-3/5 h-full'>
        <div className='my-6 md:my-20 mx-8 md:mx-0'>
          <img src={logo} alt="Logo" className='w-24 md:w-auto'/>
        </div>
        <img src={mobileImg} alt="Mobile Hero" className='block md:hidden w-full' />
          <div className='py-16 text-center flex flex-col items-center md:items-start md:flex-none md:text-left md:py-20 px-8 md:px-0'>
            <h1 className='text-4xl md:text-6xl font-light tracking-[.20em] text-desaturatedRed w-10/12'>WE&apos;RE <span className='font-semibold text-darkGrayishRed'>COMING SOON</span></h1>
            <p className='text-desaturatedRed py-6'>Hello fellow shoppers! We&apos;re currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
            <form onSubmit={handleSubmit} className='flex w-full'>             
              <div className={`"bg-white rounded-full mt-5 w-full border flex justify-between ${error ? "border-softRed" : "border-desaturatedRed"}`}>
              <input type="text" id='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email Address' className='p-3 ml-2 w-2/3 bg-transparent placeholder:text-desaturatedRed'/>
              <div className='flex'>
              {error && <img src={errIcon} alt="Error" className='p-3'/>}
              <button id='button' type='submit' className='py-3 px-10 rounded-full shadow-2xl hover:shadow-xl hover:shadow-desaturatedRed hover:opacity-80 shadow-desaturatedRed'><img src={arrow} alt="Sumbit" className='w-3'/></button>
              </div>
              </div>
            </form>
            {error && <span className='text-xs text-softRed font-bold py-3 px-5'>Please provide a valid email</span>
            }
          </div>
        </div>
      </div>
      <img src={desktopImg} alt="Hero" className='h-screen hidden md:block'/>
     </div>
    </>
  )
}

export default App
