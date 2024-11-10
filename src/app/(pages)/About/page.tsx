"use client"
import Image from 'next/image'
import React from 'react'
import "@/app/style/about.css"
import {  motion } from "framer-motion";

function About() {
  return (

    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}>

   <section className='sec'>
    <div className='headi'>
    <h1 className="Heading antialiased">
      <span>Ab</span>
        <span>out me</span>
        </h1>
    </div>
  
    {/* parent */}
    <div className='about'>
      {/* child 1 */}
      <div className='about-img'>
      <Image src={"/bg.jpg"} height={500} width={500} alt="Hero image"></Image>
      </div>
      {/* child 2 */}

      <div className='paragraph-about'>

        <h5>{`I've worked on various projects using these technologies, building user-friendly interfaces that are both efficient and aesthetically pleasing.`}</h5>
    <h5>I am passionate about creating seamless user experiences and continuously learning new technologies to enhance my skills.</h5>
    <h5>Feel free to reach out for collaborations or discussions!</h5>
      </div>
    </div>
   </section>
   </motion.div>
  )
}

export default About