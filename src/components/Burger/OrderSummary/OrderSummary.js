import React from "react";
import Auxillary from "../../../hoc/Auxillary";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span>{igKey}</span> : {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Auxillary>
      <h3>Your Order Summary</h3>
      <p>Your delicious burger contains following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Proceed to the checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Auxillary>
  );
};

export default orderSummary;
