import './App.css';
import React from 'react';
import NavBar from './NavBar';
import AppRouter from './AppRouter';
import "./styles.css" 

import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';

//rfce+tab command, which will fill out the template of an element for you.
function App() {
  return (
    <div className="App">
      <NavigationBar />
      
      <AppRouter />
    </div>
    
  );
}

export default App;
