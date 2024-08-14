import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Slider from '../components/slider'

const ProyectCards = ({ cardinfo }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
      <div>
        <Card style={{ width: '20rem' }} className="proyectCardStyle text-white" border="danger">
          <Card.Img variant="top" src={cardinfo.img}/>
          <Card.Body>
            <Card.Title className="pCardTitle">{cardinfo.cardTitle}</Card.Title>
              <Card.Text>
                {cardinfo.cardText}
              </Card.Text>
            <div className="cardBtn"><Button variant="custom" onClick={handleShow}>Mas Informacion</Button></div>
          </Card.Body>
        </Card>
        <Modal show={show} onHide={handleClose} >
        <Modal.Header className="modalStyle text-white" closeButton>
          <Modal.Title>{cardinfo.cardTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalStyle">
          <Slider info={cardinfo.carouselData}/>
        </Modal.Body>
      </Modal>
      </div>
  );
};

ProyectCards.propTypes = {
  cardinfo: PropTypes.shape({
    src: PropTypes.string.isRequired,
    cardTitle: PropTypes.string.isRequired,
    cardText: PropTypes.string.isRequired
  }).isRequired
}

export default ProyectCards;