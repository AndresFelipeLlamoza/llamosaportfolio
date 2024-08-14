import React from 'react';
import SkillCards from '../components/skillCards';
import images from '../hooks/images';

const skillsInfo = [
    {
        img: images.html,
        cardtitle: "HTML",
    },
    {
        img: images.css,
        cardtitle: "CSS",
    },
    {
        img: images.php,
        cardtitle: "PHP",
    },
    {
        img: images.js,
        cardtitle: "JavaScript",
    },
    {
        img: images.react,
        cardtitle: "ReactJS",
    },
    {
        img: images.mysql,
        cardtitle: "MySQL",
    },

]

function SkillsData() {
  return (
    <div className="skillCardsContainer"> 
        {skillsInfo.map((skillsprop) => (
            <SkillCards img={skillsprop.img} cardtitle={skillsprop.cardtitle} />
        ))}
    </div>
  )
}

export default SkillsData