import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { ageUp, ageDown, ageUpAsync } from "./store/actions/actions";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        <div>
          {this.props.loading && <img src={logo} alt="" className="App-logo" />}
        </div>
        <div>{this.props.asyncActionSuccessState}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    loading: state.asyncActionSuccessState === "LOADING",
    asyncActionSuccessState: state.asyncActionSuccessState,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch(ageUpAsync(1)),
    onAgeDown: () => dispatch(ageDown(1)),
  };
};
export default connect(mapStateToProps, mapDispachToProps)(App);
