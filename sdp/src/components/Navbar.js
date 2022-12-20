import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './NavbarStyles.css'

const Navbar = (props) => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
        const changeColor =() => {
            if(window.scrollY >= 100) {
                setColor(true)
            } else {
                setColor(false)
            }
        }

        window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
           <Link to='/'><h1>HIRE EASY</h1></Link> 
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li>
                   <Link to='/'>Home</Link>
               </li>
               <li>
                   <Link to='/training'>Training</Link>
               </li>
               <li>
                   <Link to='/contact'>Login</Link>
               </li>
               <li>
                   <Link to='/login'>Register</Link>
               </li>
               <li>
                   <Link to='/users'>Users</Link>
               </li>
           </ul>

           
           <div className='hamburger' onClick={handleClick}>
           </div>
        </div>
    )
}

export default Navbar
