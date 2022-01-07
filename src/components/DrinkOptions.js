import React from 'react';

function DrinkOptions(props) {

    const [drinks, setDrinks] = useState([]);

    return (
			<div>
				<ul className='alcoholOptions'>
					<li>Vodka</li>
					<li>Tequila</li>
					<li>Gin</li>
					<li>Rum</li>
					<li>Non-Alcoholic</li>
				</ul>
			</div>
		);
}

export default DrinkOptions;