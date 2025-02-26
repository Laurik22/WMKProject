import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FoodCulture = () => {
  return (
    <Container  fluid className='food-section d-flex justify-content-center' id='food-culture'>

     <Row className='justify-content-center align-items-end  '>
      
        <Col md={8} className='food-content-bg p-5'>
        
        <h2 className='display-3 fw-bold text-center text-white'>Ruoka kulttuuri Japanissa</h2>
        <p className='text-white lead'>
        Japanilainen keittiö on paljon muutakin kuin pelkkää sushia! 
        Se on yhdistelmä hienovaraisia makuja, tuoreita raaka-aineita 
        ja tarkasti valmistettuja annoksia. Jokaisella alueella on omat 
        erikoisuutensa, ja matkailijan kannattaakin kokeilla mahdollisimman
         monipuolisesti eri ruokalajeja. 
        </p>
        
        </Col>
        
     </Row>
     
    </Container>
  );
};

export default FoodCulture;