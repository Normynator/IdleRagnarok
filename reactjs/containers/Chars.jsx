import React from "react";
import Headline from "../components/Headline"
import CharList from "./CharList"
import {Button, ButtonGroup, Col, Grid, Row} from "react-bootstrap";


// pID starts with 1
export default class AccountInfo extends React.Component {

    constructor(props) {
        super(props);
        // API CALL START
        let json_placeholder = "{\n  \"150001\": {\n    \"char\": {\n      \"name\": \"Angel of Darkness\",\n      \"class\": \"Lord Knight\",\n      \"blvl\": \"99\",\n      \"jlvl\": \"50\",\n      \"guild\": \"Gruppe 8\",\n      \"bexp\": \"1234\",\n      \"jexp\": \"4321\"\n    },\n    \"stats\":{\n      \"str\": \"99\",\n      \"agi\": \"99\",\n      \"vit\": \"99\",\n      \"int\": \"99\",\n      \"dex\": \"99\",\n      \"luk\": \"99\"\n    },\n    \"img\": \"test_sprite.png\"\n  },\n  \"150002\": {\n    \"char\": {\n      \"name\": \"Angel\",\n      \"class\": \"Creator\",\n      \"blvl\": \"99\",\n      \"jlvl\": \"50\",\n      \"guild\": \"Gruppe 8\",\n      \"bexp\": \"1234\",\n      \"jexp\": \"4321\"\n    },\n    \"stats\":{\n      \"str\": \"99\",\n      \"agi\": \"99\",\n      \"vit\": \"99\",\n      \"int\": \"99\",\n      \"dex\": \"99\",\n      \"luk\": \"99\"\n    },\n    \"img\": \"test_sprite2.png\"\n  },\n  \"150003\": {\n    \"char\": {\n      \"name\": \"Darkness\",\n      \"class\": \"Hunter\",\n      \"blvl\": \"99\",\n      \"jlvl\": \"50\",\n      \"guild\": \"Gruppe 8\",\n      \"bexp\": \"1234\",\n      \"jexp\": \"4321\"\n    },\n    \"stats\":{\n      \"str\": \"99\",\n      \"agi\": \"99\",\n      \"vit\": \"99\",\n      \"int\": \"99\",\n      \"dex\": \"99\",\n      \"luk\": \"99\"\n    },\n    \"img\": \"test_sprite3.png\"\n  },\n  \"150004\": {\n    \"char\": {\n      \"name\": \"Himmelsfaust\",\n      \"class\": \"Professor\",\n      \"blvl\": \"99\",\n      \"jlvl\": \"50\",\n      \"guild\": \"Gruppe 8\",\n      \"bexp\": \"1234\",\n      \"jexp\": \"4321\"\n    },\n    \"stats\":{\n      \"str\": \"99\",\n      \"agi\": \"99\",\n      \"vit\": \"99\",\n      \"int\": \"99\",\n      \"dex\": \"99\",\n      \"luk\": \"99\"\n    },\n    \"img\": \"test_sprite3.png\"\n  },\n  \"150005\": {\n    \"char\": {\n      \"name\": \"Evelynn\",\n      \"class\": \"Monk\",\n      \"blvl\": \"99\",\n      \"jlvl\": \"50\",\n      \"guild\": \"Gruppe 8\",\n      \"bexp\": \"1234\",\n      \"jexp\": \"4321\"\n    },\n    \"stats\":{\n      \"str\": \"99\",\n      \"agi\": \"99\",\n      \"vit\": \"99\",\n      \"int\": \"99\",\n      \"dex\": \"99\",\n      \"luk\": \"99\"\n    },\n    \"img\": \"test_sprite2.png\"\n  },\n  \"150006\": {\n    \"char\": {\n      \"name\": \"Normynator\",\n      \"class\": \"Lord Knight\",\n      \"blvl\": \"99\",\n      \"jlvl\": \"50\",\n      \"guild\": \"Gruppe 8\",\n      \"bexp\": \"1234\",\n      \"jexp\": \"4321\"\n    },\n    \"stats\":{\n      \"str\": \"99\",\n      \"agi\": \"99\",\n      \"vit\": \"99\",\n      \"int\": \"99\",\n      \"dex\": \"99\",\n      \"luk\": \"99\"\n    },\n    \"img\": \"test_sprite.png\"\n  },\n  \"150007\": {\n    \"char\": {\n      \"name\": \"Normy\",\n      \"class\": \"Whitesmith\",\n      \"blvl\": \"99\",\n      \"jlvl\": \"50\",\n      \"guild\": \"Gruppe 8\",\n      \"bexp\": \"1234\",\n      \"jexp\": \"4321\"\n    },\n    \"stats\":{\n      \"str\": \"99\",\n      \"agi\": \"99\",\n      \"vit\": \"99\",\n      \"int\": \"99\",\n      \"dex\": \"99\",\n      \"luk\": \"99\"\n    },\n    \"img\": \"test_sprite2.png\"\n  },\n  \"150008\": {\n    \"char\": {\n      \"name\": \"Angell\",\n      \"class\": \"High Priest\",\n      \"blvl\": \"99\",\n      \"jlvl\": \"50\",\n      \"guild\": \"Gruppe 8\",\n      \"bexp\": \"1234\",\n      \"jexp\": \"4321\"\n    },\n    \"stats\":{\n      \"str\": \"99\",\n      \"agi\": \"99\",\n      \"vit\": \"99\",\n      \"int\": \"99\",\n      \"dex\": \"99\",\n      \"luk\": \"99\"\n    },\n    \"img\": \"test_sprite3.png\"\n  },\n  \"150009\": {\n    \"char\": {\n      \"name\": \"Shyrena\",\n      \"class\": \"Wizard\",\n      \"blvl\": \"99\",\n      \"jlvl\": \"50\",\n      \"guild\": \"Gruppe 8\",\n      \"bexp\": \"1234\",\n      \"jexp\": \"4321\"\n    },\n    \"stats\":{\n      \"str\": \"99\",\n      \"agi\": \"99\",\n      \"vit\": \"99\",\n      \"int\": \"99\",\n      \"dex\": \"99\",\n      \"luk\": \"99\"\n    },\n    \"img\": \"test_sprite.png\"\n  }\n}";
        // API CALL END

        // TODO: Crash, wenn Chars.length nicht durch 3 teilbar ist
        let static_json_string  = JSON.parse(json_placeholder)
        let chars = [];
        for (let key in static_json_string) {
            if (static_json_string.hasOwnProperty(key))
                chars.push(static_json_string[key])
        }
        let size = chars.length/3;

        this.state = {
            page: 1,
            chars: chars,
            size: size
        };
   }

    toggleNextPage() {
      this.setState(state => ({
        page: this.page_in_bound((state.page + 1),state.size)
      }));
    }

    togglePrevPage() {
      this.setState(state => ({
        page: this.page_in_bound((state.page - 1),state.size)
      }));
    }

    get_next_items(pID, chars) {
        const end = 3*pID; // set endpoint
        const start = end-3; // set startpoint
        let res = [];
        for(let i = start; i < end; i++){
            res.push(chars[i])
        }
        return res
    }

    page_in_bound(pID, size) {
        if(pID < 1){  // page index to small, go to last page
            return size
        }
        if(pID > size) { // page index to high, go to first page
            return 1
        }
        return pID
    }

    render() {
      return (
        <div>
            <Grid>
                <Row>
                    <Col xs={12} md={10}>
                        <Headline>Chars</Headline>
                    </Col>
                    <Col xs={6} md={2}>
                        <ButtonGroup>
                            <Button bsSize="large" onClick={this.togglePrevPage.bind(this)}>Prev</Button>
                            <Button className="pull-right" bsSize="large" onClick={this.toggleNextPage.bind(this)}>Next</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Grid>
            <hr/>
            <CharList list_obj={this.get_next_items(this.state.page, this.state.chars)} />
            <hr/>
        </div>
      )
    }
  }