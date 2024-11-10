"use client"

import Image from "next/image"
import Link from "next/link"
import "../style/project.css"
import { motion } from "framer-motion";



function Projects() {

  return (
    <section className="project">

       
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      
      }}>

  <div className='headi'>
    <h1 className="Heading antialiased">
      <span>Proj</span>
        <span>ect</span>
        </h1>
    </div>

      {/* parent div */}
      <div className="cards">


        {/* childs */}


        <div className="child">
          <Link href={"https://e-commerce-website-inky-six.vercel.app/"}>
          <Image src={"/figma.png"} height={300} width={300} alt="logo"></Image>
          <h3>E-commerce Website</h3>
          </Link>
        </div>


        <div className="child animate-bounce">

        <Link href={"https://music-website-beta.vercel.app"}>
          <Image src={"/music.png"} height={300} width={300} alt="logo"></Image>
          <h3>Music-website</h3>
          </Link>
       
        </div>


        <div className="child ">
        <Link href={"https://flow-chart-2q98.vercel.app"}>
          <Image src={"/flow.png"} height={300} width={300} alt="logo"></Image>
          <h3>Flow-chart</h3>
          </Link>
        </div>


        <div className="child">
        <Link href={"hackathone-a2wn.vercel.app"}>
          <Image src={"/resume.png"} height={300} width={300} alt="logo"></Image>
          <h3>Resume Builder</h3>
          </Link>
        </div>

    
      </div>
   
    </motion.div> 
    </section>
  )
}

export default Projects