
import React from "react";
import Headline from "../components/Headline"
import {Col, Grid, Image, Label, Panel, Row} from "react-bootstrap";
import {Link, Route} from "react-router-dom";

export default class Map extends React.Component {
    render() {
      return (
        <div>
            <Grid>
                <Row>
                    <Col xs={6} md={12}>
                        <Headline>Map</Headline>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={9}>
                        <Image src="/static/images/map.jpg" thumbnail />
                    </Col>
                    <Col xs={6} md={3}>
                        <Panel>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Dungeon List</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <Link to="/dungeon/ice_dungeon"  >Ice Dungeon  </Link><br/>
                                <Link to="/dungeon/payon_caves"  >Payon Caves  </Link><br/>
                                <Link to="/dungeon/sunken_ship"  >Sunken Ship  </Link><br/>
                                <Link to="/dungeon/byalan"       >Byalan       </Link><br/>
                                <Link to="/dungeon/culvert"      >Culvert      </Link><br/>
                                <Link to="/dungeon/clock_tower"  >Clock Tower  </Link><br/>
                                <Link to="/dungeon/thors_vulcano">Thors Vulcano</Link><br/>
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={12}>
                        <hr/>
                    </Col>
                </Row>
            </Grid>
        </div>
      )
    }
  }