import React from 'react';

class CoordinatesButton extends React.Component {
  constructor(){
    super()
    this.createArray = this.createArray.bind(this)
  }

  onReceiveCoordinates(arr){

  }

  createArray(event){
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return(
      <div>
        <button onClick={this.createArray}>Click Me!</button>
      </div>
    )
  }
}









module.exports = CoordinatesButton;
