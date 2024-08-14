import React from 'react'
import NavbarApp from '../components/navbar'
import FooterApp from '../components/footer'
import { Card } from 'react-bootstrap'
import SkillsData from '../hooks/skillsData'

function Skills() {
  return (
    <div className="skillContainer">
      <NavbarApp/>
      <div className="skillsTitle text-white">
        <h1>Mis conocimientos</h1>
      </div>
      <div className="skillCards">
        <SkillsData/>
      </div>
      <FooterApp/>
    </div>
  )
}

export default Skills