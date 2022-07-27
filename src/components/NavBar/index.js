import React from 'react';
import { Navbar } from 'react-bootstrap';
// import { Link } from "react-router-dom";
// import { CgGitFork } from "react-icons/cg";
// import { ImBlog } from "react-icons/im";
import { Container } from 'react-bootstrap';

const NavBar = () => {
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

  return (
    <Navbar>
      <Container>
        <Navbar href="/" className="d-flex">
          <img className='img-fluid log' alt='brand' />
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default NavBar;
