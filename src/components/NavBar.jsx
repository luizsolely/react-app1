import React, { useContext } from 'react';
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { LanguageContext } from '../components/LanguageContext';

const NavBar = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const toEnglish = () => setLanguage(1);
  const toPortuguese = () => setLanguage(0);

  return (
    <nav className='md:mb-20 flex flex-col md:flex-row items-center justify-between py-6'>
      <div className='md:m-8 flex items-center gap-4 text-4xl md:text-6xl'>
        <FaReact />
        <RiTailwindCssFill />
      </div>

      <div className='md:m-8 flex items-center justify-center gap-4 text-2xl'>
        <div className='m-8 flex flex-row gap-4 items-center justify-center text-2xl'>
          <p onClick={toPortuguese} className='text-sm tracking-tighter cursor-pointer'>
            {language === 0 ? 'PORTUGUÊS' : 'PORTUGUESE'}
          </p>
          <p onClick={toEnglish} className='text-sm tracking-tighter cursor-pointer'>
            {language === 1 ? 'ENGLISH' : 'INGLÊS'}
          </p>
        </div> 
        <div className='flex flex-row gap-4'> 
          <a href="https://www.linkedin.com/in/luiz-felipe4120" target='_blank' rel='noopener noreferrer'>
            <FaLinkedin />
          </a>
          <a href="https://github.com/luizsolely" target='_blank' rel='noopener noreferrer'>
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/luizsolely" target='_blank' rel='noopener noreferrer'>
            <FaInstagram />
          </a> 
        </div>    
      </div>
    </nav>
  );
}

export default NavBar;
