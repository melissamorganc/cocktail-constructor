import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DrinkDetails from './DrinkDetails';
import DrinkOptions from './DrinkOptions';

function BrowseDrinks(props) {
    
    const {strIngredient1} = useParams();

    useEffect(() => {
        getDrinkData();
    }, []);

    function getDrinkData() {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${strIngredient1}`
        // Maybe I dont need to pull the ingredient specifically, simply add in what is sleected on the Drink Options page
    }

    return (
        <div>
            Browse Drinks
            <DrinkOptions />
            <DrinkDetails />
            
        </div>
    );
}

export default BrowseDrinks;