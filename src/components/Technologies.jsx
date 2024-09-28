import React, { useContext } from 'react';
import { RiJavaFill } from "react-icons/ri";
import { SiSpring } from "react-icons/si";
import { RiAngularjsFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri"
import { LanguageContext } from '../components/LanguageContext';
import { TECHNOLOGIES_TEXT_ENG, TECHNOLOGIES_TEXT_PT } from '../constants';
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
const { language } = useContext(LanguageContext);
  return (
    <div className="border-b border-neutral-800 pb-24 ">
        <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -25 }} transition={{ duration: 1.5 }} className="my-20 text-center text-4xl">{language === 0 ? "Tecnologias" : "Technologies"}</motion.h2>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5}} className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="cursor-pointer rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavaFill className="text-6xl text-[#F89820]" />
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="cursor-pointer rounded-2xl border-4 border-neutral-800 p-4">
                <SiSpring className="text-6xl text-[#6EB442]" />
            </motion.div>
            <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="cursor-pointer rounded-2xl border-4 border-neutral-800 p-4">
                <RiAngularjsFill className="text-6xl text-[#DD0031]" />
            </motion.div>
            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="cursor-pointer rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-6xl text-[#4584B6]" />
            </motion.div>
            <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="cursor-pointer rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptFill className="text-6xl text-[#F0DB4F]" />
            </motion.div>
            <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="cursor-pointer rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsFill className="text-6xl text-cyan-300" />
            </motion.div>
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="cursor-pointer rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-6xl text-[#A5F3FC]" />
            </motion.div>           
        </motion.div>
        <motion.p whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 25 }} transition={{ duration: 1 }} className="my-2 text-center py-6 font-light tracking-tighter leading-loose">{language === 0 ? TECHNOLOGIES_TEXT_PT : TECHNOLOGIES_TEXT_ENG}</motion.p>
    </div>
  )
}

export default Technologies
