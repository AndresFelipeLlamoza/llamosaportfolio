import React from 'react';
import Card from 'react-bootstrap/Card';

const SkillCards = (skillsprop) => {
  return (
    <div>
    <Card className="skillCardStyle text-white" border="danger" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={skillsprop.img} />
      <Card.Body>
        <Card.Title className="cardTitle">{skillsprop.cardtitle}</Card.Title>
      </Card.Body>
    </Card>
    </div>
  )
};

export default SkillCards