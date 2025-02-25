import React from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
import Header from '../Components/Header';

const LandingPage = () => {
  return (
    <div className='landing-page-bg'>
      <header>
      <Header/>
      </header>
    <Container fluid className='landing-page-content' >
        <Row className='align-items-center'>
          <Col md={5} >
            <h1 className='display-1'> Matkusta Japaniin</h1>
            <p className='lead'>
            Löydä Japanin upeat nähtävyydet, herkuttele sushi-illallisella ja 
            tutustu maan ainutlaatuiseen kulttuurin
          </p>
          <div className='d-grid mx-auto' style={{maxWidth: '450px'}}>
            <Button className='mt-3 fw-bold shadow bg-danger text-white' size='lg'>
              Tutustu Kohteisiin
            </Button>
          </div>
            </Col>
        </Row>
    </Container>
    </div>

  );
};

export default LandingPage;