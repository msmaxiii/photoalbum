// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import About from './Components/About';
import Favorite from './Components/Favorite';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Header from './Components/Header';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      
      <Header>
        <NavBar/>
        <Home/>
      <About/>
      <Favorite/>
      <Form/>
      <Footer/>
    </Header>
     
    </div>

    



  );
}

export default App;
