import React from 'react'
import NavbarApp from '../components/navbar'
import FooterApp from '../components/footer'
import CardsData from '../hooks/cardsData'

function Projects() {
  return (
    <div className="projectsContainer">
      <NavbarApp/>
      <div className='proyectTitle text-white'>
        <h1>Mis proyectos desarrollados</h1>
      </div>
      <div className="proyectCardsCont">
        <CardsData/>
      </div>
      <FooterApp/>
    </div>
  )
}

export default Projects