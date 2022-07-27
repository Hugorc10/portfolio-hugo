import React, { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import particlesOptions from '../../particles.json';
import Particle from '../../components/Particle';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Type from '../../components/Type/index';
import Home2 from './home2';
import homeLogo from "../../Assets/home-main.svg";

const Home = () => {
  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle options={particlesOptions} init={particlesInit} />
        <Container>
          <Row>
            <Col md={7} className="home-header" >
              <h1 style={{ paddingBottom: 15 }} className="heading" >
                Ola!{" "}
                <span className="text-primary">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Eu sou
                <strong className="main-name"> Hugo Teixeira Mafra</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col>
              <img
                src={homeLogo}
                alt='home pic'
                className='img-fluid'
                style={{
                  maxHeight: "450px"
                }} />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section >
  )
}

export default Home;
