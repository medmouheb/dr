import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'



class ControlledCarousel extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <div >
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >

          {this.props.data.map(element => {
            return (
              <Carousel.Item>
                <img
                  style={{height:"400px",width:"100%"}}
                  src={element.Src}
                  alt={element.Titre}
                />
                <Carousel.Caption>
                  <h3>{element.Titre}</h3>
                  <p>{element.Description}</p>
                </Carousel.Caption>
              </Carousel.Item>

            )
          })}

        </Carousel>
      </div>

    );
  }
}

export default ControlledCarousel;