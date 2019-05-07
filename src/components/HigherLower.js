import React from "react";
import Input from "./HighLowInput";
import HigherLowerSelect from "./HigherLowerSelect";
import _ from "underscore";
import "./index.css";
import Modal from "react-awesome-modal";

class HigherLower extends React.Component {
  state = {
    numbersEntered: false,
    low: "",
    high: "",
    errors: {},
    clientRandomNumber: null,
    hiddenRandomNumber: null,
    incorrectGuesses: 0,
    correctGuesses: 0,
    sendCompletionMessage: false
  };
  onChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  setLimits = e => {
    const { low, high } = this.state;
    e.preventDefault();
    if (low === "") {
      this.setState({
        numbersEntered: false,
        errors: {
          low: "Please enter a number"
        }
      });
      return;
    } else if (high === "") {
      this.setState({
        numbersEntered: false,
        errors: { high: "Please enter a number" }
      });
      return;
    } else if (Number(low) > Number(high)) {
      this.setState({
        numbersEntered: false,
        errors: { low: "Low number can't be greater than high number" }
      });
      return;
    } else if (Number(high) - Number(low) < 10) {
      this.setState({
        numbersEntered: false,
        errors: {
          high: "Must be at least 10 higher than low number"
        }
      });
      return;
    } else {
      this.setState({
        clientRandomNumber: _.random(Number(low), Number(high)),
        hiddenRandomNumber: _.random(Number(low), Number(high))
      });
    }
    this.setState({ errors: {}, numbersEntered: true });
  };

  submitAnswer = answer => {
    const {
      clientRandomNumber,
      hiddenRandomNumber,
      high,
      low,
      incorrectGuesses
    } = this.state;
    if (
      (clientRandomNumber > hiddenRandomNumber && answer === "higher") ||
      (clientRandomNumber < hiddenRandomNumber && answer === "lower") ||
      clientRandomNumber === hiddenRandomNumber
    ) {
      return this.setState({
        correctGuesses: (this.state.correctGuesses += 1),
        clientRandomNumber: _.random(Number(low), Number(high)),
        hiddenRandomNumber: _.random(Number(low), Number(high))
      });
    } else if (incorrectGuesses === 9) {
      return this.setState({
        sendCompletionMessage: true
      });
    } else {
      this.setState({
        incorrectGuesses: (this.state.incorrectGuesses += 1),
        clientRandomNumber: _.random(Number(low), Number(high)),
        hiddenRandomNumber: _.random(Number(low), Number(high))
      });
    }
  };
  closeModal = () => {
    this.setState({
      high: null,
      low: null,
      numbersEntered: false,
      incorrectGuesses: 0,
      correctGuesses: 0,
      high: 0,
      low: 0,
      sendCompletionMessage: false
    });
  };
  render() {
    const {
      hiddenRandomNumber,
      numbersEntered,
      errors,
      clientRandomNumber,
      incorrectGuesses,
      correctGuesses,
      sendCompletionMessage
    } = this.state;
    return (
      <React.Fragment>
        <div
          className="higherLowerContainer container"
          style={{ color: "white", fontWeight: "bold", height: "100%" }}
        >
          <h1
            className="display-1 higherLowerDisplay"
            style={{
              fontFamily: '"Times New Roman", Times, serif',
              textAlign: "center"
            }}
          >
            Higher or lower?
          </h1>
          <blockquote className="blockquote container">
            <p
              className="mb-0 higherLowerRollIn"
              style={{ textAlign: "center" }}
            >
              {`Set a high number limit & a low number limit, then when a number is displayed guess if the number shown is higher or lower than the hidden number`}
            </p>

            <footer
              className="  higherLowerRollIn2 "
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <span>
                <h2 style={popWhite}>
                  <i className="fa fa-arrow-circle-down  " /> Rules Are{" "}
                  <i className="fa fa-arrow-circle-down  " />{" "}
                </h2>
              </span>
              <li style={{ listStyle: "none" }}>
                <h4 style={popWhite}>
                  - Make sure High number and low Number are at least 10 apart
                </h4>
              </li>

              <li style={{ listStyle: "none" }}>
                <h4 style={popWhite}>
                  - Select whether you think the next hidden number is higher or
                  lower than the displayed number
                </h4>
              </li>
              <li style={{ listStyle: "none" }}>
                <h4 style={popWhite}>
                  - Wrong guesses will be displayed on bottom in the form of X
                </h4>
              </li>
              <li style={{ listStyle: "none" }}>
                <h4 style={popWhite}>
                  - Correct guesses will be tracked beneath incorrect count
                </h4>
              </li>
              <li style={{ listStyle: "none" }}>
                <h4 style={popWhite}>- Guess Until you get 10 wrong</h4>
              </li>
            </footer>
          </blockquote>
          <div className="higherLowerRollIn2 inputContainer col-lg-6 col-sm-12">
            <form>
              <Input
                name="low"
                value={this.state.low}
                placeholder="Low Limit"
                errors={errors.low}
                onChange={this.onChange}
              />
              <Input
                name="high"
                value={this.state.high}
                placeholder="High Limit"
                errors={errors.high}
                onChange={this.onChange}
              />
              <button
                onClick={this.setLimits}
                className=" inputNumber form-control btn-success  "
              >
                Set Limits
              </button>
            </form>
            {numbersEntered ? (
              <div
                style={{
                  marginTop: "3%",
                  height: "100%",
                  width: "100%",
                  textAlign: "center"
                }}
              >
                <HigherLowerSelect
                  hiddenNumber={hiddenRandomNumber}
                  clientNumber={clientRandomNumber}
                  click={this.submitAnswer}
                  wrong={incorrectGuesses}
                  correct={correctGuesses}
                  // gameOver={sendCompletionMessage}
                />
              </div>
            ) : null}
          </div>
        </div>
        <Modal
          visible={this.state.sendCompletionMessage}
          effect="fadeInUp"
          // onClickAway={() => this.closeModal()}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              margin: "3%"
            }}
          >
            <h4
              style={{
                alignContent: "center",
                alignSelf: "center",
                alignItems: "center"
              }}
            >{`Not bad, you had ${
              this.state.correctGuesses
            } correct guesses`}</h4>
            <h5>The score will automatically reset so you can try again</h5>
            <button className="btn-danger" onClick={() => this.closeModal()}>
              Close
            </button>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}
const popWhite = {
  color: "white",
  fontWeight: "bold",
  listStyle: "none",
  textAlign: "center",
  fontFamily: '"Times New Roman", Times, serif'
};

export default HigherLower;
