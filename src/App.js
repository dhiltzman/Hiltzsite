import React from 'react';
import AppRouter from './components/AppRouter';
import "./styles.css" ;

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
