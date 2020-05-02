import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    console.log(props);
    let transformedIngredients = Object.keys(props.ingredients).map(ingKey => {
        return [...Array(props.ingredients[ingKey])].map((_, i) => {
            return <BurgerIngredient key={ingKey + 1} type={ingKey} />
        }); // To get value/key of the ingredients
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []); // to transform it in an empty array
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};


export default burger;