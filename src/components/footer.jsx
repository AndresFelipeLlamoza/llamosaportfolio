import React from 'react'
import images from "../hooks/images"
import '../App.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FooterApp() {
  return (
    <div className="footerContainer">
        <div>
            <p>Andres Felipe Llamoza</p>
            <p>Front end developer</p>
        </div>
        <div>
            <p>Designed by Andres Felipe Llamosa</p>
            <p>&copy; 2024</p>
        </div>
        <div>
          <p>Palmira - valle del cauca</p>
          <p>Colombia</p>
        </div>
    </div>
  )
}
