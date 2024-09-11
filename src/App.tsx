import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const [currentView, setCurrentView] = useState('surprise');

  useEffect(() => {
    setCurrentView('surprise');
  }, []);

  const handleBoxClick = () => {
    setCurrentView('newPage');
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
        </header>
        {currentView === 'surprise' && (
          <div className="surprise-box" onClick={handleBoxClick}>
            <img 
              src="https://clipart-library.com/img1/743004.png" 
              alt="Birthday Surprise" 
              className="birthday-image hover:animate-bounce cursor-pointer" 
            />
          </div>
        )}
        {currentView === 'newPage' && (
          <div className="new-page">
            <Card />
          </div>
        )}
      </div>
    </>
  );
}

export default App;