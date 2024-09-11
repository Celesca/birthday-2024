import { useState, useEffect } from 'react';
import './App.css';
import Happy from './Happy';
import Card from './Card';

function App() {
  const [currentView, setCurrentView] = useState('surprise');

  useEffect(() => {
    setCurrentView('surprise');
  }, []);

  const handleBoxClick = () => {
    setCurrentView('newPage');
  };

  const handleCardClick = () => {
    setCurrentView('cardPage');
  }

  return (
    <>
      <div className="App-container">
        <header className="App-header">
        </header>
        {currentView === 'surprise' && (
          <div className="surprise-box" onClick={handleBoxClick}>
            <img 
              src="box.png" 
              alt="Birthday Surprise" 
              className="birthday-image hover:animate-bounce cursor-pointer" 
            />
          </div>
        )}
        {currentView === 'newPage' && (
          <>
            <Happy /> 

            
            <div className="pt-20 flex flex-col justify-center items-center">
              <h1 data-aos="fade-up font-bold text-3xl">Happy Birthday!</h1>
              <div onClick={handleCardClick}>
              <img 
                src="https://static.vecteezy.com/system/resources/previews/036/053/451/original/ai-generated-cartoon-birthday-cake-transparent-background-free-png.png" 
                alt="Birthday Surprise" 
                className="birthday-image hover:animate-bounce cursor-pointer w-40" 
              />
            </div>
            </div>
          </>
        )}
        {currentView === 'cardPage' && (
          <Card />
        )}
      </div>
    </>
  );
}

export default App;