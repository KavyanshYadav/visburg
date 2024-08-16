"use client";
import React, { useEffect } from 'react'
import { SignOut } from '../lib/auth'
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContex';
import NotesMenu from '../components/NotesMenu';

function Login() {
  const router = useRouter()
  const {user,signOut} = useAuth()

  useEffect(()=>{
    if(!user){
      router.push("/")
    }
  })

  return (
    <div className='flex flex-col items-start  h-full'>
        <button onClick={()=>{
          signOut()
          console.log(user?.email)
          router.push("/")
  }}>SignOut</button>
  <NotesMenu/>

    </div>
  )
}

export default Login