import React from 'react'
import './experiance.css'

// importing icons

import { BsPatchCheckFill } from 'react-icons/bs'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { DiCss3Full} from 'react-icons/di'
import {SiChakraui,SiJavascript,SiJquery,SiBabel,SiWebpack,SiReact,SiBootstrap,SiTailwindcss,SiWindicss} from'react-icons/si' 

const experiance = () => {
  return (
    <section id="experience">
      <h5>What Skills Do I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Core / Raw Languages</h3>
          <div className="Experience_content">
            <article className="experience_details">
              <div className="item">
                <div><AiOutlineHtml5 /></div>
                <small className="text-light"> HML</small>
                <div><BsPatchCheckFill /></div>
              </div>

              <div className="item">
                <div><DiCss3Full /></div>
                <small className="text-light"> CSS</small>
                <div><BsPatchCheckFill /></div>
              </div>

              <div className="item">
                <div><SiJavascript /></div>
                <small className="text-light"> JavaScript</small>
                <div><BsPatchCheckFill /></div>
              </div>
              <b>es3/es4/es5/es6 and es7</b>
            </article>
          </div>
        </div>
        <div className="experience_frontend">
          <h3>JS Frameworks</h3>
          <div className="Experience_content">
            <article className="experience_details">
              <div className="item">
                <div><SiJquery /></div>
                <small className="text-light">Jquery</small>
                <div><BsPatchCheckFill /></div>
              </div>

              <div className="item">
                <div><SiBabel /></div>
                <small className="text-light">Babel</small>
                <div><BsPatchCheckFill /></div>
              </div>

              <div className="item">
                <div><SiWebpack /></div>
                <small className="text-light">Webpack</small>
                <div><BsPatchCheckFill /></div>
              </div>

              <div className="item">
                <div><SiReact /></div>
                <small className="text-light">React</small>
                <div><BsPatchCheckFill /></div>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_frontend">
          <h3>CSS Liberaries</h3>
          <div className="Experience_content">
            <article className="experience_details">
              <div className="item">
                <div><SiBootstrap /></div>
                <small className="text-light">Bootstrap</small>
                <div><BsPatchCheckFill /></div>
              </div>

              <div className="item">
                <div><SiTailwindcss /></div>
                <small className="text-light">Tailwind CSS</small>
                <div><BsPatchCheckFill /></div>
              </div>

              <div className="item">
                <div><SiChakraui /></div>
                <small className="text-light">Chakra UI</small>
                <div><BsPatchCheckFill /></div>
              </div>

              <div className="item">
                <div><SiWindicss /></div>
                <small className="text-light">Windi CSS</small>
                <div><BsPatchCheckFill /></div>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_frontend">
          <h3>Other Skills</h3>
          <div className="Experience_content">
            <article className="experience_details">
              <div className="item">
                <small className="text-light">C programing</small>
                <div><BsPatchCheckFill /></div>
              </div>

              <div className="item">
                <small className="text-light">C++ Programing</small>
                <div><BsPatchCheckFill /></div>
              </div>

              <div className="item">
                <small className="text-light">Bash / Apple Script</small>
                <div><BsPatchCheckFill /></div>
              </div>

              <div className="item">
                <small className="text-light" style={{textAlign:"left"}}>Familier With Linux (CLI) Environment</small>
                <div><BsPatchCheckFill /></div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experiance