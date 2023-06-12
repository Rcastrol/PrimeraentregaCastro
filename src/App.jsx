import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import itemListcontainer from './components/itemListcontainer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <itemListcontainer greeting="Soy un componente react" />
 
    </div>
  );
}

export default App;
