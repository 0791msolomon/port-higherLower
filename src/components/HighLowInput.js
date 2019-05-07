import React from "react";
import classnames from "classnames";
import "./index.css";
const HighLowInput = props => {
  return (
    <div style={{ padding: "0" }}>
      <input
        type="number"
        className={classnames("form-control inputNumber", {
          "is-invalid": props.errors
        })}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        style={{ textAlign: "center" }}
        onChange={e => props.onChange(e)}
      />
      {props.errors && (
        <div
          className="invalid-feedback"
          style={{ color: "white", fontWeight: "bold" }}
        >
          <h6 style={{ color: "red" }}>{props.errors}</h6>
        </div>
      )}
    </div>
  );
};

export default HighLowInput;
