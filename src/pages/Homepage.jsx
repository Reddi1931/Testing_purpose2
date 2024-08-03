
import React from 'react';
import backgroundImage from '../images/150798.jpg'; // Replace with the correct path to your background image
import Services from './Services';
import About from './Aboutus';
import Contact from './Contact';

const Homepage = () => {
  return (
    <>
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white bg-opacity-75 p-6 rounded-lg text-center">
        <h1 className="text-4xl font-bold">Welcome to Raha Global Marketing Private Limited</h1>
        <p className="mt-4 text-lg">
          At Raha Global Marketing Private Limited, we elevate your brand's presence through innovative and comprehensive marketing solutions.
          <br />
          Our suite of services, from cutting-edge digital marketing strategies to captivating video productions,
          <br />
          ensures your message reaches the right audience effectively and elegantly.
        </p>
      </div>
    </div>
    <Services />
      <About />
      <Contact />
    </>
  );
};

export default Homepage;
