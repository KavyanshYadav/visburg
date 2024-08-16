"use client";
import { useAuth } from "@/context/AuthContex";
import Image from "next/image";
import signUp, { signinWithGoogle } from "./lib/auth";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoginMenu from "./components/LoginMenu";
export default function Home() {
  const {user} = useAuth()
  const[loading,setloading] = useState<boolean>(true)
  console.log(user?.email )
  const router = useRouter()
  useEffect(()=>{
    if(user){
      router.push("/dashboard")
    }
    setloading(false)

  },[user,router])

  return (
    <main className="h-[100vh] w-[100vw] bg-white relative z-[1]">
  {loading ?<div>auth</div> : <> <div className="relative p-4 z-[40] bg-[#202020] h-full left-[50%]  flex items-center flex-col w-min">
    <LoginMenu/>
    
  </div>
  <div className="absolute bg-[#191919] top-0 w-full h-full z-[1]">
    {/* <img
      alt="name"  
      className="w-full h-full top-0 bg-black"
      src="https://static.vecteezy.com/system/resources/previews/006/852/804/non_2x/abstract-blue-background-simple-design-for-your-website-free-vector.jpg"
    /> */}
  </div></>}
</main>
  );
}
