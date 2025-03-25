import { Component } from "react";

class NextGp extends Component {
  render() {
    const { nextGrandP } = this.props;
    return <h1>{nextGrandP[0].meeting_name}</h1>;
  }
}
export default NextGp;
