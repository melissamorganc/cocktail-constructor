import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BrowseDrinks from './BrowseDrinks';
import DrinkOptions from './DrinkOptions';

function DrinkDetails({drinks}) {

    const [drink, setDrink] = useState(null);
    const {idDrink} = useParams();

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
        .then((res) => res.json())
        .then((json) => {
            setDrink(json.drinks[0]);
			console.log(json)
        })
        .catch(console.error)
    }, []);

    if(!drink) {
        return <p>Loading drink details...</p>
    }

    return (
			<div className='detailsContainer'>
				<img src={drink.strDrinkThumb} alt={drink.strDrink} />
				<div className='otherDetails'>
					<h2>{drink.strDrink}</h2>
					<h3>Ingredients</h3>
					<ul>
						<li>
							{drink.strMeasure1} {drink.strIngredient1}
						</li>
						<li>
							{drink.strMeasure2} {drink.strIngredient2}
						</li>
						<li>
							{drink.strMeasure3} {drink.strIngredient3}
						</li>
						<li>
							{drink.strMeasure4} {drink.strIngredient4}
						</li>
						<li>
							{drink.strMeasure5} {drink.strIngredient5}
						</li>
						<li>
							{drink.strMeasure6} {drink.strIngredient6}
						</li>
					</ul>
                    <h3>Instructions</h3>
                    <h4>{drink.strInstructions}</h4>
				</div>
			</div>
		);
}

export default DrinkDetails;