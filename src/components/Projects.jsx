import React from 'react'
import Portfolio from '../assets/Portfolio.png'
import VegQua from '../assets/veg_qua.png'
import Todo from '../assets/todo.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Portfolio',
          desc: 'A responsive portfolio website to showcase my projects, skills, and professional experience.',
          image: Portfolio,
          live: "#",
          github: "https://github.com/Yuvanshan/portfolio"
        },
        {
          title: 'Vegetable Quality Checker',
          desc: 'A mobile app that uses image analysis to determine the quality of local vegetables.',
          image: VegQua,
          live: "#",
          github: "https://github.com/Yuvanshan/Veg-Quality-Checking-App"
        },
        {
          title: 'To Do App',
          desc: 'A user-friendly to-do application developed for task management and tracking.',
          image: Todo,
          live: "#",
          github: "https://github.com/Yuvanshan/Todo-App"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
