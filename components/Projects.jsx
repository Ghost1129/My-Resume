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
            title: 'Zomato Clone',
            description: 'Zomato Clone',
            link: 'https://github.com/Ghost1129/my-tomato',
            link2: 'https://my-zomato.vercel.app/',
            // image: whatsapp,'
            tech: [
                {
                    name: 'Nextjs',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
                },
                {
                    name: 'Tailwind',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
                },
                {
                    name: 'Redux',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
                }

            ]
        },
        {
            title: 'Youtube V2',
            description: 'Youtube Clone',
            link: 'https://github.com/Ghost1129/youtubev2',
            link2:'https://youtubev2-pi.vercel.app/',
            tech: [
                {
                    name: 'Nextjs',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
                },
                {
                    name: 'Stylus',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stylus/stylus-original.svg'
                },
                {
                    name: 'Redux',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
                },
                {
                    name:'Google API',
                    icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg'
                }

            ]
            
        }, {
            title: 'Whatsapp Clone',
            description: 'Whatsapp Clone',
            link: 'https://github.com/Ghost1129/Whatsapp-Clone',
            link2: 'https://whats-app-cl0ne.herokuapp.com/',
            tech: [
                {
                    name: 'Reactjs',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                },
                {
                    name: 'Sass',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
                },
                {
                    name: 'Firebase',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
                },
                {
                    name: 'Material UI',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'
                }

            ]
        }
        
    ]
  return (
    <div id='work' className='project-Container'>
        <h2>My Works</h2>
        <div className='project-Container-items'>
            {project.map((item,index) => (
                <div key={index}  className='project-Container-item'>
                {/* <Image src={whatsapp} className='project-img' /> */}
                <div className='project-desc'>
                    <h3></h3>
                   
                    <p>{item.description}</p>
                    <div className='project-tech'>
                        {
                            item?.tech?.map((item,index) => (
                                <Image key={index} src={item?.icon} width={50} height={50} className='project-icon'/>
                            ))
                        }
                    </div>
                    <div className='project-link'>
                        <a href={item?.link}>
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width={50} height={50} className='project-icon'/>
                        </a>
                        <a href={item?.link2}>
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg" width={50} height={50} className='project-icon'/>
                        </a>
                        
                        
                    </div>
                </div>
            </div>
            ))}
            
            
        </div>
    </div>
  )
}

export default Projects