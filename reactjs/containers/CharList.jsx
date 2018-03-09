import React from "react";
import CharTable from "../components/CharTable"
import CharStatTable from "../components/CharStatTable"
import {Col, Grid, Image, Row} from "react-bootstrap";


export default class AccountInfo extends React.Component {
    render() {
        let obj = this.props.list_obj
        return(
          <Grid>
                <Row>
                    <Col xs={12} md={4}>
                        <Grid>
                            <Row>
                                <Col xs={6} md={2}>
                                    <Image src={"/static/images/test_sprite.png"} thumbnail />
                                </Col>
                                <Col xs={6} md={2}>
                                    <CharStatTable stats_obj={obj[0]}/>
                                </Col>
                            </Row>
                            <Row>
                                 <Col md={4}>
                                    <CharTable char_obj={obj[0]}/>
                                </Col>
                            </Row>
                        </Grid>
                    </Col>
                    <Col xs={12} md={4}>
                        <Grid>
                            <Row>
                                <Col xs={6} md={2}>
                                    <Image src={"/static/images/test_sprite2.png"} thumbnail />
                                </Col>
                                <Col xs={6} md={2}>
                                    <CharStatTable stats_obj={obj[1]}/>
                                </Col>
                            </Row>
                            <Row>
                                 <Col md={4}>
                                    <CharTable char_obj={obj[1]}/>
                                </Col>
                            </Row>
                        </Grid>
                    </Col>
                    <Col xs={12} md={4}>
                        <Grid>
                            <Row>
                                <Col xs={6} md={2}>
                                    <Image src={"/static/images/test_sprite3.png"} thumbnail />
                                </Col>
                                <Col xs={6} md={2}>
                                    <CharStatTable stats_obj={obj[2]}/>
                                </Col>
                            </Row>
                            <Row>
                                 <Col md={4}>
                                    <CharTable char_obj={obj[2]}/>
                                </Col>
                            </Row>
                        </Grid>
                    </Col>
                </Row>
            </Grid>
        )
    }
}