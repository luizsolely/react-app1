import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { LanguageContext } from '../components/LanguageContext';
import { PROJECTS_ENG, PROJECTS_PT } from '../constants';
import { motion } from "framer-motion";

const Projects = () => {

  const { language } = useContext(LanguageContext);
    
  const PROJECTS = language === 0 ? PROJECTS_PT : PROJECTS_ENG;

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
          <div className='w-full lg:w-1/4'>
            <img src={project.image} width={150} height={150} alt={project.title} className='mb-6 rounded' />
          </div>
          <div className='w-full max-w-xl lg:w-3/4'>
            <h6 className='mb-2 font-semibold'>{project.title}</h6>
            <p className='mb-4 text-neutral-400'>{project.description}</p>
            {project.technologies.map((tech, index) => (
              <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium'>{tech}</span>
            ))}
            <a
  href={project.github_link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center text-sm text--400 hover:underline mt-2"
>
  <FaGithub className="mr-1" />
  View on GitHub
</a>
          </div>
        </div>
      ))}
      </div>  
    </div>
  )
}

export default Projects