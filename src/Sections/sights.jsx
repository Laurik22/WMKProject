import React from 'react';
import { Container, Carousel, Card, Row, Col, Fade } from 'react-bootstrap';
import fuji from '../assets/Fuji.webp';
import ramen from '../assets/Ramen.webp';
import hiroshima from '../assets/Hiroshima.webp';



const Sights = () => {
  return (
    <Container id='sights'>
      <h2 className='display-4 fw-bold text-center mb-4'>Nähtävyydet</h2>
      <Carousel className='custom-carousel' interval={null} indicators={false}>
        {/* Ensimmäinen ryhmä (3 korttia) */}
        <Carousel.Item>
          <Row className='justify-content-center'>
            <Col xs={10} sm={6} md={4}>
              <Card className='h-100 shadow'>
                <Card.Img variant="top" src={fuji} />
                <Card.Body>
                  <Card.Title>Fuji-vuori</Card.Title>
                  <Card.Text>Fuji-vuori on Japanin korkein vuori ja suosittu vaelluskohde.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={10} sm={6} md={4} className='d-none d-sm-block'>
              <Card className='h-100 shadow'>
                <Card.Img variant="top" src={hiroshima} />
                <Card.Body>
                  <Card.Title>Hiroshima</Card.Title>
                  <Card.Text>Hiroshima on tunnettu historiastaan ja rauhanpuistostaan.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={10} md={4} className='d-none d-md-block'>
              <Card className='h-100 shadow'>
                <Card.Img variant="top" src={ramen} />
                <Card.Body>
                  <Card.Title>Ramen-museo</Card.Title>
                  <Card.Text>Ramen-museo tarjoaa herkullisia elämyksiä ramenin ystäville.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        {/* Toinen ryhmä (3 korttia) */}
        <Carousel.Item>
          <Row className='justify-content-center'>
            <Col xs={10} sm={6} md={4}>
              <Card className='h-100 shadow'>
                <Card.Img variant="top" src={fuji} />
                <Card.Body>
                  <Card.Title>Kioto</Card.Title>
                  <Card.Text>Kioto on tunnettu temppeleistään ja perinteisestä kulttuuristaan.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={10} sm={6} md={4} className='d-none d-sm-block'>
              <Card className='h-100 shadow'>
                <Card.Img variant="top" src={fuji} />
                <Card.Body>
                  <Card.Title>Tokio</Card.Title>
                  <Card.Text>Tokio on Japanin pääkaupunki ja modernin teknologian keskus.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={10} md={4} className='d-none d-md-block'>
              <Card className='h-100 shadow'>
                <Card.Img variant="top" src={fuji} />
                <Card.Body>
                  <Card.Title>Osaka</Card.Title>
                  <Card.Text>Osaka on kuuluisa ruoastaan ja vilkkaasta yöelämästään.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Sights;
