import React from 'react'
import NavbarApp from '../components/navbar'
import FooterApp from '../components/footer'
import images from '../hooks/images'
import HomeSlider from "../components/homeSlider"
import "../App.css"
function Home() {
  return (
    <div>
      <NavbarApp/>
      <div>
        <section>
          <div className="firstSectionCont">
            <h2>Hola! Bienvenido, soy Andres Felipe Llamosa</h2>
          </div>
        </section>
        <section className="secondSectionCont">
            <div className="homeImg1">
              <HomeSlider/>
            </div>
            <div className="homeText1">
              <p>
              Mi nombre es andres felipe llamosa pechene y soy desarrollador de software full stack.
              Tengo 20 años y soy de colombia, soy un apasionado por la tecnología y
              siempre buscó estar al tanto de las nuevas novedades respecto a lenguajes de programacion,
              inteligencia artificial, frameworks y así mismo el software que uso me ayuda a mejorar mi 
              productividad de manera radical.
              </p>
            </div>
        </section>
        <section className="thirdSectionCont">
          <div className='homeText2'>
            <p>
            Soy estudiante egresado del SENA del programa Tecnólogo en Análisis y desarrollo de sistemas 
            e información, el cual finalicé de manera exitosa con una duración de 2 años y en el cual logra 
            aprender muchas de las habilidades que requiere un full stack dev como gestión de bases de datos,
            programación y metodologías ágiles.<br></br><br></br>
            En este momento soy estudiante de Ingeniería de sistemas de la Universidad Nacional abierta y a
            distancia o conocida también como la UNAD, en donde tengo pensado seguir con mi carrera y vía
            profesional y al mismo tiempo lograr desarrollar más habilidades las cuales me harán crecer 
            como desarrollador de software y también como un futuro profesional
            </p>
          </div>
        </section>
      </div>
      <FooterApp/>
    </div>
  )
}

export default Home