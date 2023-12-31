import React from 'react'
import logo from "../public/logo.png"

const NavBarComponent = () => {
    return (

    <div className="w-full h-[75px] relative"  style={{ backgroundColor: 'black' }}>
        <a href = "/home" style={{position: 'relative', left: 50, top: 5}}>
            <img src={logo.src} alt = "Placeholder" className='max-w-full max-h-full'/>
        </a>
        <a href ="/posts" className="absolute left-[222px] top-[30px] text-xl text-left text-white">Publish</a>
        <a href ="/profile" className="absolute left-[346px] top-[30px] text-xl text-left text-white">Profile</a>
    </div>
    )
}
  
  export default NavBarComponent
