import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: []

    }
  }
  componentDidMount(){
    this.setState({
      images: carouselData
    })

  }

  leftClick = (e) => {
    // on click, image--

  }

  rightClick = () => {
    // on click, image ++

  }

  selectedImage = () => {
    return <img src={this.state.images} style={{display: 'block'}} alt="Mountains and Such" />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}