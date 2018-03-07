import React from "react";
import Headline from "../components/Headline"
import Radium from "radium"
import { connect } from "react-redux"

import * as counterActions from "../actions/counterActions"

const styles = {
    button: {
      cursor: "pointer",
    },
    counter: {
      color: "blue",
      fontSize: "20px",
    }
  }

@connect(state => ({
    counters: state.counters,
})) 

@Radium
export default class Home extends React.Component {

    handleClick() {
        let {dispatch} = this.props;
        dispatch(counterActions.increaseCounter())
    }

    render() {
      let {counters} = this.props
      return (
        <div>
            <Headline>Home</Headline>

            <hr/>

            <div style={styles.button} onClick={() => this.handleClick()}>INCREASE</div>
            <p style={styles.counter}>{counters.clicks}</p>

            <hr/>
        </div>
      )
    }
  }