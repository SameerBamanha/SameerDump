import React, { useState } from 'react';
import './App.css';

const stringsList = [
  "Rameshwaram + Popsicles after!",
  "Burma Burma + Polar Bear!",
  "Chulha Chauki da dhaba + Lassi!",
  "Walking around eating anything and everything!",
  "Lucky Chan + Naturals Ice cream!"
];

const RandomStringGenerator = () => {
  const [randomString, setRandomString] = useState('');

  const generateRandomString = () => {
    const randomIndex = Math.floor(Math.random() * stringsList.length);
    setRandomString(stringsList[randomIndex] + "🎉");
  };

  return (
    <div className="container">
      <h1>✨ Hi Sushmitha ✨</h1>
      <p>{randomString}</p>
      <button className="round-button" onClick={generateRandomString}>Click it and choose one destination</button>
    </div>
  );
};

export default RandomStringGenerator;
