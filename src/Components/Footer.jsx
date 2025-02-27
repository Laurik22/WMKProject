import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <Container>
                <Row>
                <Col>
                <p>
                Yhteistiedot:
                <br />
                info@japanmatkat.fi
                <br />
                +358 40 123 4567
                </p>
                </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;