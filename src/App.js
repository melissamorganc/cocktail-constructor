import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation';
import BrowseDrinks from './components/BrowseDrinks';



function App() {
  return (
    <div className="App">
      <header>
        The Cocktail Constructor
      </header>
      <Navigation />
      <main>
        <Routes>
          <Route path='/browsedrinks' element={<BrowseDrinks />}/>
          <Route />
        </Routes>
      </main>
    </div>
  );
}

export default App;
