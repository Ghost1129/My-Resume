import Image from 'next/image'
import React from 'react'
import {HiMenu,HiX} from 'react-icons/hi'
import logo from '../assets/icons8-ghost-96.png'
import {motion} from 'framer-motion'

const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false)
    const handleScroll = (comp) => {
        const element = document.getElementById(comp)
        if (element){
            element.scrollIntoView({behavior: 'smooth'})
        }

    }


  return (
    <nav className='app__navbar'>
        <div className='app__navbar_logo'>
            <Image src={logo} width={70} height={70} />
            <h3>Devansh.</h3>
        </div>
        <ul className='app__navbar_links'>
            {['Home', 'About', 'Skills','Work','Contact'].map((item, index) => (
                <li key={index} className='app__navbar_link'>
                    <div/>
                    <a href={`#${item.toLowerCase()}`} onClick={()=>handleScroll(`${item.toLowerCase()}`)} >{item}</a>
                </li>
            ))}
        </ul>
        <div className='app__navbar_menu'>
            <HiMenu className='hamburger_menu' size={40} onClick={()=>setShowMenu(true)} />

           {showMenu && (
             <motion.div
                whileInView={{x:[300,0]}}
                transition={{duration:1,ease:'easeInOut'}}
             >
             <HiX className='hamburger_menu' onClick={()=>setShowMenu(false)} size={40} />
             <ul>
             {['Home', 'About', 'Work','Skills','Contact'].map((item, index) => (
             <li key={index}>
                 <a href={`#${item.toLowerCase()}`} onClick={()=>{
                    setShowMenu(false)
                    handleScroll(`${item.toLowerCase()}`)
                 }}>{item}</a>
             </li>
             ))}
              </ul>
         </motion.div>
           )}
        
        </div>

    </nav>
  )
}

export default Navbar