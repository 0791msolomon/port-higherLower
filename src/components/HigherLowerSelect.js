import React from "react";
import { useAlert } from "react-alert";
import classnames from "classnames";
import "./index.css";
const HigherLowerSelect = props => {
  const alert = useAlert();

  const displayErrors = () => {
    return [...Array(props.wrong)].map((e, i) => (
      <i
        key={i}
        className="col-xl-1 col-md-3 col-sm-4 col-xs-6  fa fa-close fa-3x numberBounceIn"
        style={{ color: "red" }}
      />
    ));
  };

  const submitGuess = value => {
    if (
      (props.hiddenNumber < props.clientNumber && value === "higher") ||
      (props.hiddenNumber > props.clientNumber && value === "lower") ||
      props.hiddenNumber === props.clientNumber
    ) {
      alert.success("That's correct!", { timeout: 1000 });
    }
    props.click(value);
  };
  return (
    <div style={{ marginBottom: "2%" }}>
      <div className=" highlowselectcontainer">
        <button
          className="arrowOptions col-lg-3 col-sm-12 btn-success"
          style={{ alignSelf: "center", opacity: ".7" }}
          onClick={() => submitGuess("higher")}
        >
          <i className="fa fa-arrow-circle-up fa-5x" />
        </button>
        <div
          className="arrowOptions col-lg-3 col-sm-12"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h1 className="display-4 " style={popWhite}>
            {props.clientNumber}
          </h1>

          <h4 className="display-6" style={popWhite}>
            Higher or lower than hidden number
          </h4>
        </div>
        <button
          className="arrowOptions col-lg-3 col-sm-12 btn-danger"
          style={{ alignSelf: "center", opacity: ".7" }}
          onClick={() => submitGuess("lower")}
        >
          <i className="fa fa-arrow-circle-down fa-5x " />
        </button>
      </div>
      <hr className="my-4" />
      <div className="wrongAnswers col-12">{displayErrors()}</div>
      <div
        style={{ textAlign: "center", border: "solid 2px white", margin: "1%" }}
        className="correctCount"
      >
        <h2>Correct Guesses</h2>
        <h1>{props.correct}</h1>
      </div>
    </div>
  );
};
const popWhite = {
  color: "white",
  fontWeight: "bold"
};
export default HigherLowerSelect;
