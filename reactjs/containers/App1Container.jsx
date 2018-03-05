import React from "react"
import Radium from "radium"
import { connect } from "react-redux"

import * as counterActions from "../actions/counterActions"
import Headline from "../components/Headline"
import NavBar from "../components/NavBar"

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
export default class App1Container extends React.Component {
  handleClick() {
    let {dispatch} = this.props;
    dispatch(counterActions.increaseCounter())
  }

  render() {
    let {counters} = this.props
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <NavBar/>
            <Headline>Something Fancy!!</Headline>
            <Headline>Test text</Headline>
            <Headline>Hi Till</Headline>
            <div style={styles.button} onClick={() => this.handleClick()}>INCREASE</div>
            <p style={styles.counter}>{counters.clicks}</p>
            <p>{process.env.BASE_API_URL}</p>
          </div>
        </div>
      </div>
    )
  }
}
