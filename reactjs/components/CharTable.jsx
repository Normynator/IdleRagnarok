import React from "react";
import Headline from "../components/Headline"
import {Table} from "react-bootstrap";
import {BrowserView, isBrowser, isMobile, MobileView} from 'react-device-detect'

export default class CharTable extends React.Component {

    render() {
        let cobj = this.props.char_obj;
        return (
            <div>
                <Headline>{cobj.name}</Headline>
                <Table striped bordered condensed hover>
                    <tbody>
                    <tr>
                        <td>Class</td>
                        <td>{cobj.class_name}</td>
                    </tr>
                    <tr>
                        <td>Base Level</td>
                        <td>{cobj.base_level}</td>
                    </tr>
                    <tr>
                        <td>Job Level</td>
                        <td>{cobj.job_level}</td>
                    </tr>
                    <tr>
                        <td>Guild</td>
                        <td>{cobj.guild_id}</td>
                    </tr>
                    <tr>
                        <td>Base Exp</td>
                        <td>{cobj.base_exp}</td>
                    </tr>
                    <tr>
                        <td>Job Exp</td>
                        <td>{cobj.job_exp}</td>
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