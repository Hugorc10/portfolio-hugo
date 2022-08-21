import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import {
  // AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Pensando e Desenvolvido por Hugo Teixeira Mafra</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>
            Copyright ©
            {year}
          </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Hugorc10"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                href="https://twitter.com/Soumyajit4419"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li> */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/hugo-teixeira-mafra/"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/hugotmafra_"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
