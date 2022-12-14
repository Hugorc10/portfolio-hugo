import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { RiToolsLine } from 'react-icons/ri';
import { CgGitFork, CgFileDocument } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/images/hugo-logo.png';

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);
  // const [toggle, setToggle] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);
  // const container = useRef(null);

  // const handleScroll = (e) => {
  //   if (window.scrollY > 0) {
  //     setIsScrolled(true);
  //   } else {
  //     setIsScrolled(false);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   }
  // }, [])

  // useEffect(() => {
  //   const close = (e) => {
  //     if (e.keyCode === 27) {
  //       modalWillClose();
  //     }
  //   }
  // }, [])

  // const modalWillOpen = () => {
  //   setToggle(true);
  // }

  // const modalWillClose = () => {
  //   setToggle(false);
  // }

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setNavColour(true);
    } else {
      setNavColour(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? 'sticky' : 'navbar'}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={Logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            setExpand(expand ? false : 'expanded');
          }}
        >
          <span />
          <span />
          <span />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
                <AiOutlineHome style={{ marginBottom: '2px' }} />
                {' '}
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => setExpand(false)}
              >
                <AiOutlineUser style={{ marginBottom: '2px' }} />
                {' '}
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => setExpand(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: '2px' }}
                />
                {' '}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => setExpand(false)}
              >
                <GiSkills
                  style={{ marginBottom: '2px' }}
                />
                {' '}
                Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => setExpand(false)}
              >
                <RiToolsLine style={{ marginBottom: '2px' }} />
                {' '}
                Tools
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => setExpand(false)}
              >
                <CgFileDocument style={{ marginBottom: '2px' }} />
                {' '}
                Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Hugorc10"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: '1.2em' }} />
                {' '}
                <AiFillStar style={{ fontSize: '1.1em' }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
