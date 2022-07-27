import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { Container } from 'react-bootstrap';
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { Link } from "react-router-dom";

import { CgFileDocument } from "react-icons/cg";

const NavBar = () => {
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

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            setExpand(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => setExpand(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => setExpand(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => setExpand(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://blogs.soumya-jit.tech/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
