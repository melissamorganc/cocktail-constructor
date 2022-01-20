import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation';
import BrowseDrinks from './components/BrowseDrinks';
import DrinkOptions from './components/DrinkOptions';
import DrinkDetails from './components/DrinkDetails';
import drinksImg from './components/drinksImg.jpeg';



function App() {
	return (
		<div className='App'>
			<header className='title'>
				<Link to='/'>The Cocktail Constructor</Link>
			</header>
			<Navigation />
			<main>
				<Routes>
					<Route path='/drinks/:strIngredient1' element={<BrowseDrinks />} />
					<Route path='/' element={<DrinkOptions />}></Route>
					<Route path='/' element={<Navigation />}></Route>
					<Route
						path='/drinks/details/:idDrink'
						element={<DrinkDetails />}></Route>
				</Routes>
			</main>
			<div>
				<img src={drinksImg} alt='drinks' className='homeImg' />
			</div>
		</div>
	);
}

export default App;