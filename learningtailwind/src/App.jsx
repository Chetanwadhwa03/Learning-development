import React from 'react'
import Button from './components/Button.jsx'



function App() {
  return (
    <>
      <div className="container min-h-screen flex flex-col justify-center items-center bg-[#07192f] text-white">
        <div className="insidecontainer  flex flex-col justify-center items-center gap-15">
          <div className="title">
            <span>Logo</span> Webinar.gg
          </div>
          <div className="content  flex flex-col justify-center items-center gap-10">
            <h1 className='text-3xl font-bold'>Verify Your age</h1>
            <p className='text-sm text-gray-400'>Please confirm your Birth year. This data will not be stored.</p>
            <div className="submit flex flex-col items-center w-full gap-3 ">
              <input className='w-full my-3 bg-[#1b3a5d] rounded-md outline-none py-2 px-2' type='text' placeholder='Enter your Birth year'></input>
              <button  className='bg-[#758b9f] rounded-md w-full py-2.5'>Continue</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
