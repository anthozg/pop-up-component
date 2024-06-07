import React, { useState } from "react";
import './App.css';
import WelcomePopup from './components/popUp/WelcomePopup';
import casaImage from './assets/casa.png';

const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(true);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      {showPopup && (
        <WelcomePopup
          imageUrl={casaImage}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default App;
