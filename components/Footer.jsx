import React from 'react'
import Image from 'next/image'
import wavesD from '../assets/wavesDown.svg'



const Footer = () => {
  
  return (
    <div id='contact' className='app__Footer'>
      <Image src={wavesD} className="Footer-wave"  />
      <div className='Footer-box'>
        <h1>Connect with me on social media.</h1>
        <div className='Footer-icons'>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width={50} height={50} className="Footer-icon" />
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width={50} height={50} className="Footer-icon" />
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/instagram/instagram-original.svg" width={50} height={50} className="Footer-icon" />
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" width={50} height={50} className="Footer-icon" />
        </div>
        <div className='Footer-Buttons'>
          <button>Resume</button>
          <button>Lets Talk</button>
        </div>
        <span>Designed and Development with ❤️ by Devansh </span>

      </div>
        
    </div>
  )
}

export default Footer