import Image from 'next/image'
import React from 'react'

import Skillicon from '../../assets/api-programming.png'
import Projects from '../../components/Projects'


const Skills = () => {
  const wavesD =require('../../assets/waves/waveskillup.svg')
  return (
    <div className='app__Skills'>
      <Image src={wavesD} className="Skills-TopDivider" />


      <div id='skills' className='app__Skills-Container'>
        <h2>My Skills</h2>
        <p>I Like to take responsibilities to craft aesthetic user <br />experience using modern frontend tools</p>
        <div className='Skills-Icons'>
          <h3>FRONTEND DEVELOPMENT</h3>
          <div className='Skills-Icon'>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width={70} height={70} className="Skills-Icon-img" />
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width={70} height={70} className="Skills-Icon-img" />
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width={70} height={70} className="Skills-Icon-img" />
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width={70} height={70} className="Skills-Icon-img" />
          </div>
        </div>
        <div className='Skills-Icons'>
          <h3>Others</h3>
          <div className='Skills-Icon'>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width={70} height={70} className="Skills-Icon-img" />
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width={70} height={70} className="Skills-Icon-img" />
          
          </div>
        </div>
    
      </div>
      <Projects/>

      <Image src={Skillicon} className="Skills-bg" />
      </div>
  )
}

export default Skills