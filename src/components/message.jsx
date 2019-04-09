import React, { Component } from "react";

class Message extends Component {
  render() {
    return (
      <div>
        <h1>Hello Everyone!</h1>
        <p>{this.props.msg}</p>
      </div>
    );
  }
}

export default Message;
