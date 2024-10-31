"use client"

import React from 'react';
import Image from 'next/image';
import './APP.css';
import { useRouter } from 'next/navigation'; 

const Main = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/Home');
  };

  return (
    <div className="background-image">
      <div className="button">
        <h1>Main Page</h1>
        <button onClick={handleClick}>Go to Home</button>
      </div>
    </div>
  );
}

export default Main;