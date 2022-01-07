import React from 'react';

function DrinkOptions(props) {

    // const [drinks, setDrinks] = useState([]);

    return (
            <select name='slectList' id='selectList' className='alcoholOptions'>
                <option selected value="Browse Drinks"></option>
                <option value="option 1">Vodka</option>
                <option value="option 2">Tequila</option>
                <option value="option 3">Gin</option>
                <option value="option 4">Rum</option>
                <option value="option 5">Non-Alcoholic</option>
            </select>
		);
}

export default DrinkOptions;