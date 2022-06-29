import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const socials = () => {
    return (
        <div className="header_socials">
            <a href="https://in.linkedin.com/in/nikhil-tiwari-502177209" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/cityji/" target="_blank"><BsGithub/></a>
            <a href="https://twitter.com/eduNikhil" target="_blank"><BsTwitter/></a>
        </div>
    )
}

export default socials