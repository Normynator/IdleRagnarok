import React from "react";
import Headline from "../components/Headline"

export default class About extends React.Component {
    render() {
      let {counters} = this.props
      return (
        <div>
            <Headline>About</Headline>
            <hr/>
            
            <p>Made by Normynator</p>
            <hr/>
        </div>
      )
    }
  }