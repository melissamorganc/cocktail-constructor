import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation';
import BrowseDrinks from './components/BrowseDrinks';
import DrinkOptions from './components/DrinkOptions';
import DrinkDetails from './components/DrinkDetails';



function App() {
  return (
		<div className='App'>
			<header className='title'>
				<Link to='/home'>The Cocktail Constructor</Link>
			</header>
			<Navigation />
			<main>
				<Routes>
					<Route path='/drinks/:strIngredient1' element={<BrowseDrinks />} />
					<Route />
					<Route path='/home' element={<DrinkOptions />}></Route>
					<Route path='/home' element={<Navigation />}></Route>
					<Route
						path='/drinks/details/:idDrink'
						element={<DrinkDetails />}></Route>
				</Routes>
			</main>
		</div>
	);
}

export default App;
