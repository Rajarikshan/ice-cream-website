import { Link} from 'react-router-dom';
import Icecream from './assets/iceCream.png'
import Map from './assets/Map.png'
import People from './assets/people.png'
import Buy from './assets/buy.png'
import "./navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from 'react';

export default function Navbar(){
const [isOpen,setIsOpen]=useState(false)
const [screenWidth,setScreenWidth]=useState(window.innerWidth)


// resize listener
useEffect(()=>{
    const handleResize=()=>{
        setScreenWidth(window.innerWidth)
    }
    window.addEventListener("resize",handleResize);
    return()=>window.removeEventListener("resize",handleResize)
},[])


    const togglrMenu=()=>{
      setIsOpen(!isOpen)
    }

    return(
        <>
     <nav className='navbar'>
        <div className='ice'>
        <img src={Icecream} alt='icecream'/>
        <h3><span>Ice</span>Cream</h3>
        </div>

        {(screenWidth>425||isOpen)&&(
            <div className='toggleBox'>
            <ul>
            <li><Link to="/" onClick={()=>setIsOpen(false)}>Home</Link></li>
            <li><Link to="/About" onClick={()=>setIsOpen(false)} >About</Link></li>
            <li><Link to="/Menu" onClick={()=>setIsOpen(false)}>Menu</Link></li>
            <li><Link to="/Contact" onClick={()=>setIsOpen(false)}>Contact</Link></li>
        </ul>
        </div>
)}
        <div className='cart'>
            <img src={Map} alt="map" />
            <img src={People}alt="people" />
            <img src={Buy} alt="buy" />

            {screenWidth<=425&&(
            <GiHamburgerMenu onClick={togglrMenu} className='togglemenu'/>
                     
            )}

        </div>
     </nav>
        </>
    )
}