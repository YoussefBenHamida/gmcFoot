import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
} from 'reactstrap';
import { registerUser } from '../redux/actions';


const RegisterModal = () => {
  const [modal, setModal] = useState(false);
  const [name,setName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")





  const toggle = () => {
    setModal(!modal);
  }; 
  const dispatch = useDispatch();
  const registerr=()=>{
    const newUser={name,lastName,email,password}
    dispatch(registerUser(newUser))
    toggle()
  }

  return (
    <div style={{ padding: '0 15px' }}>
      <NavLink onClick={toggle} href="#">
        Register
      </NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="mb-3"
              onChange={(e)=>(setName(e.target.value))}
              />
              <Label for="name">Last Name</Label>
              <Input
onChange={(e)=>(setLastName(e.target.value))}
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                className="mb-3"
              />
              <Label for="email">Email</Label>
              <Input
onChange={(e)=>(setEmail(e.target.value))}
                type="email"
                name="email"
                id="email"
                placeholder="email"
              />
              <Label for="password">Password</Label>
              <Input
              onChange={(e)=>(setPassword(e.target.value))}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
              />
              <Button
                color="dark"
                style={{ marginTop: '2rem' }}
                block
             onClick={registerr}
              >
                Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default RegisterModal;