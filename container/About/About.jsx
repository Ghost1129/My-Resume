import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Wave from '../../assets/wavesA1.svg'
import Whrill from '../../assets/whril.svg'
import Robot from '../../assets/robot.png'
import { urlFor,client } from '../../client'


const About = () => {
  const [abouts, setabouts] = useState('')
  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query).then((res) => {
      setabouts(res)
      
    })
  }, [])
  

  return (
    <div id='about' className='app__About'>
      <Image src={Whrill} className="app__About-Whrill"/>
      <div className='app__About-Container'>
        <h2 className="Container-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>
        <div className='Container-Section'>
          {abouts && abouts.map((about) => (
            // console.log(urlFor(about.image).url()),
            <div className='Container-Section-part' >
              <div className='Container-Section-image'>
              <Image className='Container-Section-part-img' width={200} height={200} src={urlFor(about.image).url()}/>
              </div>
            
              <h3>{about.title}</h3>
              <span>{about.description}</span>
            </div>
            
            
          ))}
          
          
        </div>
      </div>


      
      <Image src={Wave} className="app__About-Wave"/>
    </div>
  )
}

export default About