import React from "react"
import vector from '../images/Vector.png'

export default function Navbar(){
    return(
        <nav className="nav">
            <img src={vector} className="circle"/>
            <h3 className="reactFacts">ReactFacts</h3>
            <h4 className="project">React Course - Project 1</h4>
        </nav>
    )
}