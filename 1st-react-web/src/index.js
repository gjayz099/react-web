import React from 'react'
import ReactDOM from 'react-dom/client'
// page
import Navbar from './page/navbar/Navbar'
import Header from './page/Header'
import Service from './page/Service'
// css
import './css/style.css'
import Package from './page/Package'
import Gallery from './page/Gallery'
import Footer from './page/Footer'
import Contact from './page/Contact'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Service />
    <Package />
    <Gallery />
    <Contact />
    <Footer />
  </React.StrictMode>
);

