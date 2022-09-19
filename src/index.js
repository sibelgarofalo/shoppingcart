import React from 'react';
import ReactDOM from 'react-dom/client';
import CheckoutSummary from './components/checkoutSummary/checkoutSummary';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Routing from './components/routing/routing';
import TshirtCart from './components/tshirtCart/tshirtCart';
import TshirtDetails from './components/tshirtDetails/tshirtDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <TshirtCart/>
    <TshirtDetails/>
    <CheckoutSummary/>
    <Routing/>
    <Footer/>

  </React.StrictMode>
);