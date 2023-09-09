import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tilt from 'react-parallax-tilt';
import {
  AiFillGithub,
  // AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
// import particlesOptions from './particles.json';
import Particle from '../../components/Particles';
import Type from '../../components/Type/index';
import homeLogo from '../../Assets/home-main.svg';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import myImg from '../../Assets/avatar.jpg';

function Home() {
  return (
    <>
      <section>
        <Container fluid className="home-section" id="home">
          <Particle id="tsparticles" />
          <Container>
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Ola!
                  {' '}
                  <span className="text-primary">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  Eu sou
                  <strong className="main-name"> Hugo Teixeira Mafra</strong>
                </h1>

                <div style={{ padding: 50, textAlign: 'left' }}>
                  <Type />
                </div>
              </Col>

              <Col>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{
                    maxHeight: '450px',
                  }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
        {/* <Home2 /> */}
      </section>
      <section>
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: '2.6em' }}>
                  QUEM
                  {' '}
                  <span className="purple">SOU</span>
                  {' '}
                  EU
                </h1>
                <p className="home-about-body">
                  Apaixonado por programação web, tenho 27 anos e atualmente moro na Bahia.
                  <br />
                  <br />
                  Tenho conhecimento em tais linguagens:
                  <i>
                    <b className="purple"> Java, HTML, CSS, Sass, Javascript, TypeScript. </b>
                  </i>
                  <br />
                  <br />
                  Graduando em Ciência da Computação, meus principais interesses são em construir
                  <i>
                    <b className="purple">
                      {' '}
                      aplicações web e serverless applications.
                      {' '}
                    </b>
                  </i>
                  <br />
                  <br />
                  Eu gosto de trabalhar em projetos que me permitam
                  desenvolver aplicações com
                  {' '}
                  <b className="purple">Node.js</b>
                  {' '}
                  and
                  <i>
                    <b className="purple">
                      {' '}
                      bibliotecas e frameworks Javascript modernas
                    </b>
                  </i>
                  &nbsp; como
                  <i>
                    <b className="purple"> React.js e Next.js</b>
                  </i>
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={myImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>ME ENCONTRE</h1>
                <p>
                  Se sinta livre para
                  {' '}
                  <span className="purple">me encontrar </span>
                  nas redes sociais
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/Hugorc10"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  {/* <li className="social-icons">
              <a
                href="https://twitter.com/hugorc_10"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li> */}
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/hugo-teixeira-mafra/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/hugotmafra_"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </>
  );
}

export default Home;
