import React from 'react'
import NavbarApp from '../components/navbar'
import FooterApp from '../components/footer'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import images from '../hooks/images'

function Contact() {
  return (
    <div className="contactBody">
      <NavbarApp/>
      <div className="contactTitle">
        <h1>Contactame</h1>
      </div>
      <div className='contactContainer'>
        <div className="socialMediaCont">
          <a className="linksSocialMedia" href="https://www.facebook.com/profile.php?id=100007588096091" target="_blank">
            <h3><FontAwesomeIcon icon={faFacebook} />  Felipe Llamoza</h3>
            <img className="contactImgs" src={images.fbprofile}></img>
          </a>
        </div>
        <div className='socialMediaCont'>
          <a className="linksSocialMedia" href="https://www.instagram.com/felipe_llamoza/" target="_blank">
            <h3><FontAwesomeIcon icon={faInstagram} />  felipe_llamoza</h3>
            <img className="contactImgs" src={images.miperfil2}></img>
          </a>
        </div>
        <div className="socialMediaCont">
          <a className="linksSocialMedia" href="https://github.com/AndresFelipeLlamoza" target="_blank">
            <h3><FontAwesomeIcon icon={faGithub} />   andresfelipellamoza</h3>
            <img className="contactImgs" src={images.avatar}></img>
          </a>
        </div>
        <div className="socialMediaCont">
          <a className="linksSocialMedia" href="https://wa.me/573238307641" target="_blank">
            <h3><FontAwesomeIcon icon={faWhatsapp} />  +57 3238307641</h3>
            <img className="contactImgs" src={images.wsp}></img>
          </a>
        </div>
      </div>
      <FooterApp/>
    </div>
  )
}

export default Contact