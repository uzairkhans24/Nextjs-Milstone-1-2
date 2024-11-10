"use client"
import "@/app/style/contact.css"
import {  motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
    initial={{ opacity: 0.0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut",
    }}>
      
    
    <main className="main">

    <div className='headi'>
    <h1 className="Heading antialiased">
      <span>Cont</span>
        <span>act</span>
        </h1>
    </div>

    <div className="container11">
      <div className="card">
        <label htmlFor="Name" className="label">Full name:</label>
        <br />
        <input className="input" type="text" required placeholder="Enter Your Name"/><br />
        <label className="label" htmlFor="Number">Phone:</label>
        <br />
        <input className="input" type="tel" required placeholder="Enter your Number"/><br />
        <label className="label" htmlFor="Email">Email:</label>
        <br />
        <input className="input" type="email" required placeholder="example@gmail.com" />
        <br />
        <label className="label" htmlFor="message">Message:</label>
        <br />
        <textarea className="textarea" name="message" required placeholder="message ..."></textarea><br />
        <button type="submit" className="button">Submit</button>
      </div>


    </div>
  </main>

  </motion.div>
  )
}

export default Contact