import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { CheckSquareFill } from 'react-bootstrap-icons';
import fuji from '../assets/Fuji.webp';
import ramen from '../assets/Ramen.webp';
import hiroshima from '../assets/Hiroshima.webp';

const Introduction = () => {
  return (
      <Container  id='introduction'>
        <Row className='mb-3 text-start justify-content-center'>
          <Col md={10}> 
            <h2 className='display-5 fw-bold pb-2'>Miksi matkustaa Japaniin?</h2>
            <p >
            Japani on ainutlaatuinen matkakohde, jossa perinteet ja moderni teknologia 
            sulautuvat kiehtovalla tavalla yhteen. Tämä saarivaltio tarjoaa matkailijoille 
            unohtumattomia elämyksiä – voit aamulla vierailla vuosisatoja vanhassa temppelissä
             ja illalla ihailla Tokion vilkasta neonvalomerta. 
            </p>
            <p >
            Olitpa sitten kiinnostunut Japanin rikkaasta historiasta, 
            maailmankuulusta ruokakulttuurista tai henkeäsalpaavista maisemista,
             jokaiselle löytyy jotakin. Tässä oppaassa tutustumme Japanin kiehtovaan
              kulttuuriin, herkulliseen ruokaan ja upeisiin nähtävyyksiin, jotta voit 
              suunnitella täydellisen matkan tähän lumoavaan maahan. 
            </p>
            <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac in dapibus ultrices convallis massa nisi. Netus vel condimentum congue ante dis eget senectus torquent. Tortor viverra vestibulum senectus cursus volutpat suscipit integer. Sapien platea sed egestas mauris commodo blandit, aliquam iaculis sed. Elementum sollicitudin sociosqu fames porttitor ultrices fames rhoncus. Vivamus a lacus est odio odio blandit.
            </p>
            <p>
            Laoreet nullam maximus purus ultricies aliquam et dui mauris. Laoreet mauris condimentum fames ut elementum. Cras euismod maximus metus elementum quis. Dis volutpat senectus, id senectus nunc augue. Pulvinar montes viverra leo sed nostra efficitur nam neque. Eu leo pellentesque semper et etiam feugiat netus. Nascetur mattis lacinia laoreet volutpat ac maximus elementum.
            </p>
          </Col>
        </Row>
        
        <Row className='justify-content-center'>
          <Col md={3} sm={4} xs={6} className='mb-4'>
            <Card>
              <Card.Img variant="top" src={fuji} />
              <Card.Body>
                <Card.Title>Upeat maisemat</Card.Title>
                
                <CheckSquareFill size={40} color='green' />
                
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={4}xs={6} className='mb-4'> 
            <Card >
              <Card.Img variant="top" src={hiroshima} />
              <Card.Body >
                <Card.Title>Rikas historia</Card.Title>
                
                <CheckSquareFill size={40} color='green'/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={4} xs={6} className='mb-4'>
            <Card >
              <Card.Img variant="top" src={ramen} />
              <Card.Body>
                <Card.Title>Ruoka paratiisi</Card.Title>
                
                <CheckSquareFill size={40} color='green' />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    
  );
};

export default Introduction;