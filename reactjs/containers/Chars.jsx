import React from "react";
import Headline from "../components/Headline"
import CharList from "./CharList"
import {Button, ButtonGroup, Col, Grid, Row} from "react-bootstrap";
import * as apiCharActions from "../actions/apiCharActions";
import RenderLoading from "../components/RenderLoading";
import {connect} from "react-redux";

@connect(state => ({
    apiCharSelect: state.apiCharSelect,
}))

export default class AccountInfo extends React.Component {

    componentDidMount() {
        let {dispatch, apiCharSelect} = this.props
        if (!apiCharSelect.isLoadingRequest && apiCharSelect.result === undefined) {
            dispatch(apiCharActions.fetchCharsApi())
        } else {
            this.generate_content(this.props.apiCharSelect.result)
        }
    }

    componentDidUpdate() {
        if (this.props.apiCharSelect.result !== undefined && !this.state.callbackExecuted) {
            this.generate_content(this.props.apiCharSelect.result)
        }
    }


    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            chars: undefined,
            size: 0,
            callbackExecuted: false
        };
    }

    generate_content(api_ret) {
        // TODO: Crash, wenn Chars.length nicht durch 3 teilbar ist
        let chars = api_ret;
        let size = chars.length / 3;
        this.setState(() => ({
            chars: chars,
            size: size,
            callbackExecuted: true
        }));
    }

    toggleNextPage() {
        this.setState(state => ({
            page: this.page_in_bound((state.page + 1), state.size)
        }));
    }

    togglePrevPage() {
        this.setState(state => ({
            page: this.page_in_bound((state.page - 1), state.size)
        }));
    }

    get_next_items(pID, chars) {
        const end = 3 * pID; // set endpoint
        const start = end - 3; // set startpoint
        let res = [];
        for (let i = start; i < end; i++) {
            res.push(chars[i])
        }
        return res
    }

    page_in_bound(pID, size) {
        if (pID < 1) {  // page index to small, go to last page
            return size
        }
        if (pID > size) { // page index to high, go to first page
            return 1
        }
        return pID
    }

    render() {
        let {apiCharSelect} = this.props;
        if (apiCharSelect.isLoadingRequest || apiCharSelect.result === undefined) {
            return (<RenderLoading/>)
        }
        if (this.state.chars === undefined) {
            return (<RenderLoading/>)
        }
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
                                <Button className="pull-right" bsSize="large"
                                        onClick={this.toggleNextPage.bind(this)}>Next</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Grid>
                <hr/>
                <CharList list_obj={this.get_next_items(this.state.page, this.state.chars)}/>
                <hr/>
            </div>
        )
    }
}