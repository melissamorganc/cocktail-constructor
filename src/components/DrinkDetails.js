import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BrowseDrinks from './BrowseDrinks';
import DrinkOptions from './DrinkOptions';

function DrinkDetails(drinks) {
	const { idDrink } = useParams();

	const [drink, setDrink] = useState();
	const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				setDrink(json.drinks[0]);
			})
			.catch(console.error);
	}, [idDrink]);

	if (!drink) {
		return <p>Loading drink details...</p>;
	}

	return (
		<div className='detailsContainer'>
			<div className='otherDetails'>
				<h2>{drink.strDrink}</h2>
				<img src={drink.strDrinkThumb} alt={drink.strDrink} />
			</div>
			<div className='textDetails'>
				<h3>Ingredients</h3>
				<ul>
					<li>
						{drink.strMeasure1} {drink.strIngredient1}
					</li>
					<li>
						{drink.strMeasure2} {drink.strIngredient2}
					</li>
					{drink.strIngredient3 != null && (
						<li>
							{drink.strMeasure3} {drink.strIngredient3}
						</li>
					)}
					{drink.strIngredient4 != null && (
						<li>
							{drink.strMeasure4} {drink.strIngredient4}
						</li>
					)}
					{drink.strIngredient5 != null && (
						<li>
							{drink.strMeasure5} {drink.strIngredient5}
						</li>
					)}
					{drink.strIngredient6 != null && (
						<li>
							{drink.strMeasure6} {drink.strIngredient6}
						</li>
					)}
				</ul>
				<h3>Instructions</h3>
				<h4>{drink.strInstructions}</h4>
			</div>
		</div>
	);
}

export default DrinkDetails;
