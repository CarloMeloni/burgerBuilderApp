import React, { Component } from 'react';

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    //THIS COULD BE A FUNCTIONAL COMPONENT, DOESN'T HAVE TO BE A CLASS
    componentDidUpdate() {
        console.log('Order Summary did Update');
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients).map(ingKey => {
            return <li key={ingKey}>
                    <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {this.props.ingredients[ingKey]}
                </li>
        });

        return (
            <Auxiliary>
                <h3>YOUR ORDER</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price : {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Auxiliary>
        );
    }
}

export default OrderSummary;
