import React from "react";
import './drum-machine.css'
import { ControlsContainer } from "../controls-container";
import { DrumPad } from "../drum-pad";

export class DrumMachine extends React.Component {

  render() {
    return(
      <div className="drum-machine">
        <DrumPad handleKeyDown={this.props.handleKeyDown} keys={this.props.keys} handleClick={this.props.handleClick}/>
        <ControlsContainer soundName={this.props.soundName} volume={this.props.volume} changeVolume={this.props.changeVolume}/>
      </div>
    )
  }
}