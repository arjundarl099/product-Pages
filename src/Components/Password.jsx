import React, { useState } from 'react'
import Button from '../shared/Button';
import { SlMagnifierAdd } from "react-icons/sl";

const Password = () => {
    const [showPassword,setShowPassword]=useState(false);
    const handlePassword =()=>{
        setShowPassword(!showPassword);
    }
    
  return (
    <div>
      <div className='text-center space-y-2'>
    <input type={showPassword ? 'hide' :'show'} placeholder="enter your password" className="bg-amber-200 p-4 mt-3 animate-pulse shadow transition rounded-lg w-100" />
      <Button title="Show" onClick={handlePassword}/>
      </div>
    </div>
  )
}

export default Password