import React from "react";
import { useParams } from "react-router";

class Random extends React.Component {
  render() {
    return (
      <div>
        <h2>
          {this.props.match.params.id}
          Random Page
        </h2>
      </div>
    );
  }
}

export default Random;
