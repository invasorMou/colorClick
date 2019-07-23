import React from 'react';

class ColorCard extends React.Component {
  render(){
    const style = {
      backgroundColor: this.props.color,
      boxShadow: "0px 0px 20px black"
    }

    return (
      <div style={style} className="color-card" onClick={()=>{this.props.onClick(this.props.color)}}>
      </div>
    )
  }
}

export default ColorCard;
