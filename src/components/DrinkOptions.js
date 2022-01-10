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
            setDrinks(json.drinks)
            console.log(json)
        })
        .catch(console.error)
    }, []);

    if (!drinks) {
			return <p>Loading yummy drinks...</p>;
    }

    return (
			<section className='drinksContainer'>
				{drinks.map((drink) => (
					<Link to='/drinks/gin' key={drink.idDrink}>
						<div className='card'>
							<div className='cardImage'>
								<img src={drink.strDrinkThumb} alt={drink.strDrink} />
							</div>
							<div className='cardTitle'>
								<h3>{drink.strDrink}</h3>
							</div>
						</div>
						Gin
					</Link>
				))}
				<Link to='/drinks/rum'>Rum</Link>
				<Link to='/drinks/tequila'>Tequila</Link>
				<Link to='/drinks/vodka'>Vodka</Link>
				<Link to='/drinks/whiskey'>Whiskey</Link>


				{/* I dont think this should be drinks and maybe needs to be drink types instead? and then map it to drinks on the next layer? */}
				{/* {drinks.map(drink => {
                return (
                    <Link to={`browsedrinks/${drink.strIngredient1}`} key={drink.strIngredient1}>
                        <div className='card'>
                            <div className='card-image'>
                            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                            </div>
                            <div className='card-title'>
                                <h3>{drink.strDrink}</h3>
                            </div>
                        </div>
                    </Link>
                )
            })} */}
				{/* // <select name='slectList' id='selectList' className='alcoholOptions'>
            //     <option selected value="Browse Drinks"></option>
            //     <option value="option 1">Vodka</option>
            //     <option value="option 2">Tequila</option>
            //     <option value="option 3">Gin</option>
            //     <option value="option 4">Rum</option>
            //     <option value="option 5">Non-Alcoholic</option>
            // </select> */}
			</section>
		);
}

export default DrinkOptions;