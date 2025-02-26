import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Ramen from '../assets/Ramen.webp';
import Okonomiyaki from '../assets/Okonomiyaki.webp';
import Sushi from '../assets/Sushi.webp';
import Takoyaki from '../assets/takoyaki.webp';

const FoodCulture = () => {
  return (
    <>
    <Container  fluid className='food-section d-flex justify-content-center' >
     <Row className='justify-content-center align-items-end'>
        <Col md={8} className='food-content-bg p-5'>
        <h2 className='display-3 fw-bold text-center text-black'>Ruokakulttuuri Japanissa</h2>
        <p className='text-black lead'>
        Japanilainen keittiö on paljon muutakin kuin pelkkää sushia! 
        Se on yhdistelmä hienovaraisia makuja, tuoreita raaka-aineita 
        ja tarkasti valmistettuja annoksia. Jokaisella alueella on omat 
        erikoisuutensa, ja matkailijan kannattaakin kokeilla mahdollisimman
         monipuolisesti eri ruokalajeja. 
        </p>
        </Col>
     </Row>
    </Container>

    <Container>
    <Row className='justify-content-center align-items-center'>
        <Col xs={12} md={6} className='text-start order-1 order-md-0'>
            <h2 className='fw-bold'>Ramen</h2>
            <p>
                Japanilainen nuudelikeitto, joka koostuu maustetusta liemestä, 
                vehnänuudeleista ja erilaisista täytteistä, kuten siankyljestä 
                (chashu), kevätsipulista ja merilevästä. Ramenin maut vaihtelevat 
                alueittain, ja suosittuja liemipohjia ovat soija, miso ja tonkotsu (sianluuliemi).
            </p>
        </Col>
        <Col xs={12} md={6} className='mb-2 order-0 order-md-1'> 
            <Image className='img-fluid' src={Ramen} alt="Ramen" />
        </Col>
    </Row>
    <hr className='w-100 my-5'/>
    
    <Row className='justify-content-center align-items-center'>
        <Col xs={12} md={6} className='mb-2 order-0 order-md-0'> 
            <Image className='img-fluid' src={Okonomiyaki} alt="Okonomiyaki" />
        </Col>
        <Col xs={12} md={6} className='text-start order-1 order-md-1'>
            <h2 className='fw-bold'>Okonomiyaki</h2>
            <p>
                Japanilainen suolainen pannukakku, joka sisältää kaalia 
                ja muita täytteitä, kuten lihaa, äyriäisiä tai juustoa.
                Se paistetaan rapeaksi ja tarjoillaan usein makean ja suolaisen
                okonomiyaki-kastikkeen, majoneesin, merilevän ja bonito-hiutaleiden kera.
            </p>
        </Col>
    </Row>
    <hr className='w-100 my-5'/>

    <Row className='justify-content-center align-items-center'>
        <Col xs={12} md={6} className='text-start order-1 order-md-0'>
            <h2 className='fw-bold'>Takoyaki</h2>
            <p>
                Pyöreät, sisältä pehmeät ja pinnalta rapeat taikinapallot, 
                joiden sisällä on mustekalapaloja. Ne valmistetaan erityisessä
                takoyaki-pannussa ja tarjoillaan usein takoyaki-kastikkeen, majoneesin,
                merileväjauheen ja bonito-hiutaleiden kera.
            </p>
        </Col>
        <Col xs={12} md={6} className='mb-2 order-0 order-md-1'> 
            <Image className='img-fluid' src={Takoyaki} alt="Takoyaki" />
        </Col>
    </Row>
    <hr className='w-100 my-5'/>

    <Row className='justify-content-center align-items-center'>
        <Col xs={12} md={6} className='mb-2 order-0 order-md-0'> 
            <Image className='img-fluid' src={Sushi} alt="Sushi" />
        </Col>
        <Col xs={12} md={6} className='text-start order-1 order-md-1'>
            <h2 className='fw-bold'>Sushi</h2>
            <p>
                Maailmankuulu japanilainen ruokalaji, jossa yhdistyy 
                etikalla maustettu riisi ja erilaiset täytteet, kuten tuore kala,
                äyriäiset tai vihannekset. Sushia on monia tyyppejä, kuten nigiri 
                (käsimuotoiltu riisipallo täytteellä), maki (rullasushi) ja sashimi 
                (pelkkä raaka kala ilman riisiä).
            </p>
        </Col>
    </Row>
</Container> 
</>
  );
};

export default FoodCulture;