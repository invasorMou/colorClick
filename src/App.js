import React from 'react';
import './App.css';
import ColorCard from './components/color-card';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      backgroundColor: 'white'
    }
  }

  handleClick = (color) => {
    this.setState({
      backgroundColor: color
    })
  }
  render(){
    const colors= ['pink', 'cyan', 'orange', 'yellow', 'teal', 'purple', 'brown' ]
    return (
      <div style={this.state} className="App">
        <div className="color-picker">
          <div className="title">
            <h1>Choose a Color!</h1>
          </div>
          {
            colors.map((color,idx) =>
            <ColorCard key={idx} color={color} onClick={this.handleClick} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
