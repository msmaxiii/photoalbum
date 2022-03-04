
import './App.css';
import { Switch, Route } from 'react-router-dom';
import React, {Component} from 'react';
import Favorite from './Components/Favorite';
import About from './Components/About'
import Footer from './Components/Footer';
import Form from './Components/Form';
import Header from './Components/Header';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Photolist from './Components/Photolist';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      
      <Header/>
      <NavBar/>

      <Switch>
        <Route exact path='/'component={About}/>
        <Route path='/Photogallery'component={Photolist}/>
        <Route path='/Favorite'component={Favorite}/>
       
      </Switch>

      {/* <Photolist/>  */}
      <Footer/> 
    
     
    </div>


  );
}

export default App;

