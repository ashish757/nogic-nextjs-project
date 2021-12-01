import React from 'react';
import './App.css';
import NavBar from './navBar';
import Home from './home/home';
import { Route, Routes } from 'react-router-dom';
import SearchResults from './search';


const App = () => {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/search/:query' element={<SearchResults />} />
      </Routes>
    </div>
  );
}


export default App;
