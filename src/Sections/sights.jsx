import React from 'react';
import { Container, Card, Row, Col, CardImg, CardImgOverlay, CardText, CardTitle, Button } from 'react-bootstrap';
import fuji from '../assets/Fuji.webp';
import hiroshima from '../assets/Hiroshima.webp';
import tokyo from '../assets/Tokyo.webp';
import osaka from '../assets/Osaka.webp';
import kioto from '../assets/Kioto.webp';

const Sights = () => {
  
  return (
    <Container id='sights'>
      <Row className='justify-content-center'>
        <Col className='mb-4' md={10} >
          <Card className='shadow'>
            <CardImg src={tokyo} alt='Tokyo' style={{maxHeight:'500px'}}/>
            <CardImgOverlay className= 'justify-content-center align-items-center d-flex flex-column'>
              <CardTitle className='sights-textbg text-white display-3 fw-bold'>Kohteena Tokyo</CardTitle>
              <CardText className='sights-textbg text-white'>
                Futuristinen metropoli täynnä kontrasteja, Shibuyan vilinästä Meiji-temppelin rauhaan.
              </CardText>
              <Button size='lg' variant='danger'>
                Lue lisää
              </Button>
            </CardImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col className='mb-4' md={10}>
          <Card className='shadow'>
            <CardImg src={osaka} alt='Osaka' style={{ maxHeight: '500px'}} />
            <CardImgOverlay className= 'justify-content-center align-items-center d-flex flex-column'>
              <CardTitle className=' sights-textbg text-white display-3 fw-bold'>Kohteena Osaka</CardTitle>
              <CardText className='sights-textbg text-white'>
              Historiallinen kaupunki, jossa Fushimi Inarin torii-portit ja Gionin geishakulttuuri hurmaavat.
              </CardText>
              <Button size='lg' variant='danger'>
                Lue lisää
              </Button>
            </CardImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col className='mb-4' md={10}>
          <Card className='shadow'>
            <CardImg src={kioto} alt='Kioto' style={{ maxHeight: '500px'}} />
            <CardImgOverlay className= 'justify-content-center align-items-center d-flex flex-column'>
              <CardTitle className='sights-textbg text-white display-3 fw-bold'> Kohteena Kioto</CardTitle>
              <CardText className='t sights-textbg text-white'>
              Perinteikäs ja kaunis kaupunki Japanissa, tunnettu temppeleistään, puutarhoistaan ja geishakulttuuristaan.
              </CardText>
              <Button size='lg' variant='danger'>
                Lue lisää
              </Button>
            </CardImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Sights;
