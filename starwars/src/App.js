import React from 'react';
import './App.css';
import Character from "./components/Character";
import styled from "styled-components";

const App = () => {
  const id=0;

  return (
    <Container>
      <h1 className="Header">
        <span role="img" aria-label="Star Wars">🚀</span>
        Star Wars Characters
        <span role="img" aria-label="Star Wars">🚀</span>
      </h1>
      <Character key={id}/>
    </Container>
  );
}

const Container = styled.div`
  text-align:center;
  .Header{
    font-size:4rem;
  }
`
export default App;
