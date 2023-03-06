import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import api from "../api";

interface LoginProps {
  email: string;
  password: string;
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginProps: LoginProps = { email, password };

    api.post('api/login', loginProps)
      .then(response => {
        // armazenar o token de autenticação no localStorage ou sessionStorage
        localStorage.setItem('token', response.data.token);
        // redirecionar o usuário para a página protegida
        window.location.href = '/inicio';
      })
      .catch(error => console.error(error));
  };

  return (
      <Container>
        <img src="../assets/logo.png" alt="" />
        <Card>
          <Title>Inter Aduaneira</Title>
          <Form onSubmit={handleSubmit}>
            <Icon><FaUser/></Icon>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Icon><FaLock /></Icon>
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Login</Button> 
            <Button className="cadastro">Esqueceu sua senha?</Button>
          </Form>
          <Link to="/register">
            <Button className="cadastro">Cadastrar-se</Button>
          </Link>
        </Card>
      </Container>
  );
};

export default Login;

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
  border-radius: 4px 4px 0px 0px;
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
  margin-bottom: 2rem;
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

const Icon = styled.span`
  position: relative;
  right: 30px;
  top: 65px;
  font-size: 18px;
  color: #000;
  width: 15px;
`