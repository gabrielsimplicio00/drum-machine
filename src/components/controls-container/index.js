import React from "react";
import './controls-container.css'

export class ControlsContainer extends React.Component {

  render() {
    return(
      <div className="controls-container">
        {/* <div className="control"></div> */}
        <p id="display">{this.props.soundName}</p>
        <div className="volume"><input type="range" className="form-range" min="0" max="1" step={0.01} defaultValue={this.props.volume} onInput={this.props.changeVolume} id="customRange2"></input></div>
        <p className="volume-display">Volume: {Math.round(this.props.volume * 100)}</p>
        {/* <div className="control"></div> */}
      </div>
    )
  }
}