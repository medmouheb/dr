import React, { Component } from 'react'
import './slideMainImage.css'


class SlideMainImage extends Component {
    state = {currentIndex :0}
  render() {
    return (
      <div style= {{display:"flex"}}>
          <div className="ProductImageSlides" >
          {this.props.data.map((element, index)=> {
              return (
                <img src= {element}  onClick = {()=>{this.setState({currentIndex: index})}}/> 
              )
          })}
        </div>
        <div>
          <img className="MainProductImage" src = {this.props.data[this.state.currentIndex] }/>
        </div>
        
      </div>
    )
  }
}
export default SlideMainImage