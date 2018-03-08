import React from "react";
import Headline from "../components/Headline"
import {Button, Col, Grid, Image, Row, Thumbnail} from "react-bootstrap";
import MonsterInfo from "../components/MonsterInfo"
import {Link} from "react-router-dom";


export default class DungeonList extends React.Component {
    render() {
        let json_placeholder = "{\n" +
            "  \"1776\": {\n" +
            "    \"name\": \"Siroma\",\n" +
            "    \"items\": {\n" +
            "      \"1\": {\n" +
            "        \"title\": \"first item\",\n" +
            "        \"msg\": \"info text of the first item of Siroma\"\n" +
            "      },\n" +
            "      \"2\": {\n" +
            "        \"title\": \"second item\",\n" +
            "        \"msg\": \"info text of the second item of Siroma\"\n" +
            "      }\n" +
            "    }\n" +
            "  },\n" +
            "  \n" +
            "  \"1778\": {\n" +
            "    \"name\": \"Gazeti\",\n" +
            "    \"items\": {\n" +
            "      \"1\": {\n" +
            "        \"title\": \"first item\",\n" +
            "        \"msg\": \"info text of the first item of Gazeti\"\n" +
            "      },\n" +
            "      \"2\": {\n" +
            "        \"title\": \"second item\",\n" +
            "        \"msg\": \"info text of the second item of Gazeti\"\n" +
            "      }\n" +
            "    }\n" +
            "  },\n" +
            "  \n" +
            "  \"1780\": {\n" +
            "    \"name\": \"Muscipular\",\n" +
            "    \"items\": {\n" +
            "      \"1\": {\n" +
            "        \"title\": \"first item\",\n" +
            "        \"msg\": \"info text of the first item of Muscipular\"\n" +
            "      },\n" +
            "      \"2\": {\n" +
            "        \"title\": \"second item\",\n" +
            "        \"msg\": \"info text of the second item of Muscipular\"\n" +
            "      }\n" +
            "    }\n" +
            "  },\n" +
            "  \n" +
            "  \"1782\": {\n" +
            "    \"name\": \"Roween\",\n" +
            "    \"items\": {\n" +
            "      \"1\": {\n" +
            "        \"title\": \"first item\",\n" +
            "        \"msg\": \"info text of the first item of Roween\"\n" +
            "      },\n" +
            "      \"2\": {\n" +
            "        \"title\": \"second item\",\n" +
            "        \"msg\": \"info text of the second item of Roween\"\n" +
            "      }\n" +
            "    }\n" +
            "  }\n" +
            "}"
        let static_json_string = JSON.parse(json_placeholder);
        let items = [];
        for (var key in static_json_string) {
            items.push( <Col key={key} xs={6} md={3}>
                            <MonsterInfo monsterID={key} mobj={static_json_string[key]}/>
                        </Col>)
        }

      return (
        <div>
            <Grid>
                <Row>
                    <Col xs={6} md={12}>
                        <Headline>Dungeon Info</Headline>
                        <hr/>
                        <p>Name: {this.props.match.params.dungeonName}</p>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    {items}
                </Row>
                <Row>
                    <Col xs={6} md={6}>
                        <Link to="/map">
                            <Button bsStyle="primary" style={{ width: 200, height: 40 }}>Back</Button>
                        </Link>
                    </Col>
                </Row>
                <hr/>
            </Grid>
        </div>
      )
    }
  }