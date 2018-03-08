import React from "react";
import Headline from "../components/Headline"
import {Alert, Button, Col, Grid, Label, Row, Table} from "react-bootstrap";
import AlertDismissable from "../components/AlertDismissable"

export default class AccountInfo extends React.Component {
    showWarning = () => (
        <Alert bsStyle="warning">
            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
        </Alert>
    )

    render() {
      return (
        <div>
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
                        <Button bsStyle="danger" bsSize="large" onClick={this.showWarning}>Delete Account</Button>
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