import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function BrowseDrinks(props) {
    
    const {strIngredient1} = useParams();

    useEffect(() => {
        getDrinkData();
    }, []);

    function getDrinkData() {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${strIngredient1}`;
    }

    return (
        <div>
            Browse Drinks
            
        </div>
    );
}

export default BrowseDrinks;