import React from "react";
import {Table} from "react-bootstrap";


export default class CharStatTable extends React.Component {
    render() {
        let sobj = this.props.stats_obj
      return (
        <div>
            <Table striped bordered condensed hover>
                <tbody>
                    <tr>
                        <td>STR</td>
                        <td>{sobj.str}</td>
                    </tr>
                    <tr>
                        <td>AGI</td>
                        <td>{sobj.agi}</td>
                    </tr>
                    <tr>
                        <td>INT</td>
                        <td>{sobj.int}</td>
                    </tr>
                    <tr>
                        <td>VIT</td>
                        <td>{sobj.vit}</td>
                    </tr>
                    <tr>
                        <td>DEX</td>
                        <td>{sobj.dex}</td>
                    </tr>
                    <tr>
                        <td>LUK</td>
                        <td>{sobj.luk}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
      )
    }
  }