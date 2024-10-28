import './App.css'
import desktopImg from '../public/hero-desktop.jpg'
import logo from '../public/logo.svg'
import arrow from '../public/icon-arrow.svg'

function App() {

  return (
    <>
     <div className='w-full h-screen bg-pattern bg-cover bg-no-repeat bg-center flex justify-between font-JosefinSans'>
      <div className='flex items-center justify-center'>
        <div className='w-2/5 h-full'>
        <div className='my-20'>
          <img src={logo} alt="Logo" />
        </div>
          <div className='py-20'>
            <h1 className='text-6xl font-light tracking-[.20em] text-desaturatedRed w-10/12'>WE&apos;RE <span className='font-semibold text-darkGrayishRed'>COMING SOON</span></h1>
            <p className='text-desaturatedRed py-6'>Hello fellow shoppers! We&apos;re currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
            <form action="" className='flex'>             
              <div className=' bg-white rounded-full mt-5 w-full border border-desaturatedRed flex justify-between'>
              <input type="text" placeholder='Email Address' className='p-3 ml-2 bg-transparent placeholder:text-desaturatedRed'/>
              <button id='button' className='py-3 px-10 rounded-full shadow-2xl hover:shadow-xl hover:shadow-desaturatedRed hover:opacity-80 shadow-desaturatedRed'><img src={arrow} alt="Sumbit"/></button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <img src={desktopImg} alt="Hero" className='h-screen'/>
     </div>
    </>
  )
}

export default App
