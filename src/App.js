import './index.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from './components/Home';
import BestProducts from './components/BestProducts';
import SignedCollection from './components/SignedCollection';
import OurMission from './components/OurMission';
import ShopCollection from './components/ShopCollection';
import NewArrival from './components/NewArrival';
import NewSeries from './components/NewSeries';
import OurBelief from './components/OurBelief';
import ProductDetails from './components/ProductDetails';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='overflow-hidden'>
      <Home />
      <BestProducts />
      <SignedCollection />
      <OurMission />
      <ShopCollection />
      <NewArrival />
      <NewSeries />
      <OurBelief />
      <ProductDetails />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
