import React, { useState } from 'react';
import Header from './Component/Header';
import Body from './Component/Body';
import Footer from './Component/Footer';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  const [searchValue, setSearchValue] = useState('');
  const handleSearchChange = (value) => {
    setSearchValue(value);
  }; // by lifting state up 

  return (
    <Router>
      <div>
        <Header onSearchChange={handleSearchChange} />
        <Body searchValue={searchValue} />
        <Footer />
      </div>
    </Router>

  );
}

export default App;
