"use client"
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';
import Button from "./Button";
import "../style/Hero.css"
import Link from "next/link";
 
import {  motion } from "framer-motion";
import { AuroraBackground } from "../components/ui/aurora-background";

function HeroSection() {

  return (


    <AuroraBackground>
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}>

    <main className="container">
   <div className="parent ">

    <div className=" child01 ">
   <h1>
   
    <span className="childes">
    {`Hello, I'm `}{" "} <br />
    </span>

    <TypeAnimation
      sequence={[
        'Uzair',
        1000, 
        'Web Developer',
        1000,
        'UI / Ux Designer ',
        1000,
        'Full stack developer',
        1000
      ]}
      wrapper="span"
      speed={40}
      className="wrap-ani"
      repeat={Infinity}
    />

    </h1>

    <div className="child02D">
    <div className="childsmallD  ">
      <Image src={"/profile.png"} height={500} width={500} alt="Hero image"></Image>
    </div>
   </div>

   <div className="paragraph">
      <b className="">
        {`I'm a web developer with extensive experience for over 2 years `}<br />
        My expertise is to create websites (UI/Ux) Design and With a strong foundation in front-end and back-end technologies, I specialize in building responsive web applications that bring ideas to life. My goal is to deliver high-quality, scalable solutions that exceed client expectations. {`Let's collaborate to turn your vision into reality! ...`}
      </b>
      </div>
      
      <div>

        <Link href={"https://www.linkdin.com/in/riaz-ahmed-zaur-a668832b6?utm_source=share&utm-campaign=share_via&utm_content=profile&utm_medium=android_app"}><Button text="Hire me"></Button></Link>
  
    
    
          <Button className="btn" text="Dwonload CV"></Button>
      </div>

   </div>

   <div className="child02">
    <div className="childsmall  ">
      <Image src={"/profile.png"} height={500} width={500} alt="Hero image"></Image>
    </div>
   </div>

   </div>
    </main>

    </motion.div>
     </AuroraBackground>
  )
}

export default HeroSection