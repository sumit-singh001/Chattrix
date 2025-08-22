import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router';
import { BadgeCent } from 'lucide-react';
import useSignUp from '../hooks/useSignUp.js';

const SignUppPage = () => {
  const [signupData, setSingnupData] = useState({
    fullName:"",
    email:"",
    password:""
  })


  const {signupMutation,isPending,error} = useSignUp();


  const handleSignUp = (e) => {
     e.preventDefault();
     signupMutation(signupData);
  }
  return (
    <div className='h-screen flex items-ceter justify-center p-4 sm:p-6 md:p-8' data-theme="forest">
      <div className='border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100
      rounded-xl shadow-lg overflow-hidden'>
      {/*Left Part */}
        <div className='w-full lg:w-1/2 p-4 sm:p-8 flex flex-col'>
          <div className='mb-4 flex items-center justify-start gap-2'>
            <BadgeCent className='size-9 text-primary'/>
            <span className='text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-tighter'>Chattrix
            </span>
          </div>

          {/*error*/}
          {error && (
            <div  className='alert alert-error mb-4'>
              <span>
                {error.response.data.message}
              </span>
            </div>
          )}

         <div className='w-full'>
          <form onSubmit={handleSignUp}>
            <div className='space-y-4'>
              <div>
                <h2 className='text-xl font-semibold'>Create an Account</h2>
                <p className='text-sm opacity-70'>Join Chattrix and start your learning language adventure</p>
              </div>
              <div className='space-y-3'>
                <div className='form-control w-full'>
                  <label className='lavel'>
                    <span className='label-text'>Full Name</span>
                  </label>
                  <input type="text" placeholder='Sumit Singh' className='input input-bordered w-full' value={signupData.fullName} 
                  onChange={(e) => setSingnupData({...signupData,fullName: e.target.value})} required/>
                </div>
                <div className='form-control w-full'>
                  <label className='lavel'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input type="text" placeholder='Eg.Sumitk@gmail.com' className='input input-bordered w-full' value={signupData.email} 
                  onChange={(e) => setSingnupData({...signupData,email: e.target.value})} required/>
                </div>
                <div className='form-control w-full'>
                  <label className='lavel'>
                    <span className='label-text'>Password</span>
                  </label>
                  <input type="password" placeholder='******' className='input input-bordered w-full' value={signupData.password} 
                  onChange={(e) => setSingnupData({...signupData,password: e.target.value})} required/>
                  <p className='text-xs opacity-70 mt-1'>Password must be at least 6 charecters</p>
                </div>
                <div className='form-control'>
                  <label className='label cursor-pointer justify-start gap-2'>
                    <input type="checkbox" className='checkbox checkbox-sm' required/>
                    <span className='text-xs leading-tight'>
                      I agree to the{" "}
                      <span className='text-primary hover:underline'>terms of service</span> and{" "}
                      <span className='text-primary hover:underline'>privacy policy</span>
                    </span>
                  </label>
                </div>

                <button className='btn btn-primary w-full' type='submit'>
                  {isPending ? (<>
                  <span className='loading loading-spinner loading-xs'>
                  </span>
                    Loading...
                  </>) : ("Create Account")}
                </button>

                <div className='text-center mt-4'>
                  <p className='text-sm'>
                    Already have an Account?{" "}
                    <Link to='/login' className='text-primary hover:underline'>
                    Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
         </div>
         </div>

      {/*Right Part */}
      <div className='hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center'>
        <div className='max-w-md p-8'>
          <div className='relative aspect-square max-w-sm mx-auto'>
            <img src="/i.png" alt="Language Connection illustration" className='h-full w-full' />
          </div>

          <div className='text-center space-y-3 mt-6'>
            <h2 className='text-xl font-semibold'>Connect with language partners worldwide</h2>
            <p className='opacity-70'>
              Practice conversation,make friends, and improve your language skill together
            </p>
          </div>
        </div>
      </div>

      </div>

    </div>
  )
}

export default SignUppPage
