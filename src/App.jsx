import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; // Jika menggunakan React Router
import Product from  './page/product';
import List from  './page/list';
import Navbar from './page/navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
