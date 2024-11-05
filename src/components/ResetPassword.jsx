import React from 'react'

const ResetPassword = ({setPasswordFalse}) => {
  return (
    <div className="border-2 h-[35rem] flex flex-col gap-[1.5rem] w-1/2 items-start px-[4rem] justify-start py-[3rem]">
        <p className='uppercase font-bold text-sm'>Reset your password</p>
        <p>We will send you an email to reset your password</p>
        <input type="text" placeholder='Email' className='w-full py-3 px-2 border-[1px] border-gray-400 rounded-sm focus:border-gray-500 focus:outline-none'/>
        <div className='flex justify-between items-center w-full'>
            <button className='py-1 px-2 text-white font-semibold bg-black hover:bg-white hover:text-black border-[1px] border-black hover:transition-colors'>Submit</button>
            <button onClick = {setPasswordFalse}>cancel</button>
        </div>
    </div>
  )
}

export default ResetPassword