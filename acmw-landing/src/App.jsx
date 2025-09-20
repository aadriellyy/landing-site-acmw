import React from 'react';
import Header from './components/Header'
import Hero from './pages/sections/Hero'
import Dados from './components/Dados';
import Mvv from './pages/sections/Mvv';
import Localizacao from './pages/sections/Localizacao';
import Eventos from './components/Eventos'
import Footer from './components/Footer';
import Members from './pages/sections/Members';
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
