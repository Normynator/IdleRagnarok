import React from "react";
import Headline from "../components/Headline"
import PopoverHoverFocusBottom from "../components/PopoverHoverFocusBottom"
import {
    Button, Col, Grid, Image, Label, OverlayTrigger, Popover, ProgressBar, Row, Table, Thumbnail,
} from "react-bootstrap";

export default class Mission extends React.Component {

    render() {
      return (
        <div>
            <Grid>
                <Row>
                    <Col  xs={6} md={12}>
                        <Headline>Current Mission</Headline>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={4}>
                        <Grid>
                            <Row>
                                <Col xs={6} md={2}>
                                    <p>Selected Char</p>
                                    <Image src="/static/images/test_sprite.png" thumbnail />
                                </Col>
                                <Col xs={6} md={2}>
                                    <p>Stats</p>
                                    <Table striped bordered condensed hover>
                                        <tbody>
                                            <tr>
                                                <td><Label>Damage:</Label> 2000</td>
                                            </tr>
                                            <tr>
                                                <td><Label>Health:</Label> 20135</td>
                                            </tr>
                                            <tr>
                                                <td><Label>DEF:</Label> 89</td>
                                            </tr>
                                            <tr>
                                                <td><Label>MDEF:</Label> 20</td>
                                            </tr>
                                            <tr>
                                                <td><Label>Buffs:</Label> Blessing, Agi</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={2}>
                                    <Image src="/static/images/ws_cartboost.gif" thumbnail />
                                    <Image src="/static/images/ws_meltdown.gif" thumbnail />
                                    <Image src="/static/images/ws_overthrustmax.gif" thumbnail />
                                    <Image src="/static/images/ws_weaponrefine.gif" thumbnail />
                                    <Image src="/static/images/ws_carttermination.gif" thumbnail />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    <Headline>Angel of Darkness</Headline>
                                </Col>
                            </Row>
                        </Grid>
                    </Col>
                    <Col xsHidden md={4}>
                        <br/>
                        <Thumbnail alt="171x180" src="/static/images/battle.png" />
                    </Col>

                    <Col xs={6} md={4}>
                        <Grid>
                            <Row>
                                <Col xs={6} md={2}>
                                    <p>Enemy</p>
                                    <Image src="/static/images/beelzebub.gif" thumbnail />
                                </Col>
                                <Col xs={6} md={2}>
                                    <p>Stats</p>
                                    <Table striped bordered condensed hover>
                                        <tbody>
                                            <tr>
                                                <td><Label>Damage:</Label> 2000</td>
                                            </tr>
                                            <tr>
                                                <td><Label>Health:</Label> 20135</td>
                                            </tr>
                                            <tr>
                                                <td><Label>DEF:</Label> 89</td>
                                            </tr>
                                            <tr>
                                                <td><Label>MDEF:</Label> 20</td>
                                            </tr>
                                            <tr>
                                                <td><Label>Buffs:</Label> Blessing, Agi</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={2}>
                                    <Image src="/static/images/ws_cartboost.gif" thumbnail />
                                    <Image src="/static/images/ws_meltdown.gif" thumbnail />
                                    <Image src="/static/images/ws_overthrustmax.gif" thumbnail />
                                    <Image src="/static/images/ws_weaponrefine.gif" thumbnail />
                                    <Image src="/static/images/ws_carttermination.gif" thumbnail />
                                </Col>
                                <Col xs={6} md={2}>
                                    <PopoverHoverFocusBottom src={"/static/images/742.gif"} title={"Title"} msg={"info text."}/>
                                    <PopoverHoverFocusBottom src={"/static/images/1565.gif"} title={"Title"} msg={"info text."}/>
                                    <PopoverHoverFocusBottom src={"/static/images/2000.gif"} title={"Title"} msg={"info text."}/>
                                    <PopoverHoverFocusBottom src={"/static/images/2423.gif"} title={"Title"} msg={"info text."}/>
                                    <PopoverHoverFocusBottom src={"/static/images/card.gif"} title={"Title"} msg={"info text."}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={4}>
                                    <Headline>Beelzebub</Headline>
                                </Col>
                            </Row>
                        </Grid>
                    </Col>
                </Row>
                <br/>
                <hr/>
                <Row>
                    <Col xs={10} md={10}>
                        <ProgressBar active striped bsStyle="success" now={80} label={'3:30'} />
                    </Col>
                    <Col xs={2} md={2}>
                        <Button bsStyle="warning" bsSize="small">Cancle Mission</Button>
                    </Col>
                </Row>
                <hr/>
            </Grid>
        </div>
      )
    }
  }