import React from 'react';
import './App.css';
import { DrumMachine } from './components/drum-machine';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keys: [
        {
          key: 'q',
          song: 'Heater-1',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        },
        {
          key: 'w',
          song: 'Heater-2',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        },
        {
          key: 'e',
          song: 'Heater-3',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        },
        {
          key: 'a',
          song: 'Heater-4',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
        },
        {
          key: 's',
          song: 'Heater-6',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        },
        {
          key: 'd',
          song: 'Dsc_Oh',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        },
        {
          key: 'z',
          song: 'Kick_n_Hat',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
        },
        {
          key: 'x',
          song: 'RP4_KICK_1',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        },
        {
          key: 'c',
          song: 'Cev_H2',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        }
      ],
      currentSoundName: '',
      volume: 0.5
    }
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changeVolume = this.changeVolume.bind(this)
  }

  handleKeyDown(event) {
    this.state.keys.map((pad) => {
      if(event.key === pad.key) {
        let sound = new Audio(pad.url)
        sound.volume =this.state.volume
        this.setState({
          currentSoundName: pad.song
        })
        return sound.play()
      }
      return true
    })
  }

  handleClick(event) {
    this.state.keys.map((pad) => {
      if(event.target.id === pad.key) {
        let sound = new Audio(pad.url)
        sound.volume = this.state.volume
        this.setState({
          currentSoundName: pad.song
        })
        return sound.play()
      }
      return true
    })
  }

  changeVolume(event) {
    this.setState({
      volume: event.target.value
    })
  }

  render() {
    return (
      <div className="App" >
        <h1>Drum Machine</h1>
        <DrumMachine handleKeyDown={this.handleKeyDown} keys={this.state.keys} handleClick={this.handleClick} soundName={this.state.currentSoundName} changeVolume={this.changeVolume} volume={this.state.volume} />
      </div>
    );
  }
}

export default App;
