import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
    return (
        <section>
            <div className='drinkLinks'>
                <Link to='/drinks/brandy'>Brandy</Link>
                <Link to='/drinks/gin'>Gin</Link>
                <Link to='/drinks/rum'>Rum</Link>
                <Link to='/drinks/tequila'>Tequila</Link>
                <Link to='/drinks/vodka'>Vodka</Link>
                <Link to='/drinks/whiskey'>Whiskey</Link>
            </div>
        </section>
    );
}

export default Navigation;