import React from 'react';
import "./Navigation.module.css";
import styles from "./Navigation.module.css"
import BrowseDrinks from './BrowseDrinks';
import { Link } from 'react-router-dom';

function Navigation(props) {
    return (
        <section>
            
            <ul className={styles.navbar}>
                {/* Links to each of the options */}
                <Link to='/home'>Browse Drinks</Link>
                <Link to='/favorite'>Favorite Drinks</Link>
                <Link to='/list'>Ingredient List</Link>
            </ul>        
        </section>
    );
}

export default Navigation;