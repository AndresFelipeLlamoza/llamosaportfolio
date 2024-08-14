import React from 'react'
import images from './images'
import ProyectCards from '../components/proyectCards'
const cardData = [ 
    {
        img: images.imgproject1,
        cardTitle: 'Llamosa dex',
        cardText: 'Proyecto de practica con react js y bootstrap haciendo uso de la API de pokemon ',
        carouselData: [
            {
                src: images.poke1,
                alt: 'imagen del proyecto1',
                // captionTitle: 'LlamozaDex',
                // captionText: 'datos sobre la saga de pokemon'
            },
            {
                src: images.poke2,
                alt: 'imagen del proyecto 1',
                // captionTitle: 'LlamozaDex',
                // captionText: 'Informacion sobre objetos, regiones y mucho mas'
            },
            {
                src: images.poke3,
                alt: 'imagen del proyecto 1',
                // captionTitle: 'LlamozaDex',
                // captionText: 'Una muestra basica de desarrollo frontend con react'
            }
        ]
    },
    {
        img: images.imgproject2,
        cardTitle: 'Tanks Of Llamosa',
        cardText: 'Proyecto de practica con reactjs y bootstrap haciendo uso de la api de World Of Tanks',
        carouselData: [
            {
                src: images.tanks1,
                alt: 'imagen del proyecto2',
                // captionTitle: 'Tanks Of Llamosa',
                // captionText: 'Proyecto de practica con la API de World of Tanks'
            },
            {
                src: images.tanks2,
                alt: 'imagen del proyecto2',
                // captionTitle: 'Tanks Of Llamosa',
                // captionText: 'Datos sobre los tanques, naciones, objetos y mucho mas'
            },
            {
                src: images.tanks3,
                alt: 'imagen del proyecto2',
                // captionTitle: 'Tanks Of Llamosa',
                // captionText: 'Informacion sobre los jugadores del juego'
            },
        ]
    },
    {
        img: images.imgproject3,
        cardTitle: 'Star Wars Api',
        cardText: 'Proyecto de practica con react js haciendo uso de la api de star wars SWAPI',
        carouselData: [
            {
                src: images.swapi1,
                alt: 'imagen del proyecto3',
                // captionTitle: 'Star wars API',
                // captionText: 'Una muestra de desarrollo front end con react y la SWAPI'
            },
            {
                src: images.swapi2,
                alt: 'imagen del proyecto3',
                // captionTitle: 'Star wars API',
                // captionText: 'Informacion relacionada con la saga star wars'
            },
            {
                src: images.swapi3,
                alt: 'imagen del proyecto3',
                // captionTitle: 'Star wars API',
                // captionText: 'Datos de los personajes, planetas y demas'
            },
        ]
    },
    {
        img: images.imgproject4,
        cardTitle: 'Huevos Jireth',
        cardText: 'Aplicacion web desarrollada para automatizar la gestion de venta de los productos del negocio Huevos jireth',
        carouselData: [
            {
                src: images.hj1,
                alt: 'imagen del proyecto4',
                // captionTitle: 'Huevos Jireth',
                // captionText: 'Un sistema desarrollado para la gestion de reservas de productos del negocio huevos jireth'
              },
              {
                src: images.hj2,
                alt: 'imagen del proyecto4',
                // captionTitle: 'Huevos Jireth',
                // captionText: 'Reservas de panales de huevos, gestion de reservas y mucho mas'
              },
              {
                src: images.hj3,
                alt: 'imagen del proyecto4',
                // captionTitle: 'Huevos Jireth',
                // captionText: 'Hace partede mi proyecto de grado de mi carrera tecnologica'
              },
        ]
    },
    {
        img: images.imgproject5,
        cardTitle: 'Control Alqueria',
        cardText: 'Sistema integrado de gestion documental para el area de distribucion de la empresa alqueria',
        carouselData: [
            {
                src: images.alqueria1,
                alt: 'imagen del proyecto5',
                // captionTitle: 'Control Alqueria',
                // captionText: 'Sistema de gestion documental que desarrolle en mis practicas para la compañia donde trabaje'
              },
              {
                src: images.alqueria2,
                alt: 'imagen del proyecto5',
                // captionTitle: 'Control Alqueria',
                // captionText: 'Control documental, vigencia semaforizada, notificaciones automaticas, gestion de contratistas y mas'
              },
              {
                src: images.alqueria3,
                alt: 'imagen del proyecto5',
                // captionTitle: 'Control Alqueria',
                // captionText: 'Base de datos interactiva de facil uso para la gestion de contratistas y auxiliares de la compañia'
              },
        ]
    },
];
function CardsData(){ 
  return (
    <div className="cardsContainer">
        {cardData.map((cardInfo, index) => (
            <ProyectCards key={index} cardinfo={cardInfo}/>
        ))}
    </div>
  );
}

export default CardsData