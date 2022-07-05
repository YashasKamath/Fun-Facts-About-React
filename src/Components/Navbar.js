import React,{useEffect, useState} from "react"
import vector from '../images/Vector.png'

export default function Navbar(){
    const [checkbox,setChecked]=useState(true)

    function handleChange(){
        setChecked(prevState=>!prevState)
    }
    
    useEffect(()=>{
        let body=document.body
        if(checkbox) body.className='dark-mode'
        else body.className='light-mode'
    },[checkbox])
    return(
        <nav className="nav">
            <img src={vector} className="circle" alt='react logo'/>
            <h3 className="reactFacts">ReactFacts</h3>
            <p className="light">Light</p>
            <label class="switch">
                <input 
                    type="checkbox" 
                    checked={checkbox}
                    onChange={handleChange}
                    id="checkbox"
                />
                <span class="slider round"></span>
            </label>
            <p  className="dark">Dark</p>
        </nav>
    )
}