import React from 'react'
import Button from './components/Button.jsx'
import { useState } from 'react'
import Otp from './components/Otp.jsx';


function App() {

  const [movefwd, setmovefwd] = useState(false);
  const [useremail, setuseremail]= useState('');

  function onchange(){
    setuseremail('chetanwadhwa03@gmail.com')
  }
  

  return (
    <>
      <div className="container min-h-screen flex flex-col justify-center items-center bg-[#07192f] text-white">
        <div className="insidecontainer  flex flex-col justify-center items-center gap-15">
          <div className="title">
            <span>Logo</span> Webinar.gg
          </div>
          <div className="content  flex flex-col justify-center items-center gap-10">
            <h1 className='text-3xl font-bold'>Check Your Email for A Code</h1>
            <p className='text-sm text-gray-400'>Please enter the verification code sent to your email id {useremail}</p>
            <Otp movefwd={movefwd} setmovefwd={setmovefwd}/>
            <div className="submit flex flex-col items-center w-full gap-3 ">
              {/* <input onChange={oninputchange}  className='w-full my-3 bg-[#1b3a5d] rounded-md outline-none py-2 px-2' type='text' placeholder='Enter your Birth year'></input> */}
              <Button movefwd={movefwd}/>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
