import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function DrinkOptions(props) {
	const { strIngredient1 } = useParams();

	const [drinks, setDrinks] = useState([]);
	const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${strIngredient1}`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				setDrinks(json.drinks);
			})
			.catch(console.error);
	}, [drinks]);

	if (!drinks) {
		return <p>Loading yummy drinks...</p>;
	}

	return (
		<div>
			<section className='drinksContainer'>
				{drinks.map((drink) => (
					<Link to={`/drinks/details/${drink.idDrink}`} key={drink.idDrink}>
						<div className='card'>
							<div className='cardImage'>
								<img src={drink.strDrinkThumb} alt={drink.strDrink} />
							</div>
							<div className='cardTitle'>
								<h3>{drink.strDrink}</h3>
							</div>
						</div>
					</Link>
				))}
			</section>
		</div>
	);
}

export default DrinkOptions;
