import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Cookies from "js-cookie";

const Signup_form = () => {
  const [input, setInput] = useState({});
  const [token, setToken] = useState("");

  const fetchUser = () => {
    const data = {
      user: {email: input.email, password: input.password, password_confirmation: input.password_confirmation}
    };
    fetch("http://localhost:3000/api/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    .then((response) => {
      for (var pair of response.headers.entries()) { // accessing the entries
        console.log(pair)
        if (pair[0] === "authorization") { // key I'm looking for in this instance
        Cookies.set("token", pair[1])        }
      }
      return response.json()
    })
    .then((response) => {
      console.log(response)
      console.log(Cookies.get("token"))
    })
  };


  const clickFetch = () => {
    fetchUser()
  };

  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Form className="mt-5">
        <h1>Inscription</h1>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password confirmation</Form.Label>
          <Form.Control
            name="password_confirmation"
            type="password"
            placeholder="Password_confirmation"
            onChange={handleInputChange}
          />
        </Form.Group>
      </Form>
      <Button
        className="mb-5"
        onClick={() => clickFetch()}
        variant="primary"
        type="submit"
      >
        Sign up
      </Button>
    </>
  );
};
export default Signup_form;
