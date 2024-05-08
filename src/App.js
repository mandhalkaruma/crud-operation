import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Navbar from './components/layout/Navbar';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import NoteFound from './components/NoteFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NoteFound />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
