import React from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
import Header from '../Components/Header';
import Introduction from './Introduction';
import Sights from './sights';
import ContactForm from '../Components/Contact.form';

const LandingPage = () => {
  return (
    <>
    <div className='landing-page-bg'>
    <Container className='landing-page-content' >
        <Row className='align-items-center'>
          <Col md={5} >
            <h1 className='display-1'> Matkusta Japaniin</h1>
            <p className='lead'>
            Löydä Japanin upeat nähtävyydet, herkuttele sushi-illallisella ja 
            tutustu maan ainutlaatuiseen kulttuurin
          </p>
          <div className='d-grid mx-auto' style={{maxWidth: '450px'}}>
            <Button className='mt-3 shadow' variant='danger' href='#sights' size='lg'>
              Tutustu Kohteisiin
            </Button>
          </div>
            </Col>
        </Row>
    </Container>
    </div>
    <section>
    <Introduction/>
    </section>
    <section>
    <Sights></Sights>
    </section>
    <section>
    <ContactForm></ContactForm>
    </section>
    </>
  );
};

export default LandingPage;