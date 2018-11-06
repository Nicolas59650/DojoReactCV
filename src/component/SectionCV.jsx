import React, { Component } from "react";
import DetailItem from "./DetailItem";

class SectionCV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "ok"
    };
  }
  handleClick = details => {
    this.setState({ text: details });
  };

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          {this.props.items.map(item => {
            return (
              <li
                key={item.title}
                onClick={() => {
                  this.handleClick(item.details);
                }}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
        <DetailItem content={this.state.text} />
      </div>
    );
  }
}

export default SectionCV;
