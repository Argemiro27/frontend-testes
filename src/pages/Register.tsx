import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
`;

const Title = styled.h1`
  margin-bottom: 3rem;
  color: #bababa;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  padding: 0.5rem;
  font-size: 0.9em;
  background-color: #17284a;
  color: #bababa;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  border: 1px solid gray;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #17284a;
  color: #bababa;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  background-color: #0d1f42;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`


function Register(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <Container>
      <Card>
        <Title>Inter Aduaneira</Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Registro</Button>
        </Form>
        <Button>Voltar</Button>
      </Card>
    </Container>
  );
};

export default Register;
