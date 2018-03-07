import React from "react";
import Headline from "../components/Headline"
import {Table} from "react-bootstrap";


export default class AccountInfo extends React.Component {
    render() {
      return (
        <div>
            <Headline>Account Info</Headline>
            <hr/>

            <p>This is a Placeholder</p>
            <Table striped bordered condensed hover>
               <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
               </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
            <p>This is a Placeholder</p>

            <hr/>
        </div>
      )
    }
  }