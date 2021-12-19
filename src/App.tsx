import React,{ useReducer, useEffect } from 'react';
import './App.css';
import NavBar from './navBar';
import Home from './home/home';
import { Route, Routes } from 'react-router-dom';
import SearchResults from './search';


import globalContext from "./globalState";
import reducer from './globalState/reducer';
import data from './globalState/data';

const App: React.FunctionComponent  = () => {
  document.title = "Nogic - Notes with magic"
  const [state, dispatch] = useReducer(reducer, data)
  useEffect(() => {
    // if (localStorage.getItem('notes')) {
    //   const data: any = localStorage.getItem('notes')
    //   dispatch({ type: "LOAD_NOTES", notes: JSON.parse(data) })
    // }
  }, [])
  return (
    <div className="App">
        <globalContext.Provider value={{ state, dispatch }}>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/search/:query' element={<SearchResults />} />
      </Routes>
        </globalContext.Provider>
    </div>
  );
}


export default App;
