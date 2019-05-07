import React from "react";
import "./index.css";
import ReactSvgPieChart from "react-svg-piechart";

class LoveCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      secondName: "",
      count: 0,
      vowels: ["a", "e", "i", "o", "u", "y"],
      consonants: [
        "b",
        "c",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "m",
        "n",
        "p",
        "q",
        "r",
        "s",
        "t",
        "v",
        "w",
        "x",
        "z"
      ],
      love: ["l", "o", "v", "e"],
      twenty: 0,
      ten: 0,
      twelveOne: 0,
      twelveTwo: 0,
      seven: 0,
      loveSet: false
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  calculateLove = async e => {
    e.preventDefault();
    await this.setState({
      twenty: 0,
      ten: 0,
      twelveOne: 0,
      twelveTwo: 0,
      seven: 0,
      count: 0
    });
    let { firstName, secondName, vowels, consonants, love } = this.state;
    let twenty = 0;
    let ten = 0;
    let twelveOne = 0;
    let twelveTwo = 0;
    let seven = 0;
    let count = 0;
    if (firstName.length === secondName.length) {
      count += 20;
      twenty = 20;
    }
    if (
      vowels.includes(firstName[0]) &&
      vowels.includes(secondName[0]) &&
      firstName &&
      secondName
    ) {
      count += 10;
      ten = 10;
    }

    let firstVowels = 0;
    let secondVowels = 0;
    let firstCons = 0;
    let secondCons = 0;
    let firstLove = false;
    let secondLove = false;
    for (let char of firstName.split("")) {
      if (vowels.includes(char)) {
        firstVowels += 1;
      }
      if (consonants.includes(char)) {
        firstCons += 1;
      }
      if (love.includes(char)) {
        firstLove = true;
      }
    }
    for (let char of secondName.split("")) {
      if (vowels.includes(char)) {
        secondVowels += 1;
      }
      if (consonants.includes(char)) {
        secondCons += 1;
      }
      if (love.includes(char)) {
        secondLove = true;
      }
    }
    if (firstVowels === secondVowels && firstVowels && secondVowels) {
      count += 12;
      twelveOne = 12;
    }
    if (firstCons === secondCons && firstCons && secondCons) {
      count += 12;
      twelveTwo = 12;
    }
    if (firstLove === secondLove) {
      count += 7;
      seven = 7;
    }
    this.setState({
      count,
      twenty,
      ten,
      twelveOne,
      twelveTwo,
      seven,
      loveSet: true
    });
  };
  clearForms = e => {
    e.preventDefault();
    this.setState({ firstName: "", secondName: "", loveSet: false });
  };
  render() {
    let { twenty, ten, twelveOne, twelveTwo, seven, count } = this.state;
    let leftover = 61 - count;
    let percentage = (count * 100) / 61;
    const data = [
      { title: "Data 1", value: count, color: "#cc0000" },
      { title: "Data 2", value: leftover, color: "white" }
    ];
    return (
      <React.Fragment>
        <div
          className="higherLowerContainer container"
          style={{ color: "white", fontWeight: "bold", height: "100%" }}
        >
          <h1
            className="display-4 higherLowerDisplay"
            style={{
              fontFamily: '"Times New Roman", Times, serif',
              textAlign: "center",
              display: "flex",
              flexWrap: "wrap",
              color: "#007bff"
            }}
          >
            Love Calculator
          </h1>
          <blockquote className="blockquote container">
            <p
              className="mb-0 higherLowerRollIn"
              style={{ textAlign: "center" }}
            >
              {`This program will prompt the user to enter two first names. The program will then calculate and return a Love Match Score based on the following criteria:`}
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
                  <i
                    className="fa fa-arrow-circle-down  "
                    style={{ color: "#007bff" }}
                  />{" "}
                  Criteria{" "}
                  <i
                    className="fa fa-arrow-circle-down  "
                    style={{ color: "#007bff" }}
                  />
                </h2>
              </span>

              <li style={{ listStyle: "none" }}>
                <h4 style={popWhite}>
                  - Both first names have the same numbers of letters.{" "}
                  <span style={{ color: "#007bff" }}>+20 pts</span>
                </h4>
              </li>

              <li style={{ listStyle: "none" }}>
                <h4 style={popWhite}>
                  - Both first names start with a vowel.{" "}
                  <span style={{ color: "#007bff" }}>+10 pts</span>
                </h4>
              </li>

              <li style={{ listStyle: "none" }}>
                <h4 style={popWhite}>
                  - Both first names have the same number of vowels.{" "}
                  <span style={{ color: "#007bff" }}>+12 pts</span>
                </h4>
              </li>
              <li style={{ listStyle: "none" }}>
                <h4 style={popWhite}>
                  - Both first names have the same number of consonants.{" "}
                  <span style={{ color: "#007bff" }}>+12 pts</span>
                </h4>
                <li style={{ listStyle: "none" }}>
                  <h4 style={popWhite}>
                    - Both first names contain at least a “ L ”, “ O ”, “ V ” or
                    “ E ”. <span style={{ color: "#007bff" }}>+7 pts</span>
                  </h4>
                </li>
              </li>
            </footer>
          </blockquote>
          <form className="col-lg-6 col-sm-12">
            <div class="form-group" style={{ textAlign: "center" }}>
              <label for="formGroupExampleInput">First Name</label>
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.onChange}
                class="form-control"
                id="formGroupExampleInput"
              />
            </div>
            <div class="form-group" style={{ textAlign: "center" }}>
              <label for="formGroupExampleInput2">Second Name</label>
              <input
                type="text"
                name="secondName"
                value={this.state.secondName}
                onChange={this.onChange}
                class="form-control"
                id="formGroupExampleInput2"
              />
            </div>
            <div className="form-group">
              <button
                className="form-control btn-primary"
                onClick={this.calculateLove}
                disabled={!this.state.firstName || !this.state.secondName}
              >
                Calculate
              </button>
            </div>
            <div className="form-group">
              <button
                className="form-control btn-danger"
                onClick={this.clearForms}
              >
                Clear Inputs
              </button>
            </div>
          </form>
          {this.state.loveSet && this.state.firstName && this.state.secondName && (
            <div
              style={{
                height: "60",
                display: "flex",
                flexDirection: "column",
                alignSelf: "center",
                justifyContent: "space-between"
              }}
              className="col-lg-6 col-sm-12"
            >
              <ReactSvgPieChart data={data} />
              <div style={{ alignSelf: "center", marginTop: "3%" }}>
                <h5>{`${this.state.firstName} & ${
                  this.state.secondName
                } are a ${percentage.toFixed(1)}% Love match`}</h5>
              </div>
            </div>
          )}
        </div>
        ;
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
export default LoveCalculator;
