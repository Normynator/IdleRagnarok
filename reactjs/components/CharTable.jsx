import React from "react";
import Headline from "../components/Headline"
import {Table} from "react-bootstrap";
import {BrowserView, MobileView, isBrowser, isMobile} from 'react-device-detect'



export default class CharTable extends React.Component {
    render() {
      return (
        <div>
            <Headline>Angel of Darkness</Headline>
            <Table striped bordered condensed hover>
                <tbody>
                    <tr>
                        <td>Class</td>
                        <td>Wizard</td>
                    </tr>
                    <tr>
                        <td>Base Level</td>
                        <td>96</td>
                    </tr>
                    <tr>
                        <td>Job Level</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Guild</td>
                        <td>Gruppe 8</td>
                    </tr>
                    <tr>
                        <td>Base Exp</td>
                        <td>3824293847</td>
                    </tr>
                    <tr>
                        <td>Job Exp</td>
                        <td>1231587645</td>
                    </tr>
                </tbody>
            </Table>
            <MobileView device={isMobile}>
                <h1> This is rendered only on mobile </h1>
            </MobileView>
            <hr/>
            <br/>
        </div>
      )
    }
  }