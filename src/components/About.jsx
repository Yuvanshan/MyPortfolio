import React from 'react'
import MernStack from '../assets/mernstack.png'
import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import Javascript from '../assets/JS.png'
import ReactLogo from '../assets/React.png'
import JavaLogo from '../assets/java.png'
import Cpp from '../assets/cpp.png'
import flutter from '../assets/flutter.png'
import NodeLogo from '../assets/NodeLogo.png'
import Mongodb from '../assets/mongodb.svg'
import Express from '../assets/Express.png'
import NextJs from '../assets/NextJs.png'
import Git from '../assets/git.png'

const About = () => {
    return (
        <div className='relative' id='about'>
            <div className='bg-gray-100 py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>About Me</h2>
                        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Hi, I'm Yuvanshan Prabakaran</p>
                        <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                        A versatile Full-Stack Developer with expertise in MERN development, WordPress, and SEO, offering a well-rounded skill set to create dynamic, optimized, and scalable web solutions.
                        </p>
                    </div>
                    <div className='mt-10'>
                        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                            <div>
                                <h3 className='text-2xl font-semibold text-gray-900'>My Journey</h3>
                                <p className='mt-4 text-lg text-gray-600'>
                                As a Computer Science Undergraduate at Trincomalee Campus, Eastern University of Sri Lanka, I am passionate about Software Engineering and excited to apply my skills in Full-Stack Development. My journey in web development has led me to build projects such as a full-stack food ordering website, a job portal, and a LinkedIn clone using the MERN stack (MongoDB, Express.js, React, Node.js). I am eager to apply my strong programming and problem-solving foundation in a professional internship, collaborate with innovative teams, and contribute to scalable, efficient software solutions while gaining valuable industry experience.
                                </p>
                                <img src={MernStack} alt="" className='p-2 rounded-lg w-52 mt-4' />
                            </div>
                            <div className='border border-red-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-red-300'>
                                <h3 className='text-2xl font-semibold text-red-600'>Skills & Expertise</h3>
                                <div className='flex items-center justify-center flex-wrap gap-3'>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Html} alt="" className='w-10' />
                                        <span className='font-semibold'>HTML</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Css} alt="" className='w-8' />
                                        <span className='font-semibold'>CSS</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Javascript} alt="" className='w-10' />
                                        <span className='font-semibold'>Javascript</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={ReactLogo} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'>React</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={NodeLogo} alt="" className='w-10' />
                                        <span className='font-semibold'>Node Js</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Mongodb} alt="" className='w-10' />
                                        <span className='font-semibold'>Mongodb</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Express} alt="" className='w-10' />
                                        <span className='font-semibold'>Express Js</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={NextJs} alt="" className='w-9' />
                                        <span className='font-semibold'>Next Js</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={JavaLogo} alt="" className='w-8' />
                                        <span className='font-semibold'>Java</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Cpp} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'>C++</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={flutter} alt="" className='w-7' />
                                        <span className='font-semibold'>Flutter</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Git} alt="" className='w-8' />
                                        <span className='font-semibold'>Git</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <h3 className='text-2xl font-semibold text-gray-900'>More About Me</h3>
                        <p className='mt-4 text-lg text-gray-600'>In addition to coding, I am passionate about exploring new technologies and staying current with the latest trends in web development. I enjoy sharing my knowledge of JavaScript, MERN Stack development, WordPress, and digital marketing, helping others dive deeper into the world of programming and technology.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
