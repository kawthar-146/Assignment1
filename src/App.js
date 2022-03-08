import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Header from "./components/header.js"
import Header from "./components/layout/Header"
import Headerphoto from './components/layout/HeaderPhoto';
import Gucci from './components/layout/Gucci';
import Product from './components/product';
// import Dropdown1 from './components/dropdown1';
import TopHeader from './components/layout/TopHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section from './components/layout/BottomHeader';
import BottomHeader from './components/layout/BottomHeader';
// import './assets/css/style.css'
// import './assets/css/style.css'
export const App = () => {
  return (
    <div>
    <TopHeader/>
      <Header />
      <BottomHeader/>
  <Headerphoto />
  <Gucci/>
  <Product />
  {/* <Dropdown1/> */}
</div>

  );
};

export default App;
