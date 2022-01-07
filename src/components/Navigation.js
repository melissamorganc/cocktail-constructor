import React from 'react';
import "./Navigation.module.css";
import styles from "./Navigation.module.css"
import BrowseDrinks from './BrowseDrinks';

function Navigation(props) {
    return (
        <div>
            <ul className={styles.navbar}>
                <li><BrowseDrinks /></li>
                <li>Favorite Cocktails</li>
                <li>Ingredient List</li>    
            </ul>        
    </div>
    );
}

export default Navigation;