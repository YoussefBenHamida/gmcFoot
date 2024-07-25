import React, { useState } from "react";
import { useDispatch } from "react-redux";

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
} from "reactstrap";
import { loginUser } from "../redux/actions";

const LoginModal = () => {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggle = () => {
    setModal(!modal);
  };
  const dispatch = useDispatch();

  const loginn = () => {
    dispatch(loginUser({ email, password }));
    toggle();
  };

  return (
    <div style={{ padding: "0 15px" }}>
      <NavLink onClick={toggle} href="#">
        Login
      </NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="mb-3"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                color="dark"
                style={{ marginTop: "2rem" }}
                block
                onClick={loginn}
              >
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LoginModal;
