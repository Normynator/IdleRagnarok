import React from "react";
import Headline from "../components/Headline"
import * as apitestActions from "../actions/apitestActions"
import ApiTestComp from "../components/ApiTestComp"
import RenderLoading from "../components/RenderLoading"
import {connect} from "react-redux";

@connect(state => ({
  apiTest: state.apiTest,
}))

export default class ApiTest extends React.Component {

    componentDidMount() {
        let {dispatch, apiTest} = this.props
        if (!apiTest.isLoadingRequest && apiTest.result === undefined) {
            dispatch(apitestActions.fetchApiTest())
        }
    }

    render() {
      let {apiTest} = this.props
      if (apiTest.isLoadingRequest || apiTest.result === undefined) {
        return ( <RenderLoading/> )
      }
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Headline>API Test!</Headline>
              {apiTest.result !== undefined &&
                <ApiTestComp result={apiTest.result} />
              }
            </div>
          </div>
        </div>
      )
    }
  }