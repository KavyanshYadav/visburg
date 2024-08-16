import { TextField } from '@radix-ui/themes'
import React, { forwardRef } from 'react'
import { Button } from "@radix-ui/themes";
import { signinWithGoogle } from '../lib/auth';

const Input = () =>{

}


const  LoginMenu=()=> {

  return (
    <div className="w-96 flex flex-col  ">
        <h1>Login</h1>
        <TextField.Root  size="2"  placeholder="Email">
            <TextField.Slot className='p-3'>
                Email
            </TextField.Slot>
        </TextField.Root>
        <TextField.Root size="2" placeholder="Email">
            <TextField.Slot>
                Password
            </TextField.Slot>
        </TextField.Root>
        <TextField.Root size="2" placeholder="Email">
            <TextField.Slot>
                name
            </TextField.Slot>
        </TextField.Root>
        
        <div className='flex flex-row  mt-4'>
            <Button className='mr-3 '>Login</Button>
            <Button>Signup</Button>
        </div>
        <div className='mt-3'>
            <Button className='mr-3' onClick={()=>{signinWithGoogle()}}>Google</Button>
            <Button>github</Button>

        </div>
    </div>
  )
}

export default LoginMenu