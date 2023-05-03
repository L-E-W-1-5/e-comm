import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import SearchPage from './Components/SearchPage/SearchPage';
import ContactUs from './Components/ContactUs/ContactUs';
import AppInfo from './Components/AppInfo/AppInfo';



function App() {

  return (

    <Router>
      <Routes>
        <Route path='/' Component={HomePage}></Route>
        <Route path='/SearchPage' Component={SearchPage}></Route>
        <Route path='/ContactUs' Component={ContactUs}>Hello</Route>
        <Route path='/AppInfo' Component={AppInfo}></Route>
      </Routes>
    </Router>
  
  )
}

export default App;
