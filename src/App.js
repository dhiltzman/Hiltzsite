import './App.css';
import NavBar from './NavBar';
import AppRouter from './AppRouter';
import "./styles.css"

//rfce+tab command, which will fill out the template of an element for you.
function App() {
  return (
    <div className="App">
      <NavBar />
      
      <AppRouter />
    </div>
    
  );
}

export default App;
