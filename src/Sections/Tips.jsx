import React from 'react';
import { Container, Row , Col } from 'react-bootstrap';
import { TrainFront } from 'react-bootstrap-icons';
import { Cash } from 'react-bootstrap-icons';
import { ChatDots } from 'react-bootstrap-icons';
import { People } from 'react-bootstrap-icons';

const Tips = () => {
    return (
        <Container className='tips-section text-start' >
            <h2 className='display-5 fw-bold mb-5'> Käytännön vinkkejä Japaniin matkustaville</h2>
            <Row className='mb-5'>
                <Col>
                <h3 className='m-0'> <TrainFront size={40} color='black'className='me-1' />
                Liikkuminen Japanissa</h3>
                </Col>
                <hr className='mb-4 mt-1'/>
                <Col>
                <p>
                Japani tunnetaan tehokkaasta ja täsmällisestä julkisesta 
                liikenteestään. Kaupunkien sisällä ja niiden välillä liikkuminen on helppoa, kunhan tuntee perusasiat. 
                </p>
                <ul>
                    <li>
                    Juna ja metro: Suurin osa matkailijoista käyttää junia
                     ja metroja, erityisesti suurkaupungeissa kuten Tokiossa 
                     ja Osakassa. Suica- tai Pasmo-kortti toimii maksuvälineenä
                      useimmissa julkisissa liikennevälineissä ja sitä voi käyttää
                       myös kaupoissa ja automaateissa.
                    </li>
                    <br />
                    <li>
                    Shinkansen (luotijuna): Nopein tapa matkustaa kaupungista 
                    toiseen on Shinkansen-juna. Japan Rail Pass on erinomainen valinta,
                     jos aikoo tehdä useita pitkiä matkoja. 
                    </li>
                    <br />
                    <li>
                    Bussit ja taksit: Bussit ovat yleisiä erityisesti pienemmissä kaupungeissa.
                     Taksit ovat kalliimpia, mutta niitä käytetään paljon öisin, kun metro ei kulje.
                      Taksin ovet avautuvat automaattisesti, joten niitä ei tarvitse itse avata! 
                    </li>
                </ul>
                </Col>
            </Row>
            <Row className='mb-5'>
            <Col>
                <h3 className='m-0'> <Cash size={40} color='black'className='me-1' />
                Rahan käyttö ja maksaminen</h3>
                </Col>
                <hr className='mb-4 mt-1'/>
                <Col>
                <p>
                Vaikka Japani on teknologisesti kehittynyt maa, käteinen on edelleen hyvin yleisessä käytössä. 
                </p>
                <ul>
                    <li>
                    Käteinen vs. kortti: Suuremmissa kaupoissa ja ravintoloissa korttimaksu toimii, mutta pienissä kaupoissa ja perinteisissä ravintoloissa kortteja ei välttämättä hyväksytä. On hyvä pitää mukana jonkin verran käteistä. 
                    </li>
                    <br />
                    <li>
                    Rahan nostaminen: Kaikki pankkiautomaatit eivät hyväksy kansainvälisiä kortteja, mutta 7-Eleven-konbinit ja Japan Postin automaatit toimivat lähes aina ulkomaisilla korteilla.
                    </li>
                    <br />
                    <li>
                    IC-kortit (Suica, Pasmo): Näillä voi maksaa julkisessa liikenteessä, mutta myös kaupoissa, juoma-automaateissa ja jopa joissakin ravintoloissa. 
                    </li>
                </ul>
                </Col>
            </Row>
            <Row className='mb-5'>
                <Col>
                <h3 className='m-0'> <ChatDots size={40} color='black'className='me-1' />
                Kommunikaatio ja kieli</h3>
                </Col>
                <hr className='mb-4 mt-1'/>
                <Col>
                <p>
                Japani on turvallinen ja ystävällinen maa, mutta kielimuuri voi joskus olla haaste, sillä kaikki eivät puhu englantia. 
                </p>
                <ul>
                    <li>
                    Perussanastoa kannattaa opetella: Vaikka monet japanilaiset ymmärtävät englantia, jo pelkkä "Arigatou gozaimasu" (kiitos) tai "Sumimasen" (anteeksi) auttaa kommunikaatiossa. 
                    </li>
                    <br />
                    <li>
                    Kääntäjäapplikaatiot: Sovellukset, kuten Google Translate ja Yomiwa, voivat auttaa lukemaan japaninkielisiä kylttejä ja ruokalistoja. 
                    </li>
                    <br />
                    <li>
                    Opasteet englanniksi: Suurimmissa kaupungeissa ja rautatieasemilla kyltit ja kuulutukset ovat usein myös englanniksi, mutta pienemmillä asemilla ja maaseudulla näin ei välttämättä ole. 
                    </li>
                </ul>
                </Col>
                </Row>
                <Row className='mb-5'>
                    <Col>
                    <h3 className='m-0'> <People size={40} color='black'className='me-1' />
                Kulttuuri erot ja käytöstavat</h3>
                    </Col>
                    <hr className='mb-4 mt-1'/>
                    <Col>
                    <p>
                    Japanissa on monia kohteliaisuussääntöjä, jotka voivat olla matkailijalle uusia. Tässä muutama tärkeä asia muistaa: 
                    </p>
                    <ul>
                        <li>
                        Älä puhu kovaan ääneen julkisilla paikoilla: Japanissa arvostetaan rauhallisuutta, erityisesti julkisissa liikennevälineissä. 
                        </li>
                        <br />
                        <li>
                        Roskat kuljetetaan usein itse pois: Julkisia roskiksia on harvassa, joten monet kantavat mukanaan pientä roskapussia. 
                        </li>
                        <br />
                        <li>
                        Älä tökkää syömäpuikkoja pystysuoraan riisiin: Tämä muistuttaa hautajaisseremoniaa ja on huonon onnen merkki. 
                        </li>
                        <br />
                        <li>
                        Kenkien riisuminen: Temppeleissä, kodeissa ja joissain ravintoloissa kengät otetaan pois sisään tullessa. 
                        </li>
                    </ul>
                    </Col>
                </Row>
        </Container>
    );
};

export default Tips;