import React from "react";
import { Route } from "react-router-dom";
import HigherLower from "./HigherLower";
import LoveCalculator from "./LoveCalculator";
const Routes = props => {
  return (
    <div>
      <Route exact path="/" component={HigherLower} />
      <Route path="/loveCalc" component={LoveCalculator} />
    </div>
  );
};
export default Routes;
