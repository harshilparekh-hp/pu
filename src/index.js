import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './layout/Header'
import Footer from './layout/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <Footer />
  </div>
);

