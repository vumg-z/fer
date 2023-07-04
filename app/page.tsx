'use client'

import React, { useEffect, useState } from 'react';
import Intro from './Components/animation/intro'
import Header from './Components/header'

export default function Home(): JSX.Element {

  const [windowDimensions, setWindowDimensions] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Update window dimensions on component mount
    updateWindowDimensions();

    // Update window dimensions on window resize
    window.addEventListener('resize', updateWindowDimensions);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);


  const updateWindowDimensions = (): void => {
    setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
  };


  const headerStyle = {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    zIndex: 50,
    position: 'absolute' as 'absolute', // Explicitly specify the position type as 'absolute'
    top: `${windowDimensions.height * 0.15}px`, // Adjust the top position as needed
    left: `${windowDimensions.width * 0.3}px`, // Adjust the left position as needed
    transform: 'translateX(-50%)', // Center horizontally using transform
  };

  return (
    <div>
      {/* <Nav /> */}
      <Intro />
      <Header text="Relikia" style={headerStyle} />

    </div>
  )
}
