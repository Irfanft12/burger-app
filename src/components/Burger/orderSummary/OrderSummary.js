import React, { Component } from 'react';
import Aux from '../../../hoc/auxiliary/Auxiliary';
import Button from '../../ui/button/Button'

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log("[OrderSummary] Willupdate");
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: "capitalize"}}>{igKey}</span>: {this.props.ingredients[igKey]} 
                </li>
            ); 
        })
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicius burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
    
};

export default OrderSummary;