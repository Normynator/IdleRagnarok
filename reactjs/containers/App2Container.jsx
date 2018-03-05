import React from "react"
import Radium from "radium"

import Headline from "../components/Headline"
import NavBar from "../components/NavBar"

export default class App2Container extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <NavBar/>
            <Headline>Something Fancy!!</Headline>
            <Headline>Test text</Headline>
            <Headline>Hi Till</Headline>
          </div>
        </div>
      </div>
    )
  }
}