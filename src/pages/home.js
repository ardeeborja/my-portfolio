import React from 'react';
import '../App.css';
import Card from '../components/Card';
import Project from '../components/Project';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="home">
      <Card />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
