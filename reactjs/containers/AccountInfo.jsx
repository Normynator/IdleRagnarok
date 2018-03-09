import React from "react";
import Headline from "../components/Headline"
import { Button, Col, Grid, Label, Row, Table} from "react-bootstrap";
import DeleteAccWarning from "../components/DeleteAccWarning"
import {connect} from "react-redux";
import * as warningActions from "../actions/warningActions";

@connect(state => ({
    counters: state.counters,
}))

export default class AccountInfo extends React.Component {

    handleClick() {
        let {dispatch} = this.props;
        console.log(this.props);
        dispatch(warningActions.changeDeleteWarning())
    }

    render() {
      return (
        <div>
            <DeleteAccWarning/>
            <Headline>Account Info</Headline>
            <hr/>
            <h4>
                Mail: <Label>Test@mail.com</Label>
            </h4>
            <Table striped bordered condensed hover>
                <tbody>
                    <tr>
                        <td>E-Mail</td>
                        <td>test@test-mail.com</td>
                    </tr>
                    <tr>
                        <td>Account Name</td>
                        <td>Normynator</td>
                    </tr>
                    <tr>
                        <td>Account ID</td>
                        <td>8977665365</td>
                    </tr>
                    <tr>
                        <td>Zeny</td>
                        <td>99999999</td>
                    </tr>
                    <tr>
                        <td>Chars on Account</td>
                        <td>9</td>
                    </tr>
                </tbody>
            </Table>
            <Grid>
                <Row>
                    <Col xs={6} md={2}>
                        <Button bsStyle="danger" bsSize="large" onClick={() => this.handleClick()}>Delete Account</Button>
                    </Col>
                    <Col xs={6} md={2}>
                        <Button bsStyle="warning" bsSize="large">Change Password</Button>
                    </Col>
                    <Col xs={6} mdPush={6}>
                        <Button bsStyle="primary" bsSize="large">Change Mail</Button>
                    </Col>
                </Row>
            </Grid>
            <hr/>
        </div>
      )
    }
  }