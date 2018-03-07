import React from "react"
import Radium from "radium"
import { connect } from "react-redux"

import * as counterActions from "../actions/counterActions"
import Headline from "../components/Headline"
import NavBar from "../components/NavBar"
import BasicExample from "../components/BasicExample"

import AccountInfo from "./AccountInfo"
import Home from "./Home"
import About from "./About"
import Chars from "./Chars"

import { Route } from "react-router-dom";

@connect(state => ({
  router: state.router,
}))  

@Radium
export default class App1Container extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <NavBar/>
            
            <Route exact path="/" component={Home} />               
            <Route path="/acc_info" component={AccountInfo} />
            <Route path="/about" component={About} />
            <Route path="/chars" component={Chars} />

            <p>{process.env.BASE_API_URL}</p>
          </div>
        </div>
      </div>
    )
  }
}
