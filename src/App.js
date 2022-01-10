import React, { useState, useEffect } from 'react'
import './global.css';
import  Container  from './components/container';
import Header from './components/header';
import MoviesContainer from './components/movies';

function App() {
  

  return (
      <Container>
        <Header></Header>
        <MoviesContainer></MoviesContainer>
      </Container>
  );

} 

export default App;
