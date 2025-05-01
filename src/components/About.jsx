import React, { useContext } from 'react';
import aboutImg from "../assets/code-img.webp";
import { LanguageContext } from '../components/LanguageContext';
import { ABOUT_TEXT_ENG, ABOUT_TEXT_PT } from '../constants';
import { motion } from "framer-motion";

const About = () => {
  const { language } = useContext(LanguageContext);
  const aboutText = language === 0 ? ABOUT_TEXT_PT : ABOUT_TEXT_ENG;

  // Separando o texto nas sentenças para criar tópicos
  const sentences = aboutText.split('.').filter(sentence => sentence.trim() !== '');

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -25 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'>
        {language === 0 ? "Sobre mim" : "About Me"}
      </motion.h2>
      <div className='flex flex-wrap items-center'>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <img className="rounded-2xl" src={aboutImg} alt="About" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <div className="text-center md:text-left my-2 max-w-xl py-6 font-light tracking-tighter leading-loose">
              {sentences.map((sentence, index) => (
                <div key={index} className="flex items-center mb-4">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 hidden lg:inline-block"></div>
                  <p>{sentence.trim()}.</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
