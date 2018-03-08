import React from "react"
import Radium from "radium"
import { connect } from "react-redux"

import NavBar from "../components/NavBar"

import AccountInfo from "./AccountInfo"
import Home from "./Home"
import About from "./About"
import Chars from "./Chars"
import Mission from "./Mission"
import MissionList from "./MissionList"
import Map from "./Map"
import DungeonList from "./DungeonList"

import { Route } from "react-router-dom"

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
            
            <Route exact path="/"           component={Home} />
            <Route path="/acc_info"         component={AccountInfo} />
            <Route path="/about"            component={About} />
            <Route path="/chars"            component={Chars} />
            <Route path="/mission"          component={Mission} />
            <Route path="/mission_list"     component={MissionList} />
            <Route path="/map"              component={Map} />
            <Route path="/dungeon/:dungeonName" component={DungeonList}/>

            <p>{process.env.BASE_API_URL}</p>
          </div>
        </div>
      </div>
    )
  }
}
