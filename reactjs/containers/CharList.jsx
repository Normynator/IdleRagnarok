import React from "react";
import CharTable from "../components/CharTable"
import CharStatTable from "../components/CharStatTable"
import {Col, Grid, Image, Row} from "react-bootstrap";


export default class AccountInfo extends React.Component {
    render() {
        let obj = this.props.list_obj
        console.log(obj[0].char)
        return(
          <Grid>
                <Row>
                    <Col xs={12} md={4}>
                        <Grid>
                            <Row>
                                <Col xs={6} md={2}>
                                    <Image src={"/static/images/"+obj[0].img} thumbnail />
                                </Col>
                                <Col xs={6} md={2}>
                                    <CharStatTable stats_obj={obj[0].stats}/>
                                </Col>
                            </Row>
                            <Row>
                                 <Col md={4}>
                                    <CharTable char_obj={obj[0].char}/>
                                </Col>
                            </Row>
                        </Grid>
                    </Col>
                    <Col xs={12} md={4}>
                        <Grid>
                            <Row>
                                <Col xs={6} md={2}>
                                    <Image src={"/static/images/"+obj[1].img} thumbnail />
                                </Col>
                                <Col xs={6} md={2}>
                                    <CharStatTable stats_obj={obj[1].stats}/>
                                </Col>
                            </Row>
                            <Row>
                                 <Col md={4}>
                                    <CharTable char_obj={obj[1].char}/>
                                </Col>
                            </Row>
                        </Grid>
                    </Col>
                    <Col xs={12} md={4}>
                        <Grid>
                            <Row>
                                <Col xs={6} md={2}>
                                    <Image src={"/static/images/"+obj[2].img} thumbnail />
                                </Col>
                                <Col xs={6} md={2}>
                                    <CharStatTable stats_obj={obj[2].stats}/>
                                </Col>
                            </Row>
                            <Row>
                                 <Col md={4}>
                                    <CharTable char_obj={obj[2].char}/>
                                </Col>
                            </Row>
                        </Grid>
                    </Col>
                </Row>
            </Grid>
        )
    }
}