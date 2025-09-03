import SignInFormClient from '@/modules/auth/components/sign-in-form-client'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
    <Image src={"/login.svg"} alt="Login-Image" height={280} width={280} className='m-5.5 object-cover' />
    <SignInFormClient/>
    </>
  )
}

export default page