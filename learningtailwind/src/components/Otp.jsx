import React from 'react'
import { useRef } from 'react'

const Otp = ({ movefwd,setmovefwd}) => {

    const inputref = useRef([]);

    function handleotpchange(e, index) {

        if(index === 0){
           setmovefwd(e.target.value.length>0)
        }

        if (e.target.value.length === 1) {
            inputref.current[index + 1].focus();
        }
        else {
            if (index - 1 >= 0) {
                inputref.current[index - 1].focus();
            }
        }
    }

    return (
        <>
            <div className="code flex justify-center gap-2">
                <input ref={(el)=>{inputref.current[0]=el}} onChange={(e)=>{handleotpchange(e,0)}} type='text' className='bg-[#18406b] w-9 h-9 outline-none rounded-md p-3 text-sm'></input>
                <input ref={(el)=>inputref.current[1]=el} onChange={(e)=>{handleotpchange(e,1)}} type='text' className='bg-[#18406b] w-9 h-9 outline-none rounded-md p-3 text-sm'></input>
                <input ref={(el)=>inputref.current[2]=el} onChange={(e)=>{handleotpchange(e,2)}} type='text' className='bg-[#18406b] w-9 h-9 outline-none rounded-md p-3 text-sm'></input>
                <input ref={(el)=>inputref.current[3]=el} onChange={(e)=>{handleotpchange(e,3)}} type='text' className='bg-[#18406b] w-9 h-9 outline-none rounded-md p-3 text-sm'></input>
                <input ref={(el)=>inputref.current[4]=el} onChange={(e)=>{handleotpchange(e,4)}} type='text' className='bg-[#18406b] w-9 h-9 outline-none rounded-md p-3 text-sm'></input>
                <input ref={(el)=>inputref.current[5]=el} onChange={(e)=>{handleotpchange(e,5)}} type='text' className='bg-[#18406b] w-9 h-9 outline-none rounded-md p-3 text-sm'></input>
            </div>
        </>
    )
}

export default Otp
