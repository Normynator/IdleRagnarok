import React from "react";
import Headline from "../components/Headline"
import {Col, Grid, Row} from "react-bootstrap";


export default class DungeonList extends React.Component {
    render() {
        console.log(this.props.match.params)
      return (
        <div>
            <Grid>
                <Row>
                    <Col xs={6} md={6}>
                        <Headline>Dungeon Info</Headline>
                        <hr/>
                        <p>Name: {this.props.match.params.dungeonName}</p>
                        <hr/>
                    </Col>
                </Row>
            </Grid>
        </div>
      )
    }
  }