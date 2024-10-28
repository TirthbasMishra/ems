import React, { useState } from 'react'

const Login = ({handleLogin}) => {
   

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const submitHandler = (e) =>{
      e.preventDefault()
      handleLogin(email,password)
      setEmail("")
      setPassword("")
   }



  return (
    <> 
    {/* Fragments */}
      <div className='flex h-screen w-screen items-center justify-center'>
         <div className='border-2 rounded-xl border-emerald-600 p-20'>
             <h1 className='text-3xl mb-5 font-bold'>Login Page 🎉</h1>
            <form 
            onSubmit={(e) => {
               submitHandler(e)
            }}
            
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e) => 
                setEmail(e.target.value)
                }
                required
                type="email" className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' placeholder="Enter your email" />
                
                <input 
                value={password}
                onChange={(e) => 
                setPassword(e.target.value)
                }
                required
                type="password" className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 mt-3'  placeholder="Password" />
                  <button type="submit" className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Login</button>
            </form>
           
         </div>
      </div>
    </>
  )
}

export default Login