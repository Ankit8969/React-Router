import React from "react";

class Main extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.sortBy}</h2>
        <h2>Main Page</h2>
      </div>
    );
  }
}

export default Main;
