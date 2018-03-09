import React from "react";
import {Alert, Button} from "react-bootstrap";
import {connect} from "react-redux";
import * as warningActions from "../actions/warningActions";


@connect(state => ({
    deleteWarnings: state.deleteWarnings
}))

export default class DeleteAccWarning extends React.Component {

    handleClick() {
        let {dispatch} = this.props;
        dispatch(warningActions.changeDeleteWarning())
    }

    render() {
        let {deleteWarnings} = this.props;
        if (deleteWarnings.show) {
            return (
                <Alert bsStyle="danger">
                    <h4>Oh snap! You got an error!</h4>
                    <p>
                        Change this and that and try again. Duis mollis, est non commodo
                        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                        Cras mattis consectetur purus sit amet fermentum.
                    </p>
                    <p>
                        <Button bsStyle="danger">Take this action</Button>
                        <Button onClick={() => this.handleClick()}>Cancel</Button>
                    </p>
                </Alert>
            );
        }
        return <p></p>
  }
}