"use client";
import "../style/skill.css";
import { RedoDot } from 'lucide-react';
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40, }}
      whileInView={{ opacity: 1, y: 1 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      <figure>


      <div className='headi'>
    <h1 className="Heading antialiased">
      <span>Ski</span>
        <span>lls</span>
        </h1>
    </div>
        {/* parent */}

        <div className="toper">
          {/* child */}

          {/* 2 child */}
          <div className="check">
            <div className="par">
              {/* Skill 1 */}
              <div>
                <div className="flx">
                  <h2 className="line-heading">HTML 5: <RedoDot /></h2>
                  <p>90%</p>
                </div>
                <div className="line-throug">
                  <motion.div
                    className="line"
                    initial={{ width: 0 }}
                    animate={{ width: "90%" }}
                    transition={{ duration: 1.5 }}
                  />
                </div>
              </div>

              {/* Skill 2 */}
              <div>
                <div className="flx">
                  <h2 className="line-heading">CSS 3: <RedoDot /></h2>
                  <p>85%</p>
                </div>
                <div className="line-throug2">
                  <motion.div
                    className="line2"
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 1.5 }}
                  />
                </div>
              </div>

              {/* Skill 3 */}
              <div>
                <div className="flx">
                  <h2 className="line-heading">Typescript: <RedoDot /></h2>
                  <p>95%</p>
                </div>
                <div className="line-throug3">
                  <motion.div
                    className="line3"
                    initial={{ width: 0 }}
                    animate={{ width: "95%" }}
                    transition={{ duration: 1.5 }}
                  />
                </div>
              </div>

              {/* Skill 4 */}
              <div>
                <div className="flx">
                  <h2 className="line-heading">React: <RedoDot /></h2>
                  <p>75%</p>
                </div>
                <div className="line-throug4">
                  <motion.div
                    className="line4"
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1.5 }}
                  />
                </div>
              </div>

              {/* Skill 5 */}
              <div>
                <div className="flx">
                  <h2 className="line-heading">Next.js: <RedoDot /></h2>
                  <p>80%</p>
                </div>
                <div className="line-throug5">
                  <motion.div
                    className="line5"
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1.5 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </figure>
    </motion.div>
  );
}

export default Skills;
