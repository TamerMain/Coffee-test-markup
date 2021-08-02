import React, { Component } from "react";
import Slider from "react-slick";

import './Carousel.css';
import rightArrowImage from "../../SVG/arrow1.svg";
import leftArrowImage from "../../SVG/arrow2.svg";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      >{props.showArrows ? <img src={rightArrowImage} alt='Right Menu Arrow'/> : <></>}</div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block'}}
        onClick={onClick}
      >{props.showArrows ? <img src={leftArrowImage} alt='Left Menu Arrow'/> : <></>}</div>
    );
  }

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: this.props.sliceSize,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow showArrows={this.props.showArrows}/>,
      prevArrow: <SamplePrevArrow showArrows={this.props.showArrows}/>,
    };
    return (
      <div>
        <Slider {...settings}>
           {this.props.children}
        </Slider>
      </div>
    );
  }
}