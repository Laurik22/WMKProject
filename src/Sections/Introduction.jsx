import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { CheckSquareFill } from 'react-bootstrap-icons';
import fuji from '../assets/Fuji.webp';
import ramen from '../assets/Ramen.webp';
import hiroshima from '../assets/Hiroshima.webp';

const Introduction = () => {
  return (
      <Container id='introduction'>
        <Row className='mb-3 justify-content-center'>
          <Col className='text-center'>
            <h2 className='display-5 fw-bold pb-2'>Miksi matkustaa Japaniin?</h2>
            <p className=''>
            Japani on lumoava matkakohde, jossa perinteet ja moderni maailma 
            sulautuvat yhteen ainutlaatuisella tavalla. Ikivanhat temppelit, 
            geishakulttuuri ja samuraiden perintö elävät rinta rinnan vilkkaan 
            kaupunkielämän, neonvalojen ja huipputeknologian kanssa. Täällä voit
             herätä zen-puutarhan rauhassa, vaeltaa bambumetsissä, vierailla satoja 
             vuosia vanhoissa pyhätöissä – ja hetkeä myöhemmin astua futuristiseen metropoliin, 
             jossa huipputekniikka ja innovaatio näkyvät joka kulmassa. Olipa intohimosi upea
              luonto, kiehtova historia tai maailmanluokan ruokaelämykset, Japani tarjoaa 
              jokaiselle matkailijalle jotakin unohtumatonta.
            </p>
          </Col>
        </Row>
        <Row className='justify-content-center' >
          <Col md={4} sm={6} xs={8} className='mb-4'>
            <Card className='h-100 shadow'>
              <Card.Img variant="top" src={fuji} />
              <Card.Body>
                <Card.Title>Upeat maisemat</Card.Title>
                <Card.Text >
                  Fuji-vuori, bambumetsät ja trooppiset rannat.
                </Card.Text>
                <CheckSquareFill size={40} color='green' />
                
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6}xs={8} className='mb-4'> 
            <Card className='h-100 shadow'>
              <Card.Img variant="top" src={hiroshima} />
              <Card.Body >
                <Card.Title>Rikas historia</Card.Title>
                <Card.Text>
                  Temppelit, geishat ja samuraiden perintö odottavat sinua.
                </Card.Text>
                <CheckSquareFill size={40} color='green'/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6} xs={8} className='mb-4'>
            <Card className='h-100 shadow'>
              <Card.Img variant="top" src={ramen} />
              <Card.Body>
                <Card.Title>Ruoka paratiisi</Card.Title>
                <Card.Text>
                  Sushi, ramen ja izakayat tekevät jokaisesta ateriasta elämyksen.
                </Card.Text>
                <CheckSquareFill size={40} color='green' />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    
  );
};

export default Introduction;