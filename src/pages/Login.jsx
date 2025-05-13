import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('login');
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
        </div>
        {currentState === 'login' ? '' :
        <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name'/>}
        <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email'/>
        <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password'/>

        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'>Forgot Your Password ?</p>
            {
              currentState === 'login' 
              ? <p onClick={() => setCurrentState('signup')} className='cursor-pointer'>Don't have an account? </p>
              : <p onClick={() => setCurrentState('login')} className='cursor-pointer'>Create an account? </p>
          
            }
        </div>
        <button className='bg-black text-white font-light px-4 py-2 text-sm'>{currentState === 'login' ? 'Login' : 'Sign Up'}</button>
        </form>
  )
}

export default Login
