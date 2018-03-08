import React from "react";
import {Table} from "react-bootstrap";


export default class CharStatTable extends React.Component {
    render() {
      return (
        <div>
            <Table striped bordered condensed hover>
                <tbody>
                    <tr>
                        <td>STR</td>
                        <td>99</td>
                    </tr>
                    <tr>
                        <td>AGI</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>INT</td>
                        <td>27</td>
                    </tr>
                    <tr>
                        <td>VIT</td>
                        <td>88</td>
                    </tr>
                    <tr>
                        <td>DEX</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>LUK</td>
                        <td>12</td>
                    </tr>
                </tbody>
            </Table>
        </div>
      )
    }
  }