
import './App.css';
import React, {Component} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



export default class App extends Component{
  render() {
    return (
      <>
      <Router>
      <Navbar/>  
        <Routes>

          <Route path="/" element={<News key=" General"pageSize={5} country= "us" category="General"/>}/>
          <Route path="/Sports" element={<News key=" Sports" pageSize={5} country= "us" category="Sports"/>}/>
          <Route path="/Business" element={<News key=" Business"pageSize={5} country= "us" category="Business"/>}/>
          <Route path="/Entertainment" element={<News key=" Entertainment" pageSize={5} country= "us" category="Entertainment"/>}/>
          <Route path="/Science" element={<News key=" Science" pageSize={5} country= "us" category="Science"/>}/>
          <Route path="/Technology" element={<News  key="Technology "pageSize={5} country= "us" category="Technology"/>}/>
        </Routes>
     </Router>
    </>
    );
  }
}