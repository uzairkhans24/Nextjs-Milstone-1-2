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
          <Link href={"#"}>
          <Image src={"/Project_05.jpg"} height={300} width={300} alt="logo"></Image>
          <h3>Html Css Website</h3>
          </Link>
        </div>


        <div className="child animate-bounce">

        <Link href={"https://hackathon-milstone-1.netlify.app/"}>
          <Image src={"/static.jpg"} height={300} width={300} alt="logo"></Image>
          <h3>Static Resume</h3>
          </Link>
       
        </div>


        <div className="child ">
        <Link href={"https://my-milestone-3.netlify.app/"}>
          <Image src={"/dynamic.jpg"} height={300} width={300} alt="logo"></Image>
          <h3>Dynamic Resume</h3>
          </Link>
        </div>


        <div className="child">
        <Link href={"#"}>
          <Image src={"/Project_02.jpg"} height={300} width={300} alt="logo"></Image>
          <h3>Calculator</h3>
          </Link>
        </div>

    
      </div>
   
    </motion.div> 
    </section>
  )
}

export default Projects
