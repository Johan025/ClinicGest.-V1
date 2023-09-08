import React from 'react';
import Accueil from './pages/Accueil';
import About from './pages/About';
import Services from './pages/Services';
import Customers from './pages/Customers';
import SR from './pages/SR';
import Footer from './pages/Footer';

function App() {
  return (
    <div>
        <Accueil/>
        <About/>
        <Services/>
        <Customers/>
        <SR/>
        <Footer/>
    </div>
  );
}

export default App;
