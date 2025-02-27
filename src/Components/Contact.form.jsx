import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const ContactForm = () => {
    return (
        <Container className='text-start' >
            <Row className='justify-content-center'>
            <Col md={5}>
            <h2>Ota yhteyttä </h2>
            <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Inceptos dis dolor facilisi vulputate cursus. Enim porta maecenas venenatis blandit sapien sed dapibus. Pretium pretium interdum viverra curae accumsan vulputate inceptos conubia. Efficitur varius sed purus vehicula himenaeos. Adipiscing netus consectetur commodo nec metus ullamcorper. Justo etiam hac feugiat mi risus aliquet penatibus ipsum pellentesque. Quisque lobortis porttitor; placerat platea torquent litora. Iaculis quis adipiscing senectus magna semper elementum quis. Conubia massa ante nascetur; rutrum orci est.
            </p>
            <p>
                Yhteistiedot:
                <br />
                info@japanmatkat.fi
                <br />
                +358 40 123 4567
            </p>
            </Col>
            <Col md={5} >
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Nimi</Form.Label>
                    <Form.Control type="text"  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>* Sähköposti</Form.Label>
                    <Form.Control type="email"  />
                </Form.Group>

                <Form.Group className='mb-2' controlId="formMessage">
                    <Form.Label>* Viesti</Form.Label>
                    <Form.Control as="textarea" rows={4}  />
                </Form.Group>

                <Button variant="danger" >
                    Lähetä
                </Button>
            </Form>
            </Col>
            </Row>
        </Container>
    );
};

export default ContactForm;