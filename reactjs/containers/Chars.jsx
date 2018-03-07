import React from "react";
import Headline from "../components/Headline"
import CharTable from "../components/CharTable"
import CharStatTable from "../components/CharStatTable"
import {Button, ButtonGroup, Col, Grid, Image, Row} from "react-bootstrap";


export default class AccountInfo extends React.Component {
    render() {
      return (
        <div>
            <Grid>
                <Row>
                    <Col xs={12} md={10}>
                        <Headline>Chars</Headline>
                    </Col>
                    <Col xs={6} md={2}>
                        <ButtonGroup>
                            <Button bsSize="large">Prev</Button>
                            <Button className="pull-right" bsSize="large">Next</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Grid>
            <hr/>
            <Grid>
                <Row>
                    <Col xs={12} md={4}>
                        <Grid>
                            <Row>
                                <Col xs={6} md={2}>
                                    <Image src="/static/images/test_sprite.png" thumbnail />
                                </Col>
                                <Col xs={6} md={2}>
                                    <CharStatTable/>
                                </Col>
                            </Row>
                            <Row>
                                 <Col md={4}>
                                    <CharTable/>
                                </Col>
                            </Row>
                        </Grid>
                    </Col>
                    <Col xs={12} md={4}>
                        <Grid>
                            <Row>
                                <Col xs={6} md={2}>
                                    <Image src="/static/images/test_sprite2.png" thumbnail />
                                </Col>
                                <Col xs={6} md={2}>
                                    <CharStatTable/>
                                </Col>
                            </Row>
                            <Row>
                                 <Col md={4}>
                                    <CharTable/>
                                </Col>
                            </Row>
                        </Grid>
                    </Col>
                    <Col xs={12} md={4}>
                        <Grid>
                            <Row>
                                <Col xs={6} md={2}>
                                    <Image src="/static/images/test_sprite3.png" thumbnail />
                                </Col>
                                <Col xs={6} md={2}>
                                    <CharStatTable/>
                                </Col>
                            </Row>
                            <Row>
                                 <Col md={4}>
                                    <CharTable/>
                                </Col>
                            </Row>
                        </Grid>
                    </Col>
                </Row>
            </Grid>
            <hr/>
        </div>
      )
    }
  }