import React from 'react'
import { useState,useEffect } from "react"


function Bouncing() {
    const [values, setValues] = useState([])
    useEffect( ()=>{
        const interval = setInterval( ()=>{
            setValues(
                
            )
        },1000)
        return ()=> clearInterval(interval)
    },[])
  return (
    <div>Bouncing
            <div className="circle">{values}</div>

    </div>
  )
}

export default Bouncing