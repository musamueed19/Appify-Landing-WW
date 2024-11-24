'use client'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

import AnalyticsFeature from "./AnalyticsFeature/AnalyticsFeature";
import Feature from "./Feature/Feature";
import Hero from "./Hero/Hero";
import Offer from "./Offer/Offer";
import Price from "./Price/Price";
import Review from "./Review/Review";
import WhyChoose from "./WhyChoose/WhyChoose";
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    const initAos = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: false,
        anchorPlacement: 'top-bottom',
      })
    }
    
    initAos();
}, [])

  return (
    <div className="overflow-hidden">
      {/* Our Hero Section */}
      <Hero />

      {/* Why Choose Us - Section */}
      <WhyChoose />

      {/* Analytics Feature - Section */}
      <AnalyticsFeature />

      {/* Our Feature - Section */}
      <Feature />

      {/* Client Review - Section */}
      <Review />

      {/* Pricing Section */}
      <Price />

      {/* Offer - Offerings Section */}
      <Offer />
    </div>
  );
}
