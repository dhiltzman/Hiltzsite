import './App.css';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">
      <ul id='nav-list'>
        <li><a href="/home"> Home </a></li>
        <li><a href="/test"> Test </a></li>
      </ul>
      <AppRouter />
    </div>
    
  );
}

export default App;
