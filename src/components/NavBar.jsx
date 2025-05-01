import React, { useContext } from 'react';
import { FaReact, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { LanguageContext } from '../components/LanguageContext';

const NavBar = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const toEnglish = () => setLanguage(1);
  const toPortuguese = () => setLanguage(0);

  return (
    <nav className='mb-10 flex flex-col md:flex-row items-center justify-between px-6 py-6'>
      <div className='flex items-center gap-4 text-4xl md:text-6xl text-neutral-400'>
        <FaReact className='transition-colors duration-200 hover:text-neutral-100 cursor-pointer' />
        <RiTailwindCssFill className='transition-colors duration-200 hover:text-neutral-100 cursor-pointer' />
      </div>

      <div className='flex flex-col md:flex-row items-center gap-4 text-neutral-400'>
        <div className='flex gap-4 text-sm tracking-tighter'>
          <p
            onClick={toPortuguese}
            className='cursor-pointer transition-colors duration-200 hover:text-neutral-100'
          >
            PORTUGUÊS
          </p>
          <p
            onClick={toEnglish}
            className='cursor-pointer transition-colors duration-200 hover:text-neutral-100'
          >
            ENGLISH
          </p>
        </div> 
        <div className='flex gap-4 text-xl'>
          <a
            href="https://www.linkedin.com/in/luiz-felipe4120"
            target='_blank'
            rel='noopener noreferrer'
            className='transition-colors duration-200 hover:text-neutral-100'
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/luizsolely"
            target='_blank'
            rel='noopener noreferrer'
            className='transition-colors duration-200 hover:text-neutral-100'
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/luizsolely"
            target='_blank'
            rel='noopener noreferrer'
            className='transition-colors duration-200 hover:text-neutral-100'
          >
            <FaInstagram />
          </a> 
        </div>    
      </div>
    </nav>
  );
}

export default NavBar;
