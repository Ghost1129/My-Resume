import React from 'react'
import Image from 'next/image'
import wavesD from '../assets/wavesDown.svg'
import Link from 'next/link'



const Footer = () => {
  
  return (
    <div id='contact' className='app__Footer'>
      <Image src={wavesD} className="Footer-wave"  />
      <div className='Footer-box'>
        <h1>Connect with me on social media.</h1>
        <div className='Footer-icons'>
          <Link href="https://www.linkedin.com/in/devanshl1129/">
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width={50} height={50} className="Footer-icon" /></Link>
          <Link href="https://www.github.com/Ghost1129">
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width={50} height={50} className="Footer-icon" /></Link>
          <Link href="https://www.bitbucket.org/ghost1122">
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original-wordmark.svg" width={50} height={50} className="Footer-icon" /></Link>
          <Link href="https://www.facebook.com/Devansh-lodhi">
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" width={50} height={50} className="Footer-icon" /></Link>
          
         
          
          
        </div>
        <div className='Footer-Buttons'>
          <button>
            <a href="https://drive.google.com/file/d/1sSlSWjnME-dGamSExeNx5sSyi1M4YZG6/view?usp=share_link">Resume</a>
          </button>
          <button>
            <a href="mailto:dlodhi40@gmail.com">Lets Talk</a>
          </button>
        </div>
        <span>Designed and Development with ❤️ by Devansh </span>

      </div>
        
    </div>
  )
}

export default Footer