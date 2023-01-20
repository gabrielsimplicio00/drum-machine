import React from "react";
import './drum-pad.css';

export class DrumPad extends React.Component {

  render() {
    return (
      <div className="drum-pads">
          {document.addEventListener('keydown', this.props.handleKeyDown)}
          <div className="drum-pad" id="q" onClick={this.props.handleClick}>Q</div>
          <div className="drum-pad" id="w" onClick={this.props.handleClick}>W</div>
          <div className="drum-pad" id="e" onClick={this.props.handleClick}>E</div>
          <div className="drum-pad" id="a" onClick={this.props.handleClick}>A</div>
          <div className="drum-pad" id="s" onClick={this.props.handleClick}>S</div>
          <div className="drum-pad" id="d" onClick={this.props.handleClick}>D</div>
          <div className="drum-pad" id="z" onClick={this.props.handleClick}>Z</div>
          <div className="drum-pad" id="x" onClick={this.props.handleClick}>X</div>
          <div className="drum-pad" id="c" onClick={this.props.handleClick}>C</div>
      </div>
      
    )
  }
}