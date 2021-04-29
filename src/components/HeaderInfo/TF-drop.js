import React from "react";
import { Link } from "react-router-dom";
import "../../scss/TF-drop.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { displayPartsToString } from "typescript";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

export default class FDrop extends React.Component {
  state = {
    value: "+380954756441",
    value1: "1+380954756441",
    value2: "2+380954756441",
    value3: "3+380954756441",
    copied: false,
  };

  render() {
    return (
      <div className="dropdown">
        <input style={Style} value={this.state.value} />
        <div className="menu__link-1 _goto-block">
          <CopyToClipboard
            text={this.state.value}
            onCopy={() => this.setState({ copied: true })}
          >
            <Tooltip
              position="left"
              trigger="mouseenter "
              arrow="true"
              inertia="true"
              theme="light"
              html={<div>Натисніть, щоб скопіювати</div>}
            >
              <span> +380954756441</span>
            </Tooltip>
          </CopyToClipboard>
        </div>
        <div className="dropdown-content">
          <input style={Style} value={this.state.value1} />
          <CopyToClipboard
            text={this.state.value1}
            onCopy={() => this.setState({ copied: true })}
          >
            <a> {this.state.value1}</a>
          </CopyToClipboard>
          <input style={Style} value={this.state.value2} />
          <CopyToClipboard
            text={this.state.value2}
            onCopy={() => this.setState({ copied: true })}
          >
            <a> {this.state.value2}</a>
          </CopyToClipboard>
          <input style={Style} value={this.state.value3} />
          <CopyToClipboard
            text={this.state.value3}
            onCopy={() => this.setState({ copied: true })}
          >
            <a> {this.state.value3}</a>
          </CopyToClipboard>
        </div>
      </div>
    );
  }
}

const Style = {
  display: "none",
};
