import React, { useContext } from 'react';
import { LanguageContext } from '../components/LanguageContext';
import { HERO_CONTENT_ENG, HERO_CONTENT_PT } from '../constants';
import profilePic from "../assets/profilePic.webp";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

const Hero = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className='border-b border-neutral-900 pt-10 pb-20 px-6'>
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-center md:text-left text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Luiz Felipe
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-center md:text-left bg-gradient-to-r from-cyan-300 via-slate-100 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              {language === 0 ? "Programador Back-End" : "Back-End Developer"}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="text-center md:text-left my-4 max-w-xl font-light tracking-tighter leading-loose"
            >
              {language === 0 ? HERO_CONTENT_PT : HERO_CONTENT_ENG}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="w-3/4 rounded-2xl"
            src={profilePic}
            alt="ProfilePic"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
