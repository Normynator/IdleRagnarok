import React from "react";
import {Image, OverlayTrigger, Popover} from "react-bootstrap";

const popoverHoverFocus = (title, msg) => (
    <Popover id="popover-trigger-hover-focus" title={title}>
        {msg}
    </Popover>
)
export default class PopoverHoverFocusBottom extends React.Component {
    render() {
      return (
          <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus(this.props.title, this.props.msg)}>
              <Image src={this.props.src} thumbnail />
            </OverlayTrigger>
      )
    }
  }