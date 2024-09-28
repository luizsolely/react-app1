import React, { useContext } from 'react';
import { LanguageContext } from '../components/LanguageContext';
import { CONTACT_ENG, CONTACT_PT } from "../constants";
import { motion } from "framer-motion"

const Contact = () => {
  const { language } = useContext(LanguageContext);
  
  const CONTACT = language === 0 ? CONTACT_PT : CONTACT_ENG;

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -25 }} transition={{ duration: 1 }} className="my-10 text-center text-4xl">
        {language === 0 ? 'Entre em Contato' : 'Get in Touch'}
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className="my-4">{CONTACT.address}</motion.p>
        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className="my-4">{CONTACT.phoneNo}</motion.p>
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
}

export default Contact;
