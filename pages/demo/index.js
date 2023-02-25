import React from 'react'
import Image from 'next/image'
import Avatar from '../../assets/avatar.png'



const index = () => {
  return (
    // <div className='container__Header'>
    // <div className='app__Container' >
    // <Image src={Avatar} className='app_Image'/>
    // </div>
    
    // </div>
    <div className='app__Container1'>
        
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg" className='app_Icon1' width={100} height={100} />
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg" className='app_Icon2' width={100} height={100} />
        {/* <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg" className='' width={100} height={100} />
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg" className='' width={100} height={100} /> */}
      
        
    </div>
  )
}

export default index