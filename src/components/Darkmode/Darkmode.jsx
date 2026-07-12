import React, { useEffect, useState } from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";
import './Darkmode.css'

const Darkmode = () => {

    const [mode, setMode] = useState("darkmode")
    
    function toggle(){
        if(mode ==="darkmode"){
            setMode("lightmode")
        }else{
            setMode("darkmode")
        }
    }

    useEffect(()=>{
        document.body.className = mode
    },[mode])

  return (
   <button className='darkmodebtn' onClick={()=>{
    toggle()
   }}>
    {mode==="darkmode" ? <IoSunnyOutline /> : <BsFillMoonStarsFill /> }
    </button>
  )
}

export default Darkmode
