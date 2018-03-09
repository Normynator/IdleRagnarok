import React from "react";
import Headline from "../components/Headline"
import {Col, Grid, Row} from "react-bootstrap";

export default class About extends React.Component {
    render() {
      return (
        <div>
            <Grid>
                <Row>
                    <Col xs={6} md={6}>
                        <Headline>About</Headline>
                        <hr/>
                        <p>Made by Normynator</p>

                        <hr/>
                    </Col>
                </Row>
            </Grid>
        </div>
      )
    }
  }