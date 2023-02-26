import React from 'react'
import {motion} from 'framer-motion'
import Avatar from '../../assets/avatar.png'
import Image from 'next/image'
import Javascript from '../../assets/icons/javascript-logo.png'
import ReactI from '../../assets/icons/react-native-logo.png'
import Wave from '../../assets/wavesDown.svg'
import Ghost from '../../assets/icons8-ghost-48.png'
import {FaLinkedinIn,FaInstagram} from 'react-icons/fa'



const Header = () => {
  return (
    <div id='home' className='app__header'>
        <div className='app__Avatar-back'>
            <Image src={Avatar} className='app__Avatar'/>
        </div>
        <div className='app__Avatar-logos'>
        <Image src={Javascript} className='app__Icon1' width={100} height={100} />
        <Image src={ReactI} className='app__Icon2' width={100} height={100} />
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" className='app__Icon3' width={100} height={100} />
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" className='app__Icon4' width={100} height={100} />
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" className='app__Icon5' width={100} height={100} />
        </div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ duration: 1 }}
            
            
        >
            <div className='app__header-badge'>
                {/* Name Text */}
                <div className="badge-main">
                    <span>
                        {/* <Image src={Ghost} /> */}
                    </span>
                    <div>
                        <p>Hi, I'm</p>
                        <h1>Devansh.</h1>
                    </div>
                </div>
                {/* Description Text */}
                <div className="badge-description">
                    <p> 
                        I'm a <span>FrontEnd Developer</span> .
                        <br/>
                         I love to create new things and I'm always looking for new opportunities to learn and grow.
                    </p>
                </div>
            </div>
        </motion.div>
        <div className='app__header-Social'>
            <FaLinkedinIn className='app__header-Social-icon'/>
            <FaInstagram className='app__header-Social-icon'/>
            <span className='app__header-Social-text' >Follow Me</span>
        </div>
        <Image src={Wave} className="app__header-Wave" width={100} height={100} />
    </div>
  )
}

export default Header