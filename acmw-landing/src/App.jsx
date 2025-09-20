import React from 'react';
import Header from './components/Header'
import Hero from './sections/Hero'
import Dados from './components/Dados';
import Mvv from './sections/Mvv';
import Localizacao from './sections/Localizacao';
import Eventos from './components/Eventos'
import Footer from './components/Footer';
import Members from './sections/Members';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Dados />
              <Mvv />
              <Localizacao />
              <Eventos />
              <Footer />
            </>
          }
        />
        <Route
          path="/Members"
          element={
            <>
              <Header />
              <Members />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App
