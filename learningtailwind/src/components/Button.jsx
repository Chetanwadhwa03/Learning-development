import React from 'react'
import { useState } from 'react'

const Button = ({movefwd}) => {
  return (
    <>
      { !movefwd ? (<button  className='bg-[#758b9f] rounded-md w-full py-2.5 cursor-pointer'>Continue</button>) :
        <button  className='bg-[#40e0d0] rounded-md w-full py-2.5 cursor-pointer'>Continue</button>
       }
     
    </>
  )
}

export default Button
