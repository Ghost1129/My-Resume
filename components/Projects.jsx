import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import whatsapp from '../assets/projects/whatsapp/WhatsappClone.png'
import { urlFor,client } from '../client'

const Projects = () => {
    const [Projects, setProjects] = useState('')
    useEffect(() => {
        const query = '*[_type == "works"] | order(_createdAt asc) '
        client.fetch(query).then((res) => {
            setProjects(res)
            console.log(res)
        })
    }, [])

    const project = [
        {
            title: 'Whatsapp Clone',
            description: 'Whatsapp Clone',
            // image: whatsapp,
            // tech: [
            //     {
            //         name: 'Nextjs',
            //         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
            //     },]
        },
        {
            title: 'Whatsapp Clone',
            description: 'Whatsapp Clone',
            // image: whatsapp,
            // tech: [
            //     {
            //         name: 'Nextjs',
            //         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
            //     },]
        }, {
            title: 'Whatsapp Clone',
            description: 'Whatsapp Clone',
            // image: whatsapp,
            // tech: [
            //     {
            //         name: 'Nextjs',
            //         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
            //     },]
        }
        
    ]
  return (
    <div id='work' className='project-Container'>
        <h2>My Works</h2>
        <div className='project-Container-items'>
            {project.map((item,index) => (
                <div key={index}  className='project-Container-item'>
                <Image src={whatsapp} className='project-img' />
                <div className='project-desc'>
                    <h3></h3>
                    <p>{item.description}</p>
                    <div>
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width={50} height={50} className='project-icon'/>
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width={50} height={50} className='project-icon'/>
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" width={50} height={50} className='project-icon'/>
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" width={50} height={50} className='project-icon'/>
                    </div>
                </div>
            </div>
            ))}
            
            
        </div>
    </div>
  )
}

export default Projects