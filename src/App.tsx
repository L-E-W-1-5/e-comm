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
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/SearchPage' element={<SearchPage/>}></Route>
        <Route path='/ContactUs' element={<ContactUs/>}></Route>
        <Route path='/AppInfo' element={<AppInfo/>}></Route>
      </Routes>
    </Router>
  
  )
}

export default App;
