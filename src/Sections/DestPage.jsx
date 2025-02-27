import React from 'react';
import fuji from '../assets/Fuji.webp';
import hiroshima from '../assets/Hiroshima.webp';
import tokyo from '../assets/Tokyo.webp';
import osaka from '../assets/Osaka.webp';
import kioto from '../assets/Kioto.webp';
import { Container, Col, Row, Card } from 'react-bootstrap';

const DestPage = () => {
    return (
        <Container className="Dest-page">
            <Row className="mb-4 justify-content-center">
                <Col md={10}>
                    <h2 className='display-5 fw-bold'>Tokyo</h2>
                    <Card className='mb-2'>
                        <Card.Img variant="top" src={tokyo} alt="Tokyo" />
                    </Card>
                    <p className='text-start'>Tokyo on Japanin pääkaupunki ja maailman suurin metropolialue. Se on tunnettu modernista arkkitehtuuristaan, 
                        vilkkaasta yöelämästään ja monipuolisesta ruokakulttuuristaan. Tokiossa voi kokea sekä perinteisiä temppeleitä että 
                        futuristisia pilvenpiirtäjiä. 
                        Kaupunki on myös teknologian ja muodin keskus, joka houkuttelee matkailijoita kaikkialta
                         maailmasta.
                         <br />
                         Proin et rutrum mi. Fusce accumsan condimentum pulvinar. Vivamus semper quam sit amet dolor blandit bibendum. 
                         Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada 
                         fames ac turpis egestas. Praesent faucibus diam nec feugiat consectetur. Pellentesque id accumsan nunc. Curabitur placerat eu quam quis tristique. Duis facilisis est enim, scelerisque sagittis nisi pellentesque vel. Proin finibus massa vel lorem vehicula porta. Fusce ac nibh volutpat, malesuada metus et, imperdiet mi. Fusce fringilla velit nunc, vitae pellentesque 
                         magna imperdiet sed. Praesent lobortis metus a rhoncus pulvinar. Mauris blandit sed velit sed tempor.
                         </p>
                </Col>
            </Row>
            <Row className="mb-4 justify-content-center">
                <Col md={10}>
                    <h2 className='display-5 fw-bold'>Osaka</h2>
                    <Card className='mb-2'>
                        <Card.Img variant="top" src={osaka} alt="Osaka" />
                    </Card>
                    <p className='text-start'>Osaka on Japanin kolmanneksi suurin kaupunki, joka tunnetaan herkullisesta katuruoastaan,
                         kuten takoyakista ja okonomiyakista. Kaupungissa on myös kuuluisa Osakan linna, joka on yksi Japanin tunnetuimmista 
                         historiallisista maamerkeistä. Osakan asukkaat ovat tunnettuja ystävällisyydestään ja kaupungin vilkkaasta yöelämästä.
                         <br />
                         Phasellus pretium risus in dui commodo, ut aliquam lacus facilisis. Integer sagittis metus in tortor luctus, quis rutrum risus ultricies. Donec egestas gravida eros, id rutrum mi commodo sodales. Nunc lobortis, lacus et accumsan hendrerit, diam lectus accumsan erat, vel posuere risus ligula ac sapien. Pellentesque ut hendrerit lectus. Maecenas nec nulla vulputate, dictum mi ut, hendrerit lacus. Curabitur non ipsum vel diam dapibus lobortis vel et tortor. Nulla tincidunt ipsum metus, porta fringilla eros ornare sed. Vivamus pulvinar, nisi in volutpat malesuada, metus nisl iaculis mauris, et porta neque mauris sed massa. Vestibulum hendrerit tortor eu sem varius, finibus sollicitudin ante fermentum. Sed nec ornare orci. Suspendisse ut iaculis ex. Phasellus eget dui vitae libero sodales sodales. Integer facilisis leo lacus, sit amet interdum est tristique id. Aliquam aliquam maximus urna in pharetra.
                         </p>
                </Col>
            </Row>
            <Row className="mb-4 justify-content-center">
                <Col md={10}>
                    <h2 className='display-5 fw-bold'>Kioto</h2>
                    <Card className='mb-2'>
                        <Card.Img variant="top" src={kioto} alt="Kioto" />
                    </Card>
                    <p className='text-start'>Kioto on Japanin historiallinen sydän, joka toimi maan pääkaupunkina yli tuhannen 
                        vuoden ajan. Kaupungista löytyy lukemattomia temppeleitä, pyhäkköjä ja perinteisiä puutarhoja. Kioton geishakulttuuri 
                        ja teeseremoniat tarjoavat ainutlaatuisen mahdollisuuden kokea Japanin rikas perintö.
                        <br />
                        Phasellus pretium risus in dui commodo, ut aliquam lacus facilisis. Integer sagittis metus in tortor luctus, quis rutrum risus ultricies. Donec egestas gravida eros, id rutrum mi commodo sodales. Nunc lobortis, lacus et accumsan hendrerit, diam lectus accumsan erat, vel posuere risus ligula ac sapien. Pellentesque ut hendrerit lectus. Maecenas nec nulla vulputate, dictum mi ut, hendrerit lacus. Curabitur non ipsum vel diam dapibus lobortis vel et tortor. Nulla tincidunt ipsum metus, porta fringilla eros ornare sed. Vivamus pulvinar, nisi in volutpat malesuada, metus nisl iaculis mauris, et porta neque mauris sed massa. Vestibulum hendrerit tortor eu sem varius, finibus sollicitudin ante fermentum. Sed nec ornare orci. Suspendisse ut iaculis ex. Phasellus eget dui vitae libero sodales sodales. Integer facilisis leo lacus, sit amet interdum est tristique id. Aliquam aliquam maximus urna in pharetra.
                        </p>
                </Col>
            </Row>
            <Row className="mb-4 justify-content-center">
                <Col md={10}>
                    <h2 className='display-5 fw-bold'>Hiroshima</h2>
                    <Card className='mb-2'>
                        <Card.Img variant="top" src={hiroshima} alt="Hiroshima" />
                    </Card>
                    <p className='text-start'>Hiroshima on kaupunki, joka muistetaan toisen maailmansodan aikaisista tapahtumista. 
                        Nykyään se symboloi rauhaa ja toivoa, ja siellä sijaitsee Rauhan muistopuisto ja Hiroshiman linna. Kaupunki
                         tarjoaa myös kauniita puutarhoja ja herkullista paikallista ruokaa, kuten okonomiyakia.
                         <br />
                         Phasellus pretium risus in dui commodo, ut aliquam lacus facilisis. Integer sagittis metus in tortor luctus, quis rutrum risus ultricies. Donec egestas gravida eros, id rutrum mi commodo sodales. Nunc lobortis, lacus et accumsan hendrerit, diam lectus accumsan erat, vel posuere risus ligula ac sapien. Pellentesque ut hendrerit lectus. Maecenas nec nulla vulputate, dictum mi ut, hendrerit lacus. Curabitur non ipsum vel diam dapibus lobortis vel et tortor. Nulla tincidunt ipsum metus, porta fringilla eros ornare sed. Vivamus pulvinar, nisi in volutpat malesuada, metus nisl iaculis mauris, et porta neque mauris sed massa. Vestibulum hendrerit tortor eu sem varius, finibus sollicitudin ante fermentum. Sed nec ornare orci. Suspendisse ut iaculis ex. Phasellus eget dui vitae libero sodales sodales. Integer facilisis leo lacus, sit amet interdum est tristique id. Aliquam aliquam maximus urna in pharetra.
                         </p>
                </Col>
            </Row>
            <Row className="mb-4 justify-content-center">
                <Col md={10}>
                    <h2 className='display-5 fw-bold'>Fuji</h2>
                    <Card className='mb-2'>
                        <Card.Img variant="top" src={fuji} alt="Fuji" />
                    </Card>
                    <p className='text-start'>Fuji-vuori on Japanin korkein vuori ja suosittu matkailukohde. Se tarjoaa 
                        upeat maisemat ja on pyhä paikka monille japanilaisille. Fuji-vuori on suosittu vaelluskohde, ja 
                        sen ympäristö tarjoaa upeita luonnonmaisemia sekä kauniita järviä, kuten Kawaguchi-järvi. Vuori on 
                        suosittu matkakohde erityisesti kesäisin.
                        <br />
                        Phasellus pretium risus in dui commodo, ut aliquam lacus facilisis. Integer sagittis metus in tortor luctus, quis rutrum risus ultricies. Donec egestas gravida eros, id rutrum mi commodo sodales. Nunc lobortis, lacus et accumsan hendrerit, diam lectus accumsan erat, vel posuere risus ligula ac sapien. Pellentesque ut hendrerit lectus. Maecenas nec nulla vulputate, dictum mi ut, hendrerit lacus. Curabitur non ipsum vel diam dapibus lobortis vel et tortor. Nulla tincidunt ipsum metus, porta fringilla eros ornare sed. Vivamus pulvinar, nisi in volutpat malesuada, metus nisl iaculis mauris, et porta neque mauris sed massa. Vestibulum hendrerit tortor eu sem varius, finibus sollicitudin ante fermentum. Sed nec ornare orci. Suspendisse ut iaculis ex. Phasellus eget dui vitae libero sodales sodales. Integer facilisis leo lacus, sit amet interdum est tristique id. Aliquam aliquam maximus urna in pharetra.
                        </p>
                </Col>
            </Row>
        </Container>
    );
};

export default DestPage;
