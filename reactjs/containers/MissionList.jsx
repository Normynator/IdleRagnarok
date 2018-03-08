import React from "react";
import Headline from "../components/Headline"
import {Col, Grid, Image, Row} from "react-bootstrap";

export default class MissionList extends React.Component {
    render() {
      return (
        <div>
            <Grid>
                <Row>
                    <Col xs={6} md={6}>
                        <Headline>Mission List</Headline>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={12}>
                        <p>By Normynator</p>
                    </Col>
                </Row>
            </Grid>
        </div>
      )
    }
  }