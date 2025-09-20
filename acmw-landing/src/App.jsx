import React from 'react';
import Header from './components/Header'
import Hero from './sections/Hero'
import Dados from './components/Dados';
import Mvv from './sections/Mvv';
import Localizacao from './sections/Localizacao';
import Eventos from './components/Eventos'
import Footer from './components/Footer';
import Members from './sections/Members';

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Dados/>
    <Mvv/>
    <Localizacao/>
    <Eventos/>
    <Footer/>
    <Members/>
    </>
  )
}

export default App
