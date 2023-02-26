import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import Skillicon from '../../assets/api-programming.png'
import Projects from '../../components/Projects'
import { urlFor,client } from '../../client'


const Skills = () => {
  const [Skill, setSkill] = useState('')
  const [Other, setOther] = useState('')
  useEffect(() => {
    const query = '*[_type == "skill"] | order(_createdAt asc) '
    const query2 = '*[_type == "skillother"] | order(_createdAt asc) '
    client.fetch(query2).then((res) => {
      setOther(res)
      
    })
    client.fetch(query).then((res) => {
      setSkill(res)
     
      
    })
  }, [])
  



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
            {Skill && Skill.map((skill) => (
              <Image key={skill.name} src={urlFor(skill.icon).url()} alt={skill.name} width={70} height={70} className="Skills-Icon-img" />

            ))}

          
          </div>
        </div>
        <div className='Skills-Icons'>
          <h3>Others</h3>
          <div className='Skills-Icon'>
            {Other && Other.map((other) => (
              <Image key={other.name} src={urlFor(other.icon).url()} alt={other.name} width={70} height={70} className="Skills-Icon-img" />
            ))}
          </div>
        </div>
    
      </div>
      <Projects/>

      <Image src={Skillicon} className="Skills-bg" />
      </div>
  )
}

export default Skills