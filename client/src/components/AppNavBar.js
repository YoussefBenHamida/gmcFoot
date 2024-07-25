import React,{useState,Fragment} from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import {Link,useNavigate} from "react-router-dom"
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';
import { logout } from '../redux/actions';
function AppNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
const user=useSelector((state)=>state.user)
console.log(user)
const dispatch=useDispatch()
const navigate=useNavigate()
const logoutt=()=>{
  dispatch(logout())
  navigate("/")
}

    const authLinks = (
      
      <Fragment>
        <NavItem>
            <span className="navbar-text mr-3">
              <strong>
             {user?user.name:null}
              </strong>
            </span>
        </NavItem>
        <NavLink href="#" onClick={logoutt}>
          Logout
        </NavLink>
        <button ><Link to="/dashboard">Matchs</Link></button>
      </Fragment>
    

    );
  
    const guestLinks = (
      <Fragment>
        <NavItem>
          <RegisterModal />
        </NavItem>
        <NavItem>
          <LoginModal />
        </NavItem>
      </Fragment>
    );
  
  return (
    <div style={{backgroundImage: 'linear-gradient(35deg, rgb(12, 13, 44) 1%, #1f2127 50%, #1f2127 70%, #1f2127 70%, #474a51 100%)', height:"100px"}}>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Takwira</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
            {user?authLinks:guestLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default AppNavBar